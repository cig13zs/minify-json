const sample = "{\n  \"fleet\": \"cig13zs\",\n  \"tools_count\": 61,\n  \"categories\": [\n    \"Privacy & Web\",\n    \"AI & Text\",\n    \"Data, SQL & JSON\",\n    \"Developer & Terminal\",\n    \"Design & Frontend\"\n  ],\n  \"guarantee\": {\n    \"telemetry\": false,\n    \"offline\": true,\n    \"license\": \"MIT\"\n  }\n}";

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const statsEl = document.getElementById('output-stats') || document.getElementById('stats');

function process() {
  const txt = inputEl.value;
  if (!txt.trim()) { outputEl.value = ''; if (statsEl) statsEl.textContent = 'Empty input'; return; }
  try {
    const res = MinifyJSON.minify(txt);
    outputEl.value = res.minified;
    if (statsEl) statsEl.textContent = `Minified: ${res.origSize} B → ${res.miniSize} B (${res.compressionPct} smaller)`;
  } catch (err) {
    outputEl.value = 'Invalid JSON: ' + err.message;
  }
}

document.getElementById('btn-run').addEventListener('click', process);
inputEl.addEventListener('input', process);
document.getElementById('btn-sample').addEventListener('click', () => { inputEl.value = sample; process(); });
document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(outputEl.value); alert('Copied minified JSON!'); });
if (document.getElementById('btn-clear')) document.getElementById('btn-clear').addEventListener('click', () => { inputEl.value = ''; outputEl.value = ''; });
