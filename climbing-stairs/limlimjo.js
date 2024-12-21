/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 규칙성 찾기
  // n = 1 -> 1 (1)
  // n = 2 -> 2 (1+1, 2)
  // n = 3 -> 2 + 1 = 3 (1+1+1, 1+2, 2+1)
  // n = 4 -> 2 + 3 = 5 (1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
  // n = 5 -> 3 + 5 = 8 (1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+2+1, 2+1+2)
  // :
  // :
  // 규칙 -> n번째 방법 갯수 = n-1번째 방법 갯수 + n-2번째 방법 갯수

  // 1. 객체 생성 (n=1일 때, n=2일 때 기본값 설정)
  let dp = { 1: 1, 2: 2 };

  // 2. n=3일 때부터 dp값 계산
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // 3. 결과값 반환
  return dp[n];
};

// 시간 복잡도: O(n) <- for문 돌면서 dp값 계산하므로
// 공간 복잡도: O(n) <- dp 객체에 n개의 값 저장하므로