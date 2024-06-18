const compareVersion = function(version1: string, version2: string): number {
  const v1Arr: string[] = version1.split(".");
  const v2Arr: string[] = version2.split(".");

  const max: number = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < max; i++) {
    const v1: number = parseInt(v1Arr[i]) || 0;
    const v2: number = parseInt(v2Arr[i]) || 0;
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    } else {
      continue;
    }
  }

  return 0;    
};