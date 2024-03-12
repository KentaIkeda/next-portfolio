// rich textの性質上ul, olはlistの中にpタグが生成されてしまうのでBLOCKSにべた書きしている。
// 以上の事からコンポーネント化はしていないのでJSXをBLOCKSにべた書きしている。
// べた書きしてるが故、スタイルをそのまま書くとコードが見づらくなったしまうのでここにスタイルを書いている。

const olStyle = '[&>ol]:list-decimal [&>ol]:list-inside';
const ulStyle = '[&>ul]:list-disc [&>ul]:list-inside';

export { olStyle, ulStyle };