export default function GithubPageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://raw.githubusercontent.com/stnuc/applicator/gh-pages/assets${src}`;
}
