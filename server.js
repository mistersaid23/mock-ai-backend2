import express from "express";
const app = express();
app.use(express.json({ limit: "1mb" }));

app.post("/analyze", (req, res) => {
  const { prompt, sheetData } = req.body;
  console.log("Received prompt:", prompt);
  console.log("Sample data rows:", sheetData?.rows?.length || 0);

  // Balasan dummy seolah-olah hasil analisa AI
  const mockInsights = `
🔍 Mock AI Insights:
1. Officer Khatami paling banyak melakukan transaksi.
2. Supplier PT Sumber Jaya memiliki lead time rata-rata tertinggi.
3. Barang Bearing 6203 adalah item paling sering dibeli.
4. Status Pending masih mendominasi 30% dari total order.
5. Rekomendasi: fokus negosiasi ke supplier dengan lead time > 3 hari.
  `;
  res.send(mockInsights);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Mock AI backend running on port", PORT));
