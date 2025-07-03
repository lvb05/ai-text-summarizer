async function summarize() {
  const inputText = document.getElementById("inputText").value;
  const outputDiv = document.getElementById("output");

  // Basic validation
  if (!inputText.trim()) {
    outputDiv.textContent = "⚠️ Please enter some text to summarize.";
    return;
  }

  // Show loading state
  outputDiv.textContent = "⏳ Summarizing...";

  try {
    const response = await fetch("http://localhost:3000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: inputText })
    });

    const data = await response.json();

    if (response.ok) {
      outputDiv.textContent = data.summary || "✅ No summary returned.";
    } else {
      outputDiv.textContent = `❌ Error: ${data.error || "Something went wrong."}`;
    }
  } catch (error) {
    console.error("Error:", error);
    outputDiv.textContent = "🚨 Network error. Please try again later.";
  }
}
