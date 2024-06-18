class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1_arr = version1.split('.')
        v2_arr = version2.split('.')

        max_length = max(len(v1_arr), len(v2_arr))

        for i in range(max_length):
            v1 = int(v1_arr[i]) if i < len(v1_arr) else 0
            print(type(v1))
            v2 = int(v2_arr[i]) if i < len(v2_arr) else 0
            print(type(v2))

            if v1 > v2:
                return 1
            elif v1 < v2:
                return -1
            else:
                continue

        return 0