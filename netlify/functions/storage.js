const { getStore } = require("@netlify/blobs"); 

function json(obj, statusCode) { 

  return { 

    statusCode: statusCode || 200, 

    headers: { "Content-Type": "application/json" }, 

    body: JSON.stringify(obj), 

  }; 

} 

 

exports.handler = async (event) => { 

  if (event.httpMethod !== "POST") { 

    return json({ error: "Method not allowed" }, 405); 

  } 

 

  let body; 

  try { 

    body = JSON.parse(event.body || "{}"); 

  } catch (e) { 

    return json({ error: "Invalid JSON body" }, 400); 

  } 

 

  const { action, key, value, prefix } = body; 

  // One shared store for the whole canteen: every cashier reads/writes here. 

  const store = getStore({ name: "cantine", consistency: "strong" }); 

 

  try { 

    if (action === "get") { 

      if (!key) return json({ error: "Missing key" }, 400); 

      const v = await store.get(key, { type: "text" }); 

      return json({ value: v === undefined ? null : v }); 

    } 

 

    if (action === "set") { 

      if (!key) return json({ error: "Missing key" }, 400); 

      await store.set(key, String(value)); 

      return json({ ok: true }); 

    } 

 

    if (action === "delete") { 

      if (!key) return json({ error: "Missing key" }, 400); 

      await store.delete(key); 

      return json({ ok: true }); 

    } 

 

    if (action === "list") { 

      const { blobs } = await store.list({ prefix: prefix || "" }); 

      return json({ keys: blobs.map((b) => b.key) }); 

    } 

 

    return json({ error: "Unknown action: " + action }, 400); 

  } catch (err) { 

    return json({ error: String((err && err.message) || err) }, 500); 

  } 

}; 
