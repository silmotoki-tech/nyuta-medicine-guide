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
  {
    slug: 'metronidazole',
    displayName: 'メトロニダゾール',
    genericName: 'メトロニダゾール',
    reading: 'めとろにだぞーる',
    aliases: [],
    sourceIds: ['D083'],
  },
  {
    slug: 'tylosin',
    displayName: 'タイロシン',
    genericName: 'タイロシン',
    reading: 'たいろしん',
    aliases: [],
    sourceIds: ['D084'],
  },
  {
    slug: 'amoxicillin',
    displayName: 'アモキシシリン',
    genericName: 'アモキシシリン',
    reading: 'あもきししりん',
    aliases: [],
    sourceIds: ['D085'],
  },
  {
    slug: 'cephalexin',
    displayName: 'セファレキシン',
    genericName: 'セファレキシン',
    reading: 'せふぁれきしん',
    aliases: [],
    sourceIds: ['D086'],
  },
  {
    slug: 'cefpodoxime',
    displayName: 'セフポドキシム',
    genericName: 'セフポドキシム',
    reading: 'せふぽどきしむ',
    aliases: [],
    sourceIds: ['D087'],
  },
  {
    slug: 'amoxicillin-clavulanate',
    displayName: 'クラブラン酸・アモキシシリン配合',
    genericName: 'クラブラン酸・アモキシシリン配合',
    reading: 'くらぶらんさんあもきししりんはいごう',
    aliases: [],
    sourceIds: ['D088'],
  },
  {
    slug: 'orbifloxacin',
    displayName: 'オルビフロキサシン',
    genericName: 'オルビフロキサシン',
    reading: 'おるびふろきさしん',
    aliases: [],
    sourceIds: ['D089'],
  },
  {
    slug: 'veraflox-oral-suspension',
    displayName: 'ベラフロックス経口懸濁液',
    genericName: 'ベラフロックス経口懸濁液',
    reading: 'べらふろっくすけいこうけんだくえき',
    aliases: [],
    sourceIds: ['D090'],
  },
  {
    slug: 'azithromycin',
    displayName: 'アジスロマイシン',
    genericName: 'アジスロマイシン',
    reading: 'あじすろまいしん',
    aliases: [],
    sourceIds: ['D091'],
  },
  {
    slug: 'daifen',
    displayName: 'ダイフェン',
    genericName: 'ダイフェン',
    reading: 'だいふぇん',
    aliases: [],
    sourceIds: ['D092'],
  },
  {
    slug: 'faropenem',
    displayName: 'ファロペネム',
    genericName: 'ファロペネム',
    reading: 'ふぁろぺねむ',
    aliases: [],
    sourceIds: ['D093'],
  },
  {
    slug: 'doxycycline',
    displayName: 'ドキシサイクリン',
    genericName: 'ドキシサイクリン',
    reading: 'どきしさいくりん',
    aliases: [],
    sourceIds: ['D094'],
  },
  {
    slug: 'minocycline',
    displayName: 'ミノサイクリン',
    genericName: 'ミノサイクリン',
    reading: 'みのさいくりん',
    aliases: [],
    sourceIds: ['D095'],
  },
  {
    slug: 'chloramphenicol',
    displayName: 'クロラムフェニコール',
    genericName: 'クロラムフェニコール',
    reading: 'くろらむふぇにこーる',
    aliases: [],
    sourceIds: ['D099'],
  },
  {
    slug: 'domenan',
    displayName: 'ドメナン',
    genericName: 'ドメナン',
    reading: 'どめなん',
    aliases: [],
    sourceIds: ['D100'],
  },
  {
    slug: 'clopidogrel',
    displayName: 'クロピドグレル',
    genericName: 'クロピドグレル',
    reading: 'くろぴどぐれる',
    aliases: [],
    sourceIds: ['D101'],
  },
  {
    slug: 'xarelto',
    displayName: 'イグザレルト',
    genericName: 'イグザレルト',
    reading: 'いぐざれると',
    aliases: [],
    sourceIds: ['D102'],
  },
  {
    slug: 'previcox',
    displayName: 'プレビコックス',
    genericName: 'プレビコックス',
    reading: 'ぷれびこっくす',
    aliases: [],
    sourceIds: ['D103'],
  },
  {
    slug: 'galliprant',
    displayName: 'ガリプラント',
    genericName: 'ガリプラント',
    reading: 'がりぷらんと',
    aliases: [],
    sourceIds: ['D104'],
  },
  {
    slug: 'pregabalin',
    displayName: 'プレガバリン',
    genericName: 'プレガバリン',
    reading: 'ぷれがばりん',
    aliases: [],
    sourceIds: ['D105'],
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
