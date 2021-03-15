const projectList = [
  {
    name: 'GPU Honey Gems',
    category: 'graphics',
    period: ['2019.03', '2019.06'],
    purposes: ['Web 환경에서 GPU 프로그래밍을 통한 시각화 퍼포먼스 향상'],
    descripts: [
      'webgl 튜토리얼',
      '물리 계산식을 프로그래밍에 적용',
    ],
    url: 'https://gpu-honey-gems-36663.firebaseapp.com/',
    github: 'https://github.com/ChoWonmin/gpu-honey-gems',
    active: false,
    clickable: true,
  },
  {
    name: '웹툰 색채 기반 감성 군집 시각화',
    category: 'vis',
    period: ['2018.02', '2019.06'],
    purposes: ['웹툰의 대표 색조합에 따라 느낄 수 있는 감성을 감성 색채 지도에 표현', '감성 색조합 지도에 웹툰을 표현함으로써 유사한 감성(색채)을 느낄 수 있는 웹툰들이 무엇이 있는지 파악'],
    descripts: ['웹툰의 색조합을 추출하여 대표 색조합 추출', '웹툰 대표 색조합을 감성 지도에 맵핑'],
    url: undefined,
    github: 'https://github.com/ChoWonmin/first',
    image: {
      directory: 'first',
      len: 8,
    },
    active: false,
    clickable: true,
  },
  {
    name: '논문의 피인용 관계를 이용한 논문 계보도 시각화',
    category: 'vis',
    period: ['2018.07', '2019.02'],
    purposes: ['사용자가 검색한 논문의 인용 계보를 통해 연구 동향을 파악하고 시각적으로 참고문헌 추천'],
    descripts: [],
    url: undefined,
    github: 'https://github.com/ChoWonmin/thesis-vis',
    image: {
      directory: 'HCI',
      len: 13,
    },
    active: false,
    clickable: true,
  },
  {
    name: '월드컵 축구 전술 시각화',
    category: 'vis',
    period: ['2018.02', '2019.06'],
    purposes: ['월드컵 축구 데이터를 바탕으로 축구 전술 동향을 시각화', '상위권 팀들의 전술 유형,국가별 전술 유형, 특정 국가의 라운드별 전술 변화 파악'],
    descripts: [
      '축구 전술을 4가지 유형으로 군집화하여 전술 유형을 간소화',
      'Parallel Coordinate을 이용한 다차원 데이터 탐색',
    ],
    url: undefined,
    github: 'https://github.com/ChoWonmin/vis-world-cup',
    image: {
      directory: 'worldcup',
      len: 8,
    },
    active: false,
    clickable: true,
  },
  {
    name: '회의 내용 요약 및 시각화 프로덕트',
    category: 'service',
    period: ['2019.02', '2019.07'],
    purposes: ['회의 내용을 요약한 형태로 표현하고 주요주제가 기간에 따라 어떻게 변화되는지 트랙킹한다.'],
    descripts: [
      '회의 기본 정보를 표현한다. (회의 일정, 참여 시간, 횟수, 기간 내 주요단어)',
      '회의에서 동시출현 빈도에 따라서 주요단어와 연관단어를 표현한다.',
      '주요단어가 등장했던 대화를 표현한다.',
    ],
    url: undefined,
    github: undefined,
    image: {
      directory: 'summarizenote',
      len: 4,
    },
    active: false,
    clickable: true,
  },
  {
    name: '자료구조 시각화 오픈소스',
    category: 'oss',
    period: ['2019.02', '2019.06'],
    purposes: ['js 자료구조 및 시각화 라이브러리 오픈소스 활동'],
    descripts: [
      'js 자료구조 라이브러리 오픈소스 활동',
      'npm 모듈 배포',
      '자료구조 시각화',
      'Document 페이지',
      '누적 다운로드 7000 이상',
    ],
    url: 'https://chowonmin.github.io/jagu-doc/',
    github: 'https://github.com/ChoWonmin/jagu',
    active: false,
    clickable: true,
  },
  {
    name: 'Lantern2019 - PWA',
    category: 'service',
    period: ['2019.03', '2019.06'],
    purposes: ['여행자와 현지인 추천 프로젝트'],
    descripts: [
      '피어슨 상관계수를 이용한 사용자 매칭 프로젝트',
    ],
    url: undefined,
    github: 'https://github.com/ChoWonmin/Lantern2019',
    image: {
      directory: 'lantern',
      len: 13,
      ext: 'jpeg',
    },
    active: false,
    clickable: true,
  },
  {
    name: 'Pure Poll',
    category: 'service',
    period: ['2018.08', '2018.12'],
    purposes: ['블록체인 기술을 이용하여 리서치 결과를 조작 방지하는 플랫폼'],
    descripts: [],
    url: undefined,
    github: 'https://github.com/ChoWonmin/pure-poll-vues',
    image: {
      directory: 'purepoll',
      len: 0,
    },
    active: false,
    clickable: false,
  },
];

export default projectList;
