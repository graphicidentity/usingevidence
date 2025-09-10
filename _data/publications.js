const fs = require('fs');

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(',');
  return lines.map(line => {
    const cols = line.split(',');
    const row = {};
    headers.forEach((h, i) => row[h.trim()] = (cols[i] || '').trim());
    return row;
  });
}

module.exports = () => {
  let merged = [];
  try {
    const json = JSON.parse(fs.readFileSync(__dirname + '/publications.json', 'utf8'));
    merged = json.map(item => ({
      title: item.title,
      year: item.year,
      type: item.type,
      publisher: item.publisher,
      links: item.links || []
    }));
  } catch (e) {}

  try {
    const csvText = fs.readFileSync(__dirname + '/publications.csv', 'utf8');
    const rows = parseCSV(csvText);
    rows.forEach(r => {
      const existing = merged.find(m => m.title === r.title && Number(m.year) === Number(r.year));
      const link = { label: r.link_label, url: r.link_url };
      if (existing) {
        existing.links = existing.links || [];
        if (!existing.links.find(l => l.url === link.url)) existing.links.push(link);
      } else {
        merged.push({
          title: r.title,
          year: Number(r.year),
          type: r.type,
          publisher: r.publisher,
          links: [link]
        });
      }
    });
  } catch (e) {}

  merged.sort((a, b) => (b.year - a.year) || a.title.localeCompare(b.title));
  return merged;
};
