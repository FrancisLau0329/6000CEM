// addressFinder.ts
import axios from 'axios';

const API_KEY = 'YOUR_MAPTILER_API_KEY'; // 替换为你的API密钥

async function findAddress(address: string) {
  try {
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${API_KEY}`;
    const response = await axios.get(url);

    if (response.data.features.length === 0) {
      throw new Error('Address not found');
    }

    // 提取所有匹配地点
    response.data.features.forEach((feature: any, index: number) => {
      const [lon, lat] = feature.center;
      console.log(`${index + 1}. ${feature.place_name} (lon: ${lon.toFixed(4)}, lat: ${lat.toFixed(4)})`);
    });

  } catch (err) {
    console.error('Error:', err.message);
  }
}

// 命令行参数验证
if (process.argv.length < 3) {
  console.log('Usage: node addressFinder.ts "<address>"');
  process.exit(1);
}

findAddress(process.argv[2]);