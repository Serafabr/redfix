export function itemsMatrixAssets(data) {
  return (
    [
      [
        { id: 'numAssets', title: 'Total de ativos', description: data && data.length.toString().padStart(3, "0"), span: 1 },
      ],
    ]
  );
}
