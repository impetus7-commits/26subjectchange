# 작업 규칙

- 사용자에게 전달하는 HTML 파일 이름은 항상 `수강변경검토(YYMMDDHHmm).html` 형식(괄호 안에 한국 시각 연월일시분, 예: `수강변경검토(2611031249).html`).
  `node build/build.js` 를 실행하면 `dist/` 에 이 이름으로 만들어집니다. 전달할 때는 이 파일을 보냅니다.
- 화면 원본은 `src/index.html` 만 고치고, 고친 뒤 반드시 `node build/build.js` 로 다시 만듭니다.
- 수강신청 프로그램 이름은 'NEIS'가 아니라 'HScredit'으로 씁니다.
- 학생 자료(엑셀, 백업 json)는 저장소에 올리지 않습니다.
