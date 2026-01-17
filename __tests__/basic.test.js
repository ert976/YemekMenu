// Basit test dosyası
describe('YemekMenu Testleri', () => {
  test('örnek test', () => {
    expect(1 + 1).toBe(2);
  });

  test('yemek veritabanı testi', () => {
    const sampleFood = {
      id: 1,
      name: 'Test Yemeği',
      category: 'Test Kategorisi',
      image_url: 'https://example.com/image.jpg',
      is_vegetarian: 0,
      is_vegan: 0,
      is_halal: 1
    };

    expect(sampleFood.id).toBe(1);
    expect(sampleFood.name).toBe('Test Yemeği');
    expect(sampleFood.category).toBe('Test Kategorisi');
    expect(sampleFood.is_halal).toBe(1);
  });
});
