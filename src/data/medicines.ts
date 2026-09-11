export type Medicine = {
  slug: string;
  displayName: string;
  productName?: string;
  genericName: string;
  reading: string;
  aliases: string[];
  sourceIds: string[];
};

export const medicines: Medicine[] = [
  {
    slug: 'apoquel',
    displayName: 'アポキル',
    productName: 'アポキル',
    genericName: 'オクラシチニブ',
    reading: 'あぽきる',
    aliases: [],
    sourceIds: ['D201'],
  },
  {
    slug: 'cerenia',
    displayName: 'セレニア（マロピタント）',
    productName: 'セレニア',
    genericName: 'マロピタント',
    reading: 'せれにあ',
    aliases: [],
    sourceIds: ['D113', 'D026'],
  },
  {
    slug: 'famciclovir',
    displayName: 'ファムシクロビル',
    genericName: 'ファムシクロビル',
    reading: 'ふぁむしくろびる',
    aliases: [],
    sourceIds: ['D096'],
  },
];

const kanaRows: { label: string; chars: string }[] = [
  { label: 'あ行', chars: 'あいうえおぁぃぅぇぉ' },
  { label: 'か行', chars: 'かきくけこがぎぐげご' },
  { label: 'さ行', chars: 'さしすせそざじずぜぞ' },
  { label: 'た行', chars: 'たちつてとだぢづでど' },
  { label: 'な行', chars: 'なにぬねの' },
  { label: 'は行', chars: 'はひふへほばびぶべぼぱぴぷぺぽ' },
  { label: 'ま行', chars: 'まみむめも' },
  { label: 'や行', chars: 'やゆよゃゅょ' },
  { label: 'ら行', chars: 'らりるれろ' },
  { label: 'わ行', chars: 'わをん' },
];

function compareReading(a: Medicine, b: Medicine): number {
  return a.reading.localeCompare(b.reading, 'ja');
}

export const medicinesByReading = [...medicines].sort(compareReading);

export function medicinesByExistingKanaRows() {
  return kanaRows
    .map((row) => ({
      label: row.label,
      medicines: medicinesByReading.filter((medicine) =>
        row.chars.includes(medicine.reading.charAt(0))
      ),
    }))
    .filter((row) => row.medicines.length > 0);
}

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const suffix = path.replace(/^\//, '');
  return `${base}/${suffix}`;
}

export function homePath(): string {
  return withBase('/');
}

export function medicinePath(slug: string): string {
  return withBase(`medicines/${slug}/`);
}

export function medicineSearchText(medicine: Medicine): string {
  return [
    medicine.displayName,
    medicine.productName,
    medicine.genericName,
    medicine.reading,
    ...medicine.aliases,
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ');
}
