const regions = [
  {
    id: 'seoul',
    name: '서울',
    subregions: [
      {
        id: 'seoul_01',
        name: '강남구',
        subregions: [
          {
            id: 'seoul_01_001',
            name: '가락동',
          },
          {
            id: 'seoul_01_002',
            name: '개포1동',
          },
          {
            id: 'seoul_01_003',
            name: '개포2동',
          },
          {
            id: 'seoul_01_004',
            name: '개포3동',
          },
          {
            id: 'seoul_01_005',
            name: '개포4동',
          },
          {
            id: 'seoul_01_006',
            name: '개포동',
          },
          {
            id: 'seoul_01_007',
            name: '거여동',
          },
          {
            id: 'seoul_01_008',
            name: '고덕동',
          },
          {
            id: 'seoul_01_009',
            name: '길동',
          },
          {
            id: 'seoul_01_010',
            name: '내곡동',
          },
          {
            id: 'seoul_01_011',
            name: '논현동',
          },
          {
            id: 'seoul_01_012',
            name: '대치1동',
          },
          {
            id: 'seoul_01_013',
            name: '대치2동',
          },
          {
            id: 'seoul_01_014',
            name: '대치3동',
          },
          {
            id: 'seoul_01_015',
            name: '대치4동',
          },
          {
            id: 'seoul_01_016',
            name: '대치동',
          },
          {
            id: 'seoul_01_017',
            name: '도곡1동',
          },
          {
            id: 'seoul_01_018',
            name: '도곡2동',
          },
          {
            id: 'seoul_01_019',
            name: '도곡동',
          },
          {
            id: 'seoul_01_020',
            name: '둔촌동',
          },
          {
            id: 'seoul_01_021',
            name: '마천동',
          },
          {
            id: 'seoul_01_022',
            name: '명일동',
          },
          {
            id: 'seoul_01_023',
            name: '문정동',
          },
          {
            id: 'seoul_01_024',
            name: '반포동',
          },
          {
            id: 'seoul_01_025',
            name: '방배동',
          },
          {
            id: 'seoul_01_026',
            name: '방이동',
          },
          {
            id: 'seoul_01_027',
            name: '삼성1동',
          },
          {
            id: 'seoul_01_028',
            name: '삼성2동',
          },
          {
            id: 'seoul_01_029',
            name: '삼성동',
          },
          {
            id: 'seoul_01_030',
            name: '삼전동',
          },
          {
            id: 'seoul_01_031',
            name: '상일동',
          },
          {
            id: 'seoul_01_032',
            name: '서초동',
          },
          {
            id: 'seoul_01_033',
            name: '석촌동',
          },
          {
            id: 'seoul_01_034',
            name: '성내동',
          },
          {
            id: 'seoul_01_035',
            name: '세곡동',
          },
          {
            id: 'seoul_01_036',
            name: '송금동',
          },
          {
            id: 'seoul_01_037',
            name: '송파동',
          },
          {
            id: 'seoul_01_038',
            name: '수서동',
          },
          {
            id: 'seoul_01_039',
            name: '신사동',
          },
          {
            id: 'seoul_01_040',
            name: '신원동',
          },
          {
            id: 'seoul_01_041',
            name: '신천동',
          },
          {
            id: 'seoul_01_042',
            name: '암사동',
          },
          {
            id: 'seoul_01_043',
            name: '압구정1동',
          },
          {
            id: 'seoul_01_044',
            name: '압구정2동',
          },
          {
            id: 'seoul_01_045',
            name: '압구정동',
          },
          {
            id: 'seoul_01_046',
            name: '양재동',
          },
          {
            id: 'seoul_01_047',
            name: '역삼1동',
          },
          {
            id: 'seoul_01_048',
            name: '역삼2동',
          },
          {
            id: 'seoul_01_049',
            name: '역삼동',
          },
          {
            id: 'seoul_01_050',
            name: '염곡동',
          },
          {
            id: 'seoul_01_051',
            name: '오금동',
          },
          {
            id: 'seoul_01_052',
            name: '우면동',
          },
          {
            id: 'seoul_01_053',
            name: '원지동',
          },
          {
            id: 'seoul_01_054',
            name: '율현동',
          },
          {
            id: 'seoul_01_055',
            name: '이동',
          },
          {
            id: 'seoul_01_056',
            name: '일원동',
          },
          {
            id: 'seoul_01_057',
            name: '자곡동',
          },
          {
            id: 'seoul_01_058',
            name: '잠실동',
          },
          {
            id: 'seoul_01_059',
            name: '잠원동',
          },
          {
            id: 'seoul_01_060',
            name: '장지동',
          },
          {
            id: 'seoul_01_061',
            name: '천호동',
          },
          {
            id: 'seoul_01_062',
            name: '청담1동',
          },
          {
            id: 'seoul_01_063',
            name: '청담2동',
          },
          {
            id: 'seoul_01_064',
            name: '청담동',
          },
          {
            id: 'seoul_01_065',
            name: '포이동',
          },
          {
            id: 'seoul_01_066',
            name: '풍납동',
          },
          {
            id: 'seoul_01_067',
            name: '하일동',
          },
          {
            id: 'seoul_01_068',
            name: '학동',
          },
        ],
      },
      {
        id: 'seoul_02',
        name: '강동구',
        subregions: [
          {
            id: 'seoul_02_001',
            name: '가락동',
          },
          {
            id: 'seoul_02_002',
            name: '강일동',
          },
          {
            id: 'seoul_02_003',
            name: '거여동',
          },
          {
            id: 'seoul_02_004',
            name: '고덕동',
          },
          {
            id: 'seoul_02_005',
            name: '길동',
          },
          {
            id: 'seoul_02_006',
            name: '둔촌동',
          },
          {
            id: 'seoul_02_007',
            name: '마천동',
          },
          {
            id: 'seoul_02_008',
            name: '명일동',
          },
          {
            id: 'seoul_02_009',
            name: '문정동',
          },
          {
            id: 'seoul_02_010',
            name: '방이동',
          },
          {
            id: 'seoul_02_011',
            name: '삼전동',
          },
          {
            id: 'seoul_02_012',
            name: '상일동',
          },
          {
            id: 'seoul_02_013',
            name: '석촌동',
          },
          {
            id: 'seoul_02_014',
            name: '성내동',
          },
          {
            id: 'seoul_02_015',
            name: '송파동',
          },
          {
            id: 'seoul_02_016',
            name: '신천동',
          },
          {
            id: 'seoul_02_017',
            name: '암사동',
          },
          {
            id: 'seoul_02_018',
            name: '오금동',
          },
          {
            id: 'seoul_02_019',
            name: '이동',
          },
          {
            id: 'seoul_02_020',
            name: '잠실동',
          },
          {
            id: 'seoul_02_021',
            name: '장지동',
          },
          {
            id: 'seoul_02_022',
            name: '천호동',
          },
          {
            id: 'seoul_02_023',
            name: '풍납동',
          },
          {
            id: 'seoul_02_024',
            name: '하일동',
          },
        ],
      },
      {
        id: 'seoul_03',
        name: '강북구',
        subregions: [
          {
            id: 'seoul_03_001',
            name: '미아동',
          },
          {
            id: 'seoul_03_002',
            name: '번1동',
          },
          {
            id: 'seoul_03_003',
            name: '번2동',
          },
          {
            id: 'seoul_03_004',
            name: '번3동',
          },
          {
            id: 'seoul_03_005',
            name: '번동',
          },
          {
            id: 'seoul_03_006',
            name: '삼각산동',
          },
          {
            id: 'seoul_03_007',
            name: '삼양동',
          },
          {
            id: 'seoul_03_008',
            name: '송중동',
          },
          {
            id: 'seoul_03_009',
            name: '송천동',
          },
          {
            id: 'seoul_03_010',
            name: '수유1동',
          },
          {
            id: 'seoul_03_011',
            name: '수유2동',
          },
          {
            id: 'seoul_03_012',
            name: '수유3동',
          },
          {
            id: 'seoul_03_013',
            name: '수유동',
          },
          {
            id: 'seoul_03_014',
            name: '우이동',
          },
        ],
      },
      {
        id: 'seoul_04',
        name: '강서구',
        subregions: [
          {
            id: 'seoul_04_001',
            name: '가양동',
          },
          {
            id: 'seoul_04_002',
            name: '개화동',
          },
          {
            id: 'seoul_04_003',
            name: '공항동',
          },
          {
            id: 'seoul_04_004',
            name: '과해동',
          },
          {
            id: 'seoul_04_005',
            name: '내발산동',
          },
          {
            id: 'seoul_04_006',
            name: '등촌1동',
          },
          {
            id: 'seoul_04_007',
            name: '등촌2동',
          },
          {
            id: 'seoul_04_008',
            name: '등촌동',
          },
          {
            id: 'seoul_04_009',
            name: '마곡동',
          },
          {
            id: 'seoul_04_010',
            name: '목동',
          },
          {
            id: 'seoul_04_011',
            name: '발산동',
          },
          {
            id: 'seoul_04_012',
            name: '방화1동',
          },
          {
            id: 'seoul_04_013',
            name: '방화2동',
          },
          {
            id: 'seoul_04_014',
            name: '방화동',
          },
          {
            id: 'seoul_04_015',
            name: '신월동',
          },
          {
            id: 'seoul_04_016',
            name: '신정동',
          },
          {
            id: 'seoul_04_017',
            name: '염창동',
          },
          {
            id: 'seoul_04_018',
            name: '오곡동',
          },
          {
            id: 'seoul_04_019',
            name: '오쇠동',
          },
          {
            id: 'seoul_04_020',
            name: '외발산동',
          },
          {
            id: 'seoul_04_021',
            name: '화곡1동',
          },
          {
            id: 'seoul_04_022',
            name: '화곡2동',
          },
          {
            id: 'seoul_04_023',
            name: '화곡3동',
          },
          {
            id: 'seoul_04_024',
            name: '화곡4동',
          },
          {
            id: 'seoul_04_025',
            name: '화곡5동',
          },
          {
            id: 'seoul_04_026',
            name: '화곡동',
          },
          {
            id: 'seoul_04_027',
            name: '화곡본동',
          },
        ],
      },
      {
        id: 'seoul_05',
        name: '관악구',
        subregions: [
          {
            id: 'seoul_05_001',
            name: '남현동',
          },
          {
            id: 'seoul_05_002',
            name: '노량진동',
          },
          {
            id: 'seoul_05_003',
            name: '대방동',
          },
          {
            id: 'seoul_05_004',
            name: '동작동',
          },
          {
            id: 'seoul_05_005',
            name: '방배동',
          },
          {
            id: 'seoul_05_006',
            name: '본동',
          },
          {
            id: 'seoul_05_007',
            name: '봉천10동',
          },
          {
            id: 'seoul_05_008',
            name: '봉천11동',
          },
          {
            id: 'seoul_05_009',
            name: '봉천1동',
          },
          {
            id: 'seoul_05_010',
            name: '봉천2동',
          },
          {
            id: 'seoul_05_011',
            name: '봉천3동',
          },
          {
            id: 'seoul_05_012',
            name: '봉천4동',
          },
          {
            id: 'seoul_05_013',
            name: '봉천5동',
          },
          {
            id: 'seoul_05_014',
            name: '봉천6동',
          },
          {
            id: 'seoul_05_015',
            name: '봉천7동',
          },
          {
            id: 'seoul_05_016',
            name: '봉천8동',
          },
          {
            id: 'seoul_05_017',
            name: '봉천9동',
          },
          {
            id: 'seoul_05_018',
            name: '봉천동',
          },
          {
            id: 'seoul_05_019',
            name: '봉천본동',
          },
          {
            id: 'seoul_05_020',
            name: '사당동',
          },
          {
            id: 'seoul_05_021',
            name: '상도동',
          },
          {
            id: 'seoul_05_022',
            name: '상도제1동',
          },
          {
            id: 'seoul_05_023',
            name: '신대방동',
          },
          {
            id: 'seoul_05_024',
            name: '신림10동',
          },
          {
            id: 'seoul_05_025',
            name: '신림11동',
          },
          {
            id: 'seoul_05_026',
            name: '신림1동',
          },
          {
            id: 'seoul_05_027',
            name: '신림2동',
          },
          {
            id: 'seoul_05_028',
            name: '신림3동',
          },
          {
            id: 'seoul_05_029',
            name: '신림4동',
          },
          {
            id: 'seoul_05_030',
            name: '신림5동',
          },
          {
            id: 'seoul_05_031',
            name: '신림6동',
          },
          {
            id: 'seoul_05_032',
            name: '신림7동',
          },
          {
            id: 'seoul_05_033',
            name: '신림8동',
          },
          {
            id: 'seoul_05_034',
            name: '신림9동',
          },
          {
            id: 'seoul_05_035',
            name: '신림동',
          },
          {
            id: 'seoul_05_036',
            name: '신림본동',
          },
          {
            id: 'seoul_05_037',
            name: '흑석동',
          },
        ],
      },
      {
        id: 'seoul_06',
        name: '광진구',
        subregions: [
          {
            id: 'seoul_06_001',
            name: '광장동',
          },
          {
            id: 'seoul_06_002',
            name: '구의동',
          },
          {
            id: 'seoul_06_003',
            name: '군자동',
          },
          {
            id: 'seoul_06_004',
            name: '노유동',
          },
          {
            id: 'seoul_06_005',
            name: '능동',
          },
          {
            id: 'seoul_06_006',
            name: '모진동',
          },
          {
            id: 'seoul_06_007',
            name: '자양동',
          },
          {
            id: 'seoul_06_008',
            name: '중곡동',
          },
          {
            id: 'seoul_06_009',
            name: '화양동',
          },
        ],
      },
      {
        id: 'seoul_07',
        name: '구로구',
        subregions: [
          {
            id: 'seoul_07_001',
            name: '가리봉1동',
          },
          {
            id: 'seoul_07_002',
            name: '가리봉2동',
          },
          {
            id: 'seoul_07_003',
            name: '가리봉3동',
          },
          {
            id: 'seoul_07_004',
            name: '가리봉동',
          },
          {
            id: 'seoul_07_005',
            name: '개봉1동',
          },
          {
            id: 'seoul_07_006',
            name: '개봉2동',
          },
          {
            id: 'seoul_07_007',
            name: '개봉3동',
          },
          {
            id: 'seoul_07_008',
            name: '개봉동',
          },
          {
            id: 'seoul_07_009',
            name: '고척1동',
          },
          {
            id: 'seoul_07_010',
            name: '고척2동',
          },
          {
            id: 'seoul_07_011',
            name: '고척동',
          },
          {
            id: 'seoul_07_012',
            name: '구로1동',
          },
          {
            id: 'seoul_07_013',
            name: '구로2동',
          },
          {
            id: 'seoul_07_014',
            name: '구로3동',
          },
          {
            id: 'seoul_07_015',
            name: '구로4동',
          },
          {
            id: 'seoul_07_016',
            name: '구로5동',
          },
          {
            id: 'seoul_07_017',
            name: '구로6동',
          },
          {
            id: 'seoul_07_018',
            name: '구로동',
          },
          {
            id: 'seoul_07_019',
            name: '궁동',
          },
          {
            id: 'seoul_07_020',
            name: '독산1동',
          },
          {
            id: 'seoul_07_021',
            name: '독산2동',
          },
          {
            id: 'seoul_07_022',
            name: '독산3동',
          },
          {
            id: 'seoul_07_023',
            name: '독산4동',
          },
          {
            id: 'seoul_07_024',
            name: '독산동',
          },
          {
            id: 'seoul_07_025',
            name: '독산본동',
          },
          {
            id: 'seoul_07_026',
            name: '수궁동',
          },
          {
            id: 'seoul_07_027',
            name: '시흥1동',
          },
          {
            id: 'seoul_07_028',
            name: '시흥2동',
          },
          {
            id: 'seoul_07_029',
            name: '시흥3동',
          },
          {
            id: 'seoul_07_030',
            name: '시흥4동',
          },
          {
            id: 'seoul_07_031',
            name: '시흥5동',
          },
          {
            id: 'seoul_07_032',
            name: '시흥동',
          },
          {
            id: 'seoul_07_033',
            name: '시흥본동',
          },
          {
            id: 'seoul_07_034',
            name: '신도림동',
          },
          {
            id: 'seoul_07_035',
            name: '오류1동',
          },
          {
            id: 'seoul_07_036',
            name: '오류2동',
          },
          {
            id: 'seoul_07_037',
            name: '오류동',
          },
          {
            id: 'seoul_07_038',
            name: '온수동',
          },
          {
            id: 'seoul_07_039',
            name: '천왕동',
          },
          {
            id: 'seoul_07_040',
            name: '항동',
          },
        ],
      },
      {
        id: 'seoul_08',
        name: '금천구',
        subregions: [
          {
            id: 'seoul_08_001',
            name: '가산동',
          },
          {
            id: 'seoul_08_002',
            name: '독산동',
          },
          {
            id: 'seoul_08_003',
            name: '시흥동',
          },
        ],
      },
      {
        id: 'seoul_09',
        name: '노원구',
        subregions: [
          {
            id: 'seoul_09_001',
            name: '공릉1동',
          },
          {
            id: 'seoul_09_002',
            name: '공릉2동',
          },
          {
            id: 'seoul_09_003',
            name: '공릉동',
          },
          {
            id: 'seoul_09_004',
            name: '도봉1동',
          },
          {
            id: 'seoul_09_005',
            name: '도봉2동',
          },
          {
            id: 'seoul_09_006',
            name: '도봉동',
          },
          {
            id: 'seoul_09_007',
            name: '상계1동',
          },
          {
            id: 'seoul_09_008',
            name: '상계2동',
          },
          {
            id: 'seoul_09_009',
            name: '상계3동',
          },
          {
            id: 'seoul_09_010',
            name: '상계4동',
          },
          {
            id: 'seoul_09_011',
            name: '상계5동',
          },
          {
            id: 'seoul_09_012',
            name: '상계6동',
          },
          {
            id: 'seoul_09_013',
            name: '상계7동',
          },
          {
            id: 'seoul_09_014',
            name: '상계동',
          },
          {
            id: 'seoul_09_015',
            name: '월계1동',
          },
          {
            id: 'seoul_09_016',
            name: '월계2동',
          },
          {
            id: 'seoul_09_017',
            name: '월계3동',
          },
          {
            id: 'seoul_09_018',
            name: '월계동',
          },
          {
            id: 'seoul_09_019',
            name: '중계동',
          },
          {
            id: 'seoul_09_020',
            name: '창1동',
          },
          {
            id: 'seoul_09_021',
            name: '창2동',
          },
          {
            id: 'seoul_09_022',
            name: '창3동',
          },
          {
            id: 'seoul_09_023',
            name: '창동',
          },
          {
            id: 'seoul_09_024',
            name: '하계동',
          },
        ],
      },
      {
        id: 'seoul_10',
        name: '도봉구',
        subregions: [
          {
            id: 'seoul_10_001',
            name: '공릉동',
          },
          {
            id: 'seoul_10_002',
            name: '도봉1동',
          },
          {
            id: 'seoul_10_003',
            name: '도봉2동',
          },
          {
            id: 'seoul_10_004',
            name: '도봉동',
          },
          {
            id: 'seoul_10_005',
            name: '미아1동',
          },
          {
            id: 'seoul_10_006',
            name: '미아2동',
          },
          {
            id: 'seoul_10_007',
            name: '미아3동',
          },
          {
            id: 'seoul_10_008',
            name: '미아4동',
          },
          {
            id: 'seoul_10_009',
            name: '미아5동',
          },
          {
            id: 'seoul_10_010',
            name: '미아6동',
          },
          {
            id: 'seoul_10_011',
            name: '미아7동',
          },
          {
            id: 'seoul_10_012',
            name: '미아8동',
          },
          {
            id: 'seoul_10_013',
            name: '미아동',
          },
          {
            id: 'seoul_10_014',
            name: '방학1동',
          },
          {
            id: 'seoul_10_015',
            name: '방학2동',
          },
          {
            id: 'seoul_10_016',
            name: '방학3동',
          },
          {
            id: 'seoul_10_017',
            name: '방학동',
          },
          {
            id: 'seoul_10_018',
            name: '번1동',
          },
          {
            id: 'seoul_10_019',
            name: '번2동',
          },
          {
            id: 'seoul_10_020',
            name: '번동',
          },
          {
            id: 'seoul_10_021',
            name: '상계동',
          },
          {
            id: 'seoul_10_022',
            name: '수유1동',
          },
          {
            id: 'seoul_10_023',
            name: '수유2동',
          },
          {
            id: 'seoul_10_024',
            name: '수유3동',
          },
          {
            id: 'seoul_10_025',
            name: '수유4동',
          },
          {
            id: 'seoul_10_026',
            name: '수유5동',
          },
          {
            id: 'seoul_10_027',
            name: '수유동',
          },
          {
            id: 'seoul_10_028',
            name: '쌍문1동',
          },
          {
            id: 'seoul_10_029',
            name: '쌍문2동',
          },
          {
            id: 'seoul_10_030',
            name: '쌍문3동',
          },
          {
            id: 'seoul_10_031',
            name: '쌍문동',
          },
          {
            id: 'seoul_10_032',
            name: '우이동',
          },
          {
            id: 'seoul_10_033',
            name: '월계동',
          },
          {
            id: 'seoul_10_034',
            name: '중계동',
          },
          {
            id: 'seoul_10_035',
            name: '창1동',
          },
          {
            id: 'seoul_10_036',
            name: '창2동',
          },
          {
            id: 'seoul_10_037',
            name: '창3동',
          },
          {
            id: 'seoul_10_038',
            name: '창동',
          },
          {
            id: 'seoul_10_039',
            name: '하계동',
          },
        ],
      },
      {
        id: 'seoul_11',
        name: '동대문구',
        subregions: [
          {
            id: 'seoul_11_001',
            name: '군자동',
          },
          {
            id: 'seoul_11_002',
            name: '능동',
          },
          {
            id: 'seoul_11_003',
            name: '답십리1동',
          },
          {
            id: 'seoul_11_004',
            name: '답십리2동',
          },
          {
            id: 'seoul_11_005',
            name: '답십리3동',
          },
          {
            id: 'seoul_11_006',
            name: '답십리4동',
          },
          {
            id: 'seoul_11_007',
            name: '답십리5동',
          },
          {
            id: 'seoul_11_008',
            name: '답십리동',
          },
          {
            id: 'seoul_11_009',
            name: '망우동',
          },
          {
            id: 'seoul_11_010',
            name: '면목동',
          },
          {
            id: 'seoul_11_011',
            name: '묵동',
          },
          {
            id: 'seoul_11_012',
            name: '보문동1가',
          },
          {
            id: 'seoul_11_013',
            name: '보문동2가',
          },
          {
            id: 'seoul_11_014',
            name: '보문동3가',
          },
          {
            id: 'seoul_11_015',
            name: '보문동4가',
          },
          {
            id: 'seoul_11_016',
            name: '보문동5가',
          },
          {
            id: 'seoul_11_017',
            name: '보문동6가',
          },
          {
            id: 'seoul_11_018',
            name: '보문동7가',
          },
          {
            id: 'seoul_11_019',
            name: '상봉동',
          },
          {
            id: 'seoul_11_020',
            name: '석관동',
          },
          {
            id: 'seoul_11_021',
            name: '숭인동',
          },
          {
            id: 'seoul_11_022',
            name: '신내동',
          },
          {
            id: 'seoul_11_023',
            name: '신설동',
          },
          {
            id: 'seoul_11_024',
            name: '안암동4가',
          },
          {
            id: 'seoul_11_025',
            name: '안암동5가',
          },
          {
            id: 'seoul_11_026',
            name: '용두1동',
          },
          {
            id: 'seoul_11_027',
            name: '용두2동',
          },
          {
            id: 'seoul_11_028',
            name: '용두동',
          },
          {
            id: 'seoul_11_029',
            name: '이문1동',
          },
          {
            id: 'seoul_11_030',
            name: '이문2동',
          },
          {
            id: 'seoul_11_031',
            name: '이문3동',
          },
          {
            id: 'seoul_11_032',
            name: '이문동',
          },
          {
            id: 'seoul_11_033',
            name: '장안1동',
          },
          {
            id: 'seoul_11_034',
            name: '장안2동',
          },
          {
            id: 'seoul_11_035',
            name: '장안3동',
          },
          {
            id: 'seoul_11_036',
            name: '장안4동',
          },
          {
            id: 'seoul_11_037',
            name: '장안동',
          },
          {
            id: 'seoul_11_038',
            name: '전농1동',
          },
          {
            id: 'seoul_11_039',
            name: '전농2동',
          },
          {
            id: 'seoul_11_040',
            name: '전농3동',
          },
          {
            id: 'seoul_11_041',
            name: '전농4동',
          },
          {
            id: 'seoul_11_042',
            name: '전농동',
          },
          {
            id: 'seoul_11_043',
            name: '제기1동',
          },
          {
            id: 'seoul_11_044',
            name: '제기2동',
          },
          {
            id: 'seoul_11_045',
            name: '제기동',
          },
          {
            id: 'seoul_11_046',
            name: '종암동',
          },
          {
            id: 'seoul_11_047',
            name: '중곡동',
          },
          {
            id: 'seoul_11_048',
            name: '중화동',
          },
          {
            id: 'seoul_11_049',
            name: '창신동',
          },
          {
            id: 'seoul_11_050',
            name: '청량리1동',
          },
          {
            id: 'seoul_11_051',
            name: '청량리2동',
          },
          {
            id: 'seoul_11_052',
            name: '청량리동',
          },
          {
            id: 'seoul_11_053',
            name: '회기동',
          },
          {
            id: 'seoul_11_054',
            name: '휘경1동',
          },
          {
            id: 'seoul_11_055',
            name: '휘경2동',
          },
          {
            id: 'seoul_11_056',
            name: '휘경동',
          },
        ],
      },
      {
        id: 'seoul_12',
        name: '동작구',
        subregions: [
          {
            id: 'seoul_12_001',
            name: '노량진1동',
          },
          {
            id: 'seoul_12_002',
            name: '노량진2동',
          },
          {
            id: 'seoul_12_003',
            name: '노량진동',
          },
          {
            id: 'seoul_12_004',
            name: '대방동',
          },
          {
            id: 'seoul_12_005',
            name: '동작동',
          },
          {
            id: 'seoul_12_006',
            name: '본동',
          },
          {
            id: 'seoul_12_007',
            name: '사당1동',
          },
          {
            id: 'seoul_12_008',
            name: '사당2동',
          },
          {
            id: 'seoul_12_009',
            name: '사당3동',
          },
          {
            id: 'seoul_12_010',
            name: '사당4동',
          },
          {
            id: 'seoul_12_011',
            name: '사당동',
          },
          {
            id: 'seoul_12_012',
            name: '상도1동',
          },
          {
            id: 'seoul_12_013',
            name: '상도2동',
          },
          {
            id: 'seoul_12_014',
            name: '상도3동',
          },
          {
            id: 'seoul_12_015',
            name: '상도4동',
          },
          {
            id: 'seoul_12_016',
            name: '상도동',
          },
          {
            id: 'seoul_12_017',
            name: '신대방1동',
          },
          {
            id: 'seoul_12_018',
            name: '신대방2동',
          },
          {
            id: 'seoul_12_019',
            name: '신대방동',
          },
          {
            id: 'seoul_12_020',
            name: '흑석1동',
          },
          {
            id: 'seoul_12_021',
            name: '흑석2동',
          },
          {
            id: 'seoul_12_022',
            name: '흑석3동',
          },
          {
            id: 'seoul_12_023',
            name: '흑석동',
          },
        ],
      },
      {
        id: 'seoul_13',
        name: '마포구',
        subregions: [
          {
            id: 'seoul_13_001',
            name: '공덕1동',
          },
          {
            id: 'seoul_13_002',
            name: '공덕2동',
          },
          {
            id: 'seoul_13_003',
            name: '공덕동',
          },
          {
            id: 'seoul_13_004',
            name: '구수동',
          },
          {
            id: 'seoul_13_005',
            name: '남가좌동',
          },
          {
            id: 'seoul_13_006',
            name: '노고산동',
          },
          {
            id: 'seoul_13_007',
            name: '당인동',
          },
          {
            id: 'seoul_13_008',
            name: '대흥동',
          },
          {
            id: 'seoul_13_009',
            name: '도화1동',
          },
          {
            id: 'seoul_13_010',
            name: '도화2동',
          },
          {
            id: 'seoul_13_011',
            name: '도화동',
          },
          {
            id: 'seoul_13_012',
            name: '동교동',
          },
          {
            id: 'seoul_13_013',
            name: '마포동',
          },
          {
            id: 'seoul_13_014',
            name: '망원1동',
          },
          {
            id: 'seoul_13_015',
            name: '망원2동',
          },
          {
            id: 'seoul_13_016',
            name: '망원동',
          },
          {
            id: 'seoul_13_017',
            name: '상수동',
          },
          {
            id: 'seoul_13_018',
            name: '상암동',
          },
          {
            id: 'seoul_13_019',
            name: '서교동',
          },
          {
            id: 'seoul_13_020',
            name: '성산1동',
          },
          {
            id: 'seoul_13_021',
            name: '성산2동',
          },
          {
            id: 'seoul_13_022',
            name: '성산동',
          },
          {
            id: 'seoul_13_023',
            name: '수색동',
          },
          {
            id: 'seoul_13_024',
            name: '신공덕동',
          },
          {
            id: 'seoul_13_025',
            name: '신수동',
          },
          {
            id: 'seoul_13_026',
            name: '신정동',
          },
          {
            id: 'seoul_13_027',
            name: '아현1동',
          },
          {
            id: 'seoul_13_028',
            name: '아현2동',
          },
          {
            id: 'seoul_13_029',
            name: '아현3동',
          },
          {
            id: 'seoul_13_030',
            name: '아현동',
          },
          {
            id: 'seoul_13_031',
            name: '연남동',
          },
          {
            id: 'seoul_13_032',
            name: '연희동',
          },
          {
            id: 'seoul_13_033',
            name: '염리동',
          },
          {
            id: 'seoul_13_034',
            name: '용강동',
          },
          {
            id: 'seoul_13_035',
            name: '율도동',
          },
          {
            id: 'seoul_13_036',
            name: '중동',
          },
          {
            id: 'seoul_13_037',
            name: '창전동',
          },
          {
            id: 'seoul_13_038',
            name: '토정동',
          },
          {
            id: 'seoul_13_039',
            name: '하수동',
          },
          {
            id: 'seoul_13_040',
            name: '하중동',
          },
          {
            id: 'seoul_13_041',
            name: '합정동',
          },
          {
            id: 'seoul_13_042',
            name: '현석동',
          },
        ],
      },
      {
        id: 'seoul_14',
        name: '서대문구',
        subregions: [
          {
            id: 'seoul_14_001',
            name: '갈현동',
          },
          {
            id: 'seoul_14_002',
            name: '교남동',
          },
          {
            id: 'seoul_14_003',
            name: '교북동',
          },
          {
            id: 'seoul_14_004',
            name: '구기동',
          },
          {
            id: 'seoul_14_005',
            name: '구산동',
          },
          {
            id: 'seoul_14_006',
            name: '구파발동',
          },
          {
            id: 'seoul_14_007',
            name: '남가좌1동',
          },
          {
            id: 'seoul_14_008',
            name: '남가좌2동',
          },
          {
            id: 'seoul_14_009',
            name: '남가좌동',
          },
          {
            id: 'seoul_14_010',
            name: '냉천동',
          },
          {
            id: 'seoul_14_011',
            name: '노고산동',
          },
          {
            id: 'seoul_14_012',
            name: '녹번동',
          },
          {
            id: 'seoul_14_013',
            name: '대신동',
          },
          {
            id: 'seoul_14_014',
            name: '대조동',
          },
          {
            id: 'seoul_14_015',
            name: '대현동',
          },
          {
            id: 'seoul_14_016',
            name: '만리동1가',
          },
          {
            id: 'seoul_14_017',
            name: '만리동2가',
          },
          {
            id: 'seoul_14_018',
            name: '미근동',
          },
          {
            id: 'seoul_14_019',
            name: '봉원동',
          },
          {
            id: 'seoul_14_020',
            name: '부암동',
          },
          {
            id: 'seoul_14_021',
            name: '북가좌1동',
          },
          {
            id: 'seoul_14_022',
            name: '북가좌동',
          },
          {
            id: 'seoul_14_023',
            name: '북아현1동',
          },
          {
            id: 'seoul_14_024',
            name: '북아현2동',
          },
          {
            id: 'seoul_14_025',
            name: '북아현3동',
          },
          {
            id: 'seoul_14_026',
            name: '북아현동',
          },
          {
            id: 'seoul_14_027',
            name: '불광동',
          },
          {
            id: 'seoul_14_028',
            name: '상암동',
          },
          {
            id: 'seoul_14_029',
            name: '서소문동',
          },
          {
            id: 'seoul_14_030',
            name: '성산동',
          },
          {
            id: 'seoul_14_031',
            name: '송월동',
          },
          {
            id: 'seoul_14_032',
            name: '수색동',
          },
          {
            id: 'seoul_14_033',
            name: '순화동',
          },
          {
            id: 'seoul_14_034',
            name: '신사동',
          },
          {
            id: 'seoul_14_035',
            name: '신영동',
          },
          {
            id: 'seoul_14_036',
            name: '신촌동',
          },
          {
            id: 'seoul_14_037',
            name: '역촌동',
          },
          {
            id: 'seoul_14_038',
            name: '연희1동',
          },
          {
            id: 'seoul_14_039',
            name: '연희2동',
          },
          {
            id: 'seoul_14_040',
            name: '연희3동',
          },
          {
            id: 'seoul_14_041',
            name: '연희동',
          },
          {
            id: 'seoul_14_042',
            name: '영천동',
          },
          {
            id: 'seoul_14_043',
            name: '옥천동',
          },
          {
            id: 'seoul_14_044',
            name: '응암동',
          },
          {
            id: 'seoul_14_045',
            name: '의주로1가',
          },
          {
            id: 'seoul_14_046',
            name: '의주로2가',
          },
          {
            id: 'seoul_14_047',
            name: '정동',
          },
          {
            id: 'seoul_14_048',
            name: '중동',
          },
          {
            id: 'seoul_14_049',
            name: '중림동',
          },
          {
            id: 'seoul_14_050',
            name: '증산동',
          },
          {
            id: 'seoul_14_051',
            name: '진관내동',
          },
          {
            id: 'seoul_14_052',
            name: '진관외동',
          },
          {
            id: 'seoul_14_053',
            name: '창천동',
          },
          {
            id: 'seoul_14_054',
            name: '천연동',
          },
          {
            id: 'seoul_14_055',
            name: '충정로1가',
          },
          {
            id: 'seoul_14_056',
            name: '충정로2가',
          },
          {
            id: 'seoul_14_057',
            name: '충정로3가',
          },
          {
            id: 'seoul_14_058',
            name: '충정로동',
          },
          {
            id: 'seoul_14_059',
            name: '평동',
          },
          {
            id: 'seoul_14_060',
            name: '평창동',
          },
          {
            id: 'seoul_14_061',
            name: '합동',
          },
          {
            id: 'seoul_14_062',
            name: '행촌동',
          },
          {
            id: 'seoul_14_063',
            name: '현저동',
          },
          {
            id: 'seoul_14_064',
            name: '홍은1동',
          },
          {
            id: 'seoul_14_065',
            name: '홍은2동',
          },
          {
            id: 'seoul_14_066',
            name: '홍은3동',
          },
          {
            id: 'seoul_14_067',
            name: '홍은동',
          },
          {
            id: 'seoul_14_068',
            name: '홍제1동',
          },
          {
            id: 'seoul_14_069',
            name: '홍제2동',
          },
          {
            id: 'seoul_14_070',
            name: '홍제3동',
          },
          {
            id: 'seoul_14_071',
            name: '홍제4동',
          },
          {
            id: 'seoul_14_072',
            name: '홍제동',
          },
          {
            id: 'seoul_14_073',
            name: '홍지동',
          },
          {
            id: 'seoul_14_074',
            name: '홍파동',
          },
        ],
      },
      {
        id: 'seoul_15',
        name: '서초구',
        subregions: [
          {
            id: 'seoul_15_001',
            name: '개포동',
          },
          {
            id: 'seoul_15_002',
            name: '내곡동',
          },
          {
            id: 'seoul_15_003',
            name: '도곡1동',
          },
          {
            id: 'seoul_15_004',
            name: '도곡2동',
          },
          {
            id: 'seoul_15_005',
            name: '도곡동',
          },
          {
            id: 'seoul_15_006',
            name: '반포1동',
          },
          {
            id: 'seoul_15_007',
            name: '반포2동',
          },
          {
            id: 'seoul_15_008',
            name: '반포3동',
          },
          {
            id: 'seoul_15_009',
            name: '반포동',
          },
          {
            id: 'seoul_15_010',
            name: '반포본동',
          },
          {
            id: 'seoul_15_011',
            name: '방배1동',
          },
          {
            id: 'seoul_15_012',
            name: '방배2동',
          },
          {
            id: 'seoul_15_013',
            name: '방배3동',
          },
          {
            id: 'seoul_15_014',
            name: '방배동',
          },
          {
            id: 'seoul_15_015',
            name: '방배본동',
          },
          {
            id: 'seoul_15_016',
            name: '서초1동',
          },
          {
            id: 'seoul_15_017',
            name: '서초2동',
          },
          {
            id: 'seoul_15_018',
            name: '서초3동',
          },
          {
            id: 'seoul_15_019',
            name: '서초동',
          },
          {
            id: 'seoul_15_020',
            name: '신사동',
          },
          {
            id: 'seoul_15_021',
            name: '신원동',
          },
          {
            id: 'seoul_15_022',
            name: '양재동',
          },
          {
            id: 'seoul_15_023',
            name: '역삼동',
          },
          {
            id: 'seoul_15_024',
            name: '염곡동',
          },
          {
            id: 'seoul_15_025',
            name: '우면동',
          },
          {
            id: 'seoul_15_026',
            name: '원지동',
          },
          {
            id: 'seoul_15_027',
            name: '잠원동',
          },
        ],
      },
      {
        id: 'seoul_16',
        name: '성동구',
        subregions: [
          {
            id: 'seoul_16_001',
            name: '가락동',
          },
          {
            id: 'seoul_16_002',
            name: '개포동',
          },
          {
            id: 'seoul_16_003',
            name: '거여동',
          },
          {
            id: 'seoul_16_004',
            name: '고덕동',
          },
          {
            id: 'seoul_16_005',
            name: '광장동',
          },
          {
            id: 'seoul_16_006',
            name: '구의1동',
          },
          {
            id: 'seoul_16_007',
            name: '구의2동',
          },
          {
            id: 'seoul_16_008',
            name: '구의동',
          },
          {
            id: 'seoul_16_009',
            name: '군자동',
          },
          {
            id: 'seoul_16_010',
            name: '금호동',
          },
          {
            id: 'seoul_16_011',
            name: '금호동1가',
          },
          {
            id: 'seoul_16_012',
            name: '금호동2가',
          },
          {
            id: 'seoul_16_013',
            name: '금호동3가',
          },
          {
            id: 'seoul_16_014',
            name: '금호동4가',
          },
          {
            id: 'seoul_16_015',
            name: '길동',
          },
          {
            id: 'seoul_16_016',
            name: '내곡동',
          },
          {
            id: 'seoul_16_017',
            name: '논현동',
          },
          {
            id: 'seoul_16_018',
            name: '능동',
          },
          {
            id: 'seoul_16_019',
            name: '답십리동',
          },
          {
            id: 'seoul_16_020',
            name: '대치동',
          },
          {
            id: 'seoul_16_021',
            name: '도곡동',
          },
          {
            id: 'seoul_16_022',
            name: '도선동',
          },
          {
            id: 'seoul_16_023',
            name: '둔촌동',
          },
          {
            id: 'seoul_16_024',
            name: '마장동',
          },
          {
            id: 'seoul_16_025',
            name: '마천동',
          },
          {
            id: 'seoul_16_026',
            name: '면목동',
          },
          {
            id: 'seoul_16_027',
            name: '명일동',
          },
          {
            id: 'seoul_16_028',
            name: '모진동',
          },
          {
            id: 'seoul_16_029',
            name: '무학동',
          },
          {
            id: 'seoul_16_030',
            name: '문정동',
          },
          {
            id: 'seoul_16_031',
            name: '반포동',
          },
          {
            id: 'seoul_16_032',
            name: '방이동',
          },
          {
            id: 'seoul_16_033',
            name: '사근동',
          },
          {
            id: 'seoul_16_034',
            name: '삼성동',
          },
          {
            id: 'seoul_16_035',
            name: '삼전동',
          },
          {
            id: 'seoul_16_036',
            name: '상왕십리동',
          },
          {
            id: 'seoul_16_037',
            name: '상일동',
          },
          {
            id: 'seoul_16_038',
            name: '서초동',
          },
          {
            id: 'seoul_16_039',
            name: '석촌동',
          },
          {
            id: 'seoul_16_040',
            name: '성내동',
          },
          {
            id: 'seoul_16_041',
            name: '성수1가1동',
          },
          {
            id: 'seoul_16_042',
            name: '성수1가2동',
          },
          {
            id: 'seoul_16_043',
            name: '성수2가1동',
          },
          {
            id: 'seoul_16_044',
            name: '성수2가2동',
          },
          {
            id: 'seoul_16_045',
            name: '성수2가3동',
          },
          {
            id: 'seoul_16_046',
            name: '성수2가4동',
          },
          {
            id: 'seoul_16_047',
            name: '성수동1가',
          },
          {
            id: 'seoul_16_048',
            name: '성수동2가',
          },
          {
            id: 'seoul_16_049',
            name: '세곡동',
          },
          {
            id: 'seoul_16_050',
            name: '송정동',
          },
          {
            id: 'seoul_16_051',
            name: '송파동',
          },
          {
            id: 'seoul_16_052',
            name: '수서동',
          },
          {
            id: 'seoul_16_053',
            name: '신당동',
          },
          {
            id: 'seoul_16_054',
            name: '신사동',
          },
          {
            id: 'seoul_16_055',
            name: '신원동',
          },
          {
            id: 'seoul_16_056',
            name: '신천동',
          },
          {
            id: 'seoul_16_057',
            name: '암사동',
          },
          {
            id: 'seoul_16_058',
            name: '압구정동',
          },
          {
            id: 'seoul_16_059',
            name: '양재동',
          },
          {
            id: 'seoul_16_060',
            name: '역삼동',
          },
          {
            id: 'seoul_16_061',
            name: '염곡동',
          },
          {
            id: 'seoul_16_062',
            name: '오금동',
          },
          {
            id: 'seoul_16_063',
            name: '옥수1동',
          },
          {
            id: 'seoul_16_064',
            name: '옥수2동',
          },
          {
            id: 'seoul_16_065',
            name: '옥수동',
          },
          {
            id: 'seoul_16_066',
            name: '왕십리1동',
          },
          {
            id: 'seoul_16_067',
            name: '왕십리2동',
          },
          {
            id: 'seoul_16_068',
            name: '용답동',
          },
          {
            id: 'seoul_16_069',
            name: '용두동',
          },
          {
            id: 'seoul_16_070',
            name: '우면동',
          },
          {
            id: 'seoul_16_071',
            name: '원지동',
          },
          {
            id: 'seoul_16_072',
            name: '율현동',
          },
          {
            id: 'seoul_16_073',
            name: '응봉동',
          },
          {
            id: 'seoul_16_074',
            name: '이동',
          },
          {
            id: 'seoul_16_075',
            name: '일원동',
          },
          {
            id: 'seoul_16_076',
            name: '자곡동',
          },
          {
            id: 'seoul_16_077',
            name: '자양1동',
          },
          {
            id: 'seoul_16_078',
            name: '자양2동',
          },
          {
            id: 'seoul_16_079',
            name: '자양3동',
          },
          {
            id: 'seoul_16_080',
            name: '자양동',
          },
          {
            id: 'seoul_16_081',
            name: '잠실동',
          },
          {
            id: 'seoul_16_082',
            name: '잠원동',
          },
          {
            id: 'seoul_16_083',
            name: '장지동',
          },
          {
            id: 'seoul_16_084',
            name: '중곡1동',
          },
          {
            id: 'seoul_16_085',
            name: '중곡2동',
          },
          {
            id: 'seoul_16_086',
            name: '중곡3동',
          },
          {
            id: 'seoul_16_087',
            name: '중곡4동',
          },
          {
            id: 'seoul_16_088',
            name: '중곡동',
          },
          {
            id: 'seoul_16_089',
            name: '천호동',
          },
          {
            id: 'seoul_16_090',
            name: '청담동',
          },
          {
            id: 'seoul_16_091',
            name: '포이동',
          },
          {
            id: 'seoul_16_092',
            name: '풍납동',
          },
          {
            id: 'seoul_16_093',
            name: '하왕십리동',
          },
          {
            id: 'seoul_16_094',
            name: '하일동',
          },
          {
            id: 'seoul_16_095',
            name: '학동',
          },
          {
            id: 'seoul_16_096',
            name: '행당1동',
          },
          {
            id: 'seoul_16_097',
            name: '행당2동',
          },
          {
            id: 'seoul_16_098',
            name: '행당동',
          },
          {
            id: 'seoul_16_099',
            name: '홍익동',
          },
          {
            id: 'seoul_16_100',
            name: '화양동',
          },
          {
            id: 'seoul_16_101',
            name: '황학동',
          },
          {
            id: 'seoul_16_102',
            name: '흥인동',
          },
        ],
      },
      {
        id: 'seoul_17',
        name: '성북구',
        subregions: [
          {
            id: 'seoul_17_001',
            name: '공릉동',
          },
          {
            id: 'seoul_17_002',
            name: '길음1동',
          },
          {
            id: 'seoul_17_003',
            name: '길음2동',
          },
          {
            id: 'seoul_17_004',
            name: '길음3동',
          },
          {
            id: 'seoul_17_005',
            name: '길음동',
          },
          {
            id: 'seoul_17_006',
            name: '도봉동',
          },
          {
            id: 'seoul_17_007',
            name: '돈암1동',
          },
          {
            id: 'seoul_17_008',
            name: '돈암2동',
          },
          {
            id: 'seoul_17_009',
            name: '돈암동',
          },
          {
            id: 'seoul_17_010',
            name: '동선1동',
          },
          {
            id: 'seoul_17_011',
            name: '동선2동',
          },
          {
            id: 'seoul_17_012',
            name: '동선동1가',
          },
          {
            id: 'seoul_17_013',
            name: '동선동2가',
          },
          {
            id: 'seoul_17_014',
            name: '동선동3가',
          },
          {
            id: 'seoul_17_015',
            name: '동선동4가',
          },
          {
            id: 'seoul_17_016',
            name: '동선동5가',
          },
          {
            id: 'seoul_17_017',
            name: '동소문동1가',
          },
          {
            id: 'seoul_17_018',
            name: '동소문동2가',
          },
          {
            id: 'seoul_17_019',
            name: '동소문동3가',
          },
          {
            id: 'seoul_17_020',
            name: '동소문동4가',
          },
          {
            id: 'seoul_17_021',
            name: '동소문동5가',
          },
          {
            id: 'seoul_17_022',
            name: '동소문동6가',
          },
          {
            id: 'seoul_17_023',
            name: '동소문동7가',
          },
          {
            id: 'seoul_17_024',
            name: '동소문동8가',
          },
          {
            id: 'seoul_17_025',
            name: '미아동',
          },
          {
            id: 'seoul_17_026',
            name: '방학동',
          },
          {
            id: 'seoul_17_027',
            name: '번동',
          },
          {
            id: 'seoul_17_028',
            name: '보문동1가',
          },
          {
            id: 'seoul_17_029',
            name: '보문동2가',
          },
          {
            id: 'seoul_17_030',
            name: '보문동3가',
          },
          {
            id: 'seoul_17_031',
            name: '보문동4가',
          },
          {
            id: 'seoul_17_032',
            name: '보문동5가',
          },
          {
            id: 'seoul_17_033',
            name: '보문동6가',
          },
          {
            id: 'seoul_17_034',
            name: '보문동7가',
          },
          {
            id: 'seoul_17_035',
            name: '삼선1동',
          },
          {
            id: 'seoul_17_036',
            name: '삼선2동',
          },
          {
            id: 'seoul_17_037',
            name: '삼선동1가',
          },
          {
            id: 'seoul_17_038',
            name: '삼선동2가',
          },
          {
            id: 'seoul_17_039',
            name: '삼선동3가',
          },
          {
            id: 'seoul_17_040',
            name: '삼선동4가',
          },
          {
            id: 'seoul_17_041',
            name: '삼선동5가',
          },
          {
            id: 'seoul_17_042',
            name: '상계동',
          },
          {
            id: 'seoul_17_043',
            name: '상월곡동',
          },
          {
            id: 'seoul_17_044',
            name: '석관1동',
          },
          {
            id: 'seoul_17_045',
            name: '석관2동',
          },
          {
            id: 'seoul_17_046',
            name: '석관동',
          },
          {
            id: 'seoul_17_047',
            name: '성북1동',
          },
          {
            id: 'seoul_17_048',
            name: '성북2동',
          },
          {
            id: 'seoul_17_049',
            name: '성북동',
          },
          {
            id: 'seoul_17_050',
            name: '성북동1가',
          },
          {
            id: 'seoul_17_051',
            name: '성북동2가',
          },
          {
            id: 'seoul_17_052',
            name: '수유동',
          },
          {
            id: 'seoul_17_053',
            name: '쌍문동',
          },
          {
            id: 'seoul_17_054',
            name: '안암동1가',
          },
          {
            id: 'seoul_17_055',
            name: '안암동2가',
          },
          {
            id: 'seoul_17_056',
            name: '안암동3가',
          },
          {
            id: 'seoul_17_057',
            name: '안암동4가',
          },
          {
            id: 'seoul_17_058',
            name: '안암동5가',
          },
          {
            id: 'seoul_17_059',
            name: '우이동',
          },
          {
            id: 'seoul_17_060',
            name: '월계동',
          },
          {
            id: 'seoul_17_061',
            name: '장위1동',
          },
          {
            id: 'seoul_17_062',
            name: '장위2동',
          },
          {
            id: 'seoul_17_063',
            name: '장위3동',
          },
          {
            id: 'seoul_17_064',
            name: '장위동',
          },
          {
            id: 'seoul_17_065',
            name: '정릉1동',
          },
          {
            id: 'seoul_17_066',
            name: '정릉2동',
          },
          {
            id: 'seoul_17_067',
            name: '정릉3동',
          },
          {
            id: 'seoul_17_068',
            name: '정릉4동',
          },
          {
            id: 'seoul_17_069',
            name: '정릉동',
          },
          {
            id: 'seoul_17_070',
            name: '종암1동',
          },
          {
            id: 'seoul_17_071',
            name: '종암2동',
          },
          {
            id: 'seoul_17_072',
            name: '종암동',
          },
          {
            id: 'seoul_17_073',
            name: '중계동',
          },
          {
            id: 'seoul_17_074',
            name: '창동',
          },
          {
            id: 'seoul_17_075',
            name: '하계동',
          },
          {
            id: 'seoul_17_076',
            name: '하월곡1동',
          },
          {
            id: 'seoul_17_077',
            name: '하월곡2동',
          },
          {
            id: 'seoul_17_078',
            name: '하월곡3동',
          },
          {
            id: 'seoul_17_079',
            name: '하월곡4동',
          },
          {
            id: 'seoul_17_080',
            name: '하월곡동',
          },
        ],
      },
      {
        id: 'seoul_18',
        name: '송파구',
        subregions: [
          {
            id: 'seoul_18_001',
            name: '가락동',
          },
          {
            id: 'seoul_18_002',
            name: '거여동',
          },
          {
            id: 'seoul_18_003',
            name: '마천동',
          },
          {
            id: 'seoul_18_004',
            name: '문정동',
          },
          {
            id: 'seoul_18_005',
            name: '방이동',
          },
          {
            id: 'seoul_18_006',
            name: '삼전동',
          },
          {
            id: 'seoul_18_007',
            name: '석촌동',
          },
          {
            id: 'seoul_18_008',
            name: '송파동',
          },
          {
            id: 'seoul_18_009',
            name: '신천동',
          },
          {
            id: 'seoul_18_010',
            name: '오금동',
          },
          {
            id: 'seoul_18_011',
            name: '이동',
          },
          {
            id: 'seoul_18_012',
            name: '잠실동',
          },
          {
            id: 'seoul_18_013',
            name: '장지동',
          },
          {
            id: 'seoul_18_014',
            name: '풍납동',
          },
        ],
      },
      {
        id: 'seoul_19',
        name: '양천구',
        subregions: [
          {
            id: 'seoul_19_001',
            name: '목1동',
          },
          {
            id: 'seoul_19_002',
            name: '목2동',
          },
          {
            id: 'seoul_19_003',
            name: '목3동',
          },
          {
            id: 'seoul_19_004',
            name: '목4동',
          },
          {
            id: 'seoul_19_005',
            name: '목5동',
          },
          {
            id: 'seoul_19_006',
            name: '목동',
          },
          {
            id: 'seoul_19_007',
            name: '신월1동',
          },
          {
            id: 'seoul_19_008',
            name: '신월2동',
          },
          {
            id: 'seoul_19_009',
            name: '신월3동',
          },
          {
            id: 'seoul_19_010',
            name: '신월4동',
          },
          {
            id: 'seoul_19_011',
            name: '신월5동',
          },
          {
            id: 'seoul_19_012',
            name: '신월6동',
          },
          {
            id: 'seoul_19_013',
            name: '신월동',
          },
          {
            id: 'seoul_19_014',
            name: '신정1동',
          },
          {
            id: 'seoul_19_015',
            name: '신정2동',
          },
          {
            id: 'seoul_19_016',
            name: '신정3동',
          },
          {
            id: 'seoul_19_017',
            name: '신정4동',
          },
          {
            id: 'seoul_19_018',
            name: '신정5동',
          },
          {
            id: 'seoul_19_019',
            name: '신정6동',
          },
          {
            id: 'seoul_19_020',
            name: '신정동',
          },
        ],
      },
      {
        id: 'seoul_20',
        name: '영등포구',
        subregions: [
          {
            id: 'seoul_20_001',
            name: '가리봉동',
          },
          {
            id: 'seoul_20_002',
            name: '가양동',
          },
          {
            id: 'seoul_20_003',
            name: '개봉동',
          },
          {
            id: 'seoul_20_004',
            name: '개화동',
          },
          {
            id: 'seoul_20_005',
            name: '고척동',
          },
          {
            id: 'seoul_20_006',
            name: '공항동',
          },
          {
            id: 'seoul_20_007',
            name: '과해동',
          },
          {
            id: 'seoul_20_008',
            name: '구로동',
          },
          {
            id: 'seoul_20_009',
            name: '궁동',
          },
          {
            id: 'seoul_20_010',
            name: '내발산동',
          },
          {
            id: 'seoul_20_011',
            name: '노량진동',
          },
          {
            id: 'seoul_20_012',
            name: '당산1동',
          },
          {
            id: 'seoul_20_013',
            name: '당산2동',
          },
          {
            id: 'seoul_20_014',
            name: '당산동',
          },
          {
            id: 'seoul_20_015',
            name: '당산동1가',
          },
          {
            id: 'seoul_20_016',
            name: '당산동2가',
          },
          {
            id: 'seoul_20_017',
            name: '당산동3가',
          },
          {
            id: 'seoul_20_018',
            name: '당산동4가',
          },
          {
            id: 'seoul_20_019',
            name: '당산동5가',
          },
          {
            id: 'seoul_20_020',
            name: '당산동6가',
          },
          {
            id: 'seoul_20_021',
            name: '대림1동',
          },
          {
            id: 'seoul_20_022',
            name: '대림2동',
          },
          {
            id: 'seoul_20_023',
            name: '대림3동',
          },
          {
            id: 'seoul_20_024',
            name: '대림동',
          },
          {
            id: 'seoul_20_025',
            name: '대방동',
          },
          {
            id: 'seoul_20_026',
            name: '도림1동',
          },
          {
            id: 'seoul_20_027',
            name: '도림2동',
          },
          {
            id: 'seoul_20_028',
            name: '도림동',
          },
          {
            id: 'seoul_20_029',
            name: '독산동',
          },
          {
            id: 'seoul_20_030',
            name: '동작동',
          },
          {
            id: 'seoul_20_031',
            name: '등촌동',
          },
          {
            id: 'seoul_20_032',
            name: '마곡동',
          },
          {
            id: 'seoul_20_033',
            name: '목동',
          },
          {
            id: 'seoul_20_034',
            name: '문래1동',
          },
          {
            id: 'seoul_20_035',
            name: '문래2동',
          },
          {
            id: 'seoul_20_036',
            name: '문래동1가',
          },
          {
            id: 'seoul_20_037',
            name: '문래동2가',
          },
          {
            id: 'seoul_20_038',
            name: '문래동3가',
          },
          {
            id: 'seoul_20_039',
            name: '문래동4가',
          },
          {
            id: 'seoul_20_040',
            name: '문래동5가',
          },
          {
            id: 'seoul_20_041',
            name: '문래동6가',
          },
          {
            id: 'seoul_20_042',
            name: '반포동',
          },
          {
            id: 'seoul_20_043',
            name: '방배동',
          },
          {
            id: 'seoul_20_044',
            name: '방화동',
          },
          {
            id: 'seoul_20_045',
            name: '본동',
          },
          {
            id: 'seoul_20_046',
            name: '봉천동',
          },
          {
            id: 'seoul_20_047',
            name: '사당동',
          },
          {
            id: 'seoul_20_048',
            name: '상도동',
          },
          {
            id: 'seoul_20_049',
            name: '상도제1동',
          },
          {
            id: 'seoul_20_050',
            name: '서초동',
          },
          {
            id: 'seoul_20_051',
            name: '시흥동',
          },
          {
            id: 'seoul_20_052',
            name: '신길1동',
          },
          {
            id: 'seoul_20_053',
            name: '신길2동',
          },
          {
            id: 'seoul_20_054',
            name: '신길3동',
          },
          {
            id: 'seoul_20_055',
            name: '신길4동',
          },
          {
            id: 'seoul_20_056',
            name: '신길5동',
          },
          {
            id: 'seoul_20_057',
            name: '신길6동',
          },
          {
            id: 'seoul_20_058',
            name: '신길7동',
          },
          {
            id: 'seoul_20_059',
            name: '신길동',
          },
          {
            id: 'seoul_20_060',
            name: '신대방동',
          },
          {
            id: 'seoul_20_061',
            name: '신도림동',
          },
          {
            id: 'seoul_20_062',
            name: '신림동',
          },
          {
            id: 'seoul_20_063',
            name: '신월동',
          },
          {
            id: 'seoul_20_064',
            name: '신정동',
          },
          {
            id: 'seoul_20_065',
            name: '양재동',
          },
          {
            id: 'seoul_20_066',
            name: '양평1동',
          },
          {
            id: 'seoul_20_067',
            name: '양평2동',
          },
          {
            id: 'seoul_20_068',
            name: '양평동',
          },
          {
            id: 'seoul_20_069',
            name: '양평동1가',
          },
          {
            id: 'seoul_20_070',
            name: '양평동2가',
          },
          {
            id: 'seoul_20_071',
            name: '양평동3가',
          },
          {
            id: 'seoul_20_072',
            name: '양평동4가',
          },
          {
            id: 'seoul_20_073',
            name: '양평동5가',
          },
          {
            id: 'seoul_20_074',
            name: '양평동6가',
          },
          {
            id: 'seoul_20_075',
            name: '양화동',
          },
          {
            id: 'seoul_20_076',
            name: '여의도동',
          },
          {
            id: 'seoul_20_077',
            name: '염창동',
          },
          {
            id: 'seoul_20_078',
            name: '영등포1동',
          },
          {
            id: 'seoul_20_079',
            name: '영등포2동',
          },
          {
            id: 'seoul_20_080',
            name: '영등포3동',
          },
          {
            id: 'seoul_20_081',
            name: '영등포동',
          },
          {
            id: 'seoul_20_082',
            name: '영등포동1가',
          },
          {
            id: 'seoul_20_083',
            name: '영등포동2가',
          },
          {
            id: 'seoul_20_084',
            name: '영등포동3가',
          },
          {
            id: 'seoul_20_085',
            name: '영등포동4가',
          },
          {
            id: 'seoul_20_086',
            name: '영등포동5가',
          },
          {
            id: 'seoul_20_087',
            name: '영등포동6가',
          },
          {
            id: 'seoul_20_088',
            name: '영등포동7가',
          },
          {
            id: 'seoul_20_089',
            name: '영등포동8가',
          },
          {
            id: 'seoul_20_090',
            name: '오곡동',
          },
          {
            id: 'seoul_20_091',
            name: '오류동',
          },
          {
            id: 'seoul_20_092',
            name: '오쇠동',
          },
          {
            id: 'seoul_20_093',
            name: '온수동',
          },
          {
            id: 'seoul_20_094',
            name: '외발산동',
          },
          {
            id: 'seoul_20_095',
            name: '우면동',
          },
          {
            id: 'seoul_20_096',
            name: '원지동',
          },
          {
            id: 'seoul_20_097',
            name: '잠원동',
          },
          {
            id: 'seoul_20_098',
            name: '천왕동',
          },
          {
            id: 'seoul_20_099',
            name: '항동',
          },
          {
            id: 'seoul_20_100',
            name: '화곡동',
          },
          {
            id: 'seoul_20_101',
            name: '흑석동',
          },
        ],
      },
      {
        id: 'seoul_21',
        name: '용산구',
        subregions: [
          {
            id: 'seoul_21_001',
            name: '갈월동',
          },
          {
            id: 'seoul_21_002',
            name: '남영동',
          },
          {
            id: 'seoul_21_003',
            name: '도동1가',
          },
          {
            id: 'seoul_21_004',
            name: '도동2가',
          },
          {
            id: 'seoul_21_005',
            name: '도원동',
          },
          {
            id: 'seoul_21_006',
            name: '동빙고동',
          },
          {
            id: 'seoul_21_007',
            name: '동자동',
          },
          {
            id: 'seoul_21_008',
            name: '만리동1가',
          },
          {
            id: 'seoul_21_009',
            name: '만리동2가',
          },
          {
            id: 'seoul_21_010',
            name: '문배동',
          },
          {
            id: 'seoul_21_011',
            name: '보광동',
          },
          {
            id: 'seoul_21_012',
            name: '산천동',
          },
          {
            id: 'seoul_21_013',
            name: '서계동',
          },
          {
            id: 'seoul_21_014',
            name: '서빙고동',
          },
          {
            id: 'seoul_21_015',
            name: '신계동',
          },
          {
            id: 'seoul_21_016',
            name: '신창동',
          },
          {
            id: 'seoul_21_017',
            name: '옥수동',
          },
          {
            id: 'seoul_21_018',
            name: '용문동',
          },
          {
            id: 'seoul_21_019',
            name: '용산동1가',
          },
          {
            id: 'seoul_21_020',
            name: '용산동2가',
          },
          {
            id: 'seoul_21_021',
            name: '용산동3가',
          },
          {
            id: 'seoul_21_022',
            name: '용산동4가',
          },
          {
            id: 'seoul_21_023',
            name: '용산동5가',
          },
          {
            id: 'seoul_21_024',
            name: '용산동6가',
          },
          {
            id: 'seoul_21_025',
            name: '원효로1가',
          },
          {
            id: 'seoul_21_026',
            name: '원효로2가',
          },
          {
            id: 'seoul_21_027',
            name: '원효로3가',
          },
          {
            id: 'seoul_21_028',
            name: '원효로4가',
          },
          {
            id: 'seoul_21_029',
            name: '이촌1동',
          },
          {
            id: 'seoul_21_030',
            name: '이촌2동',
          },
          {
            id: 'seoul_21_031',
            name: '이촌동',
          },
          {
            id: 'seoul_21_032',
            name: '이태원1동',
          },
          {
            id: 'seoul_21_033',
            name: '이태원2동',
          },
          {
            id: 'seoul_21_034',
            name: '이태원동',
          },
          {
            id: 'seoul_21_035',
            name: '주성동',
          },
          {
            id: 'seoul_21_036',
            name: '청암동',
          },
          {
            id: 'seoul_21_037',
            name: '청파1동',
          },
          {
            id: 'seoul_21_038',
            name: '청파2동',
          },
          {
            id: 'seoul_21_039',
            name: '청파동1가',
          },
          {
            id: 'seoul_21_040',
            name: '청파동2가',
          },
          {
            id: 'seoul_21_041',
            name: '청파동3가',
          },
          {
            id: 'seoul_21_042',
            name: '한강로1가',
          },
          {
            id: 'seoul_21_043',
            name: '한강로2가',
          },
          {
            id: 'seoul_21_044',
            name: '한강로3가',
          },
          {
            id: 'seoul_21_045',
            name: '한남1동',
          },
          {
            id: 'seoul_21_046',
            name: '한남2동',
          },
          {
            id: 'seoul_21_047',
            name: '한남동',
          },
          {
            id: 'seoul_21_048',
            name: '효창동',
          },
          {
            id: 'seoul_21_049',
            name: '후암동',
          },
        ],
      },
      {
        id: 'seoul_22',
        name: '은평구',
        subregions: [
          {
            id: 'seoul_22_001',
            name: '갈현동',
          },
          {
            id: 'seoul_22_002',
            name: '구산동',
          },
          {
            id: 'seoul_22_003',
            name: '구파발동',
          },
          {
            id: 'seoul_22_004',
            name: '녹번동',
          },
          {
            id: 'seoul_22_005',
            name: '대조동',
          },
          {
            id: 'seoul_22_006',
            name: '불광1동',
          },
          {
            id: 'seoul_22_007',
            name: '불광2동',
          },
          {
            id: 'seoul_22_008',
            name: '불광3동',
          },
          {
            id: 'seoul_22_009',
            name: '불광동',
          },
          {
            id: 'seoul_22_010',
            name: '수색동',
          },
          {
            id: 'seoul_22_011',
            name: '신사동',
          },
          {
            id: 'seoul_22_012',
            name: '역촌1동',
          },
          {
            id: 'seoul_22_013',
            name: '역촌2동',
          },
          {
            id: 'seoul_22_014',
            name: '역촌동',
          },
          {
            id: 'seoul_22_015',
            name: '응암1동',
          },
          {
            id: 'seoul_22_016',
            name: '응암2동',
          },
          {
            id: 'seoul_22_017',
            name: '응암3동',
          },
          {
            id: 'seoul_22_018',
            name: '응암4동',
          },
          {
            id: 'seoul_22_019',
            name: '응암동',
          },
          {
            id: 'seoul_22_020',
            name: '증산동',
          },
          {
            id: 'seoul_22_021',
            name: '진관내동',
          },
          {
            id: 'seoul_22_022',
            name: '진관동',
          },
          {
            id: 'seoul_22_023',
            name: '진관외동',
          },
        ],
      },
      {
        id: 'seoul_23',
        name: '종로구',
        subregions: [
          {
            id: 'seoul_23_001',
            name: '가회동',
          },
          {
            id: 'seoul_23_002',
            name: '견지동',
          },
          {
            id: 'seoul_23_003',
            name: '경운동',
          },
          {
            id: 'seoul_23_004',
            name: '계동',
          },
          {
            id: 'seoul_23_005',
            name: '공평동',
          },
          {
            id: 'seoul_23_006',
            name: '관수동',
          },
          {
            id: 'seoul_23_007',
            name: '관철동',
          },
          {
            id: 'seoul_23_008',
            name: '관훈동',
          },
          {
            id: 'seoul_23_009',
            name: '교남동',
          },
          {
            id: 'seoul_23_010',
            name: '교북동',
          },
          {
            id: 'seoul_23_011',
            name: '구기동',
          },
          {
            id: 'seoul_23_012',
            name: '궁정동',
          },
          {
            id: 'seoul_23_013',
            name: '권농동',
          },
          {
            id: 'seoul_23_014',
            name: '낙원동',
          },
          {
            id: 'seoul_23_015',
            name: '내수동',
          },
          {
            id: 'seoul_23_016',
            name: '내자동',
          },
          {
            id: 'seoul_23_017',
            name: '누상동',
          },
          {
            id: 'seoul_23_018',
            name: '누하동',
          },
          {
            id: 'seoul_23_019',
            name: '당주동',
          },
          {
            id: 'seoul_23_020',
            name: '도렴동',
          },
          {
            id: 'seoul_23_021',
            name: '돈의동',
          },
          {
            id: 'seoul_23_022',
            name: '동숭동',
          },
          {
            id: 'seoul_23_023',
            name: '명륜1가',
          },
          {
            id: 'seoul_23_024',
            name: '명륜2가',
          },
          {
            id: 'seoul_23_025',
            name: '명륜3가',
          },
          {
            id: 'seoul_23_026',
            name: '명륜4가',
          },
          {
            id: 'seoul_23_027',
            name: '묘동',
          },
          {
            id: 'seoul_23_028',
            name: '무악동',
          },
          {
            id: 'seoul_23_029',
            name: '봉익동',
          },
          {
            id: 'seoul_23_030',
            name: '부암동',
          },
          {
            id: 'seoul_23_031',
            name: '사간동',
          },
          {
            id: 'seoul_23_032',
            name: '사직동',
          },
          {
            id: 'seoul_23_033',
            name: '삼청동',
          },
          {
            id: 'seoul_23_034',
            name: '서린동',
          },
          {
            id: 'seoul_23_035',
            name: '세종로',
          },
          {
            id: 'seoul_23_036',
            name: '소격동',
          },
          {
            id: 'seoul_23_037',
            name: '송월동',
          },
          {
            id: 'seoul_23_038',
            name: '송현동',
          },
          {
            id: 'seoul_23_039',
            name: '수송동',
          },
          {
            id: 'seoul_23_040',
            name: '숭인1동',
          },
          {
            id: 'seoul_23_041',
            name: '숭인2동',
          },
          {
            id: 'seoul_23_042',
            name: '숭인동',
          },
          {
            id: 'seoul_23_043',
            name: '신교동',
          },
          {
            id: 'seoul_23_044',
            name: '신문로1가',
          },
          {
            id: 'seoul_23_045',
            name: '신문로2가',
          },
          {
            id: 'seoul_23_046',
            name: '신영동',
          },
          {
            id: 'seoul_23_047',
            name: '안국동',
          },
          {
            id: 'seoul_23_048',
            name: '연건동',
          },
          {
            id: 'seoul_23_049',
            name: '연지동',
          },
          {
            id: 'seoul_23_050',
            name: '예지동',
          },
          {
            id: 'seoul_23_051',
            name: '옥인동',
          },
          {
            id: 'seoul_23_052',
            name: '와룡동',
          },
          {
            id: 'seoul_23_053',
            name: '운니동',
          },
          {
            id: 'seoul_23_054',
            name: '원남동',
          },
          {
            id: 'seoul_23_055',
            name: '원서동',
          },
          {
            id: 'seoul_23_056',
            name: '이화동',
          },
          {
            id: 'seoul_23_057',
            name: '익선동',
          },
          {
            id: 'seoul_23_058',
            name: '인사동',
          },
          {
            id: 'seoul_23_059',
            name: '인의동',
          },
          {
            id: 'seoul_23_060',
            name: '장사동',
          },
          {
            id: 'seoul_23_061',
            name: '재동',
          },
          {
            id: 'seoul_23_062',
            name: '적선동',
          },
          {
            id: 'seoul_23_063',
            name: '종로1가',
          },
          {
            id: 'seoul_23_064',
            name: '종로2가',
          },
          {
            id: 'seoul_23_065',
            name: '종로3가',
          },
          {
            id: 'seoul_23_066',
            name: '종로4가',
          },
          {
            id: 'seoul_23_067',
            name: '종로5가',
          },
          {
            id: 'seoul_23_068',
            name: '종로6가',
          },
          {
            id: 'seoul_23_069',
            name: '중학동',
          },
          {
            id: 'seoul_23_070',
            name: '창성동',
          },
          {
            id: 'seoul_23_071',
            name: '창신1동',
          },
          {
            id: 'seoul_23_072',
            name: '창신2동',
          },
          {
            id: 'seoul_23_073',
            name: '창신3동',
          },
          {
            id: 'seoul_23_074',
            name: '창신동',
          },
          {
            id: 'seoul_23_075',
            name: '청운동',
          },
          {
            id: 'seoul_23_076',
            name: '청진동',
          },
          {
            id: 'seoul_23_077',
            name: '체부동',
          },
          {
            id: 'seoul_23_078',
            name: '충신동',
          },
          {
            id: 'seoul_23_079',
            name: '통의동',
          },
          {
            id: 'seoul_23_080',
            name: '통인동',
          },
          {
            id: 'seoul_23_081',
            name: '팔판동',
          },
          {
            id: 'seoul_23_082',
            name: '평동',
          },
          {
            id: 'seoul_23_083',
            name: '평창동',
          },
          {
            id: 'seoul_23_084',
            name: '필운동',
          },
          {
            id: 'seoul_23_085',
            name: '행촌동',
          },
          {
            id: 'seoul_23_086',
            name: '혜화동',
          },
          {
            id: 'seoul_23_087',
            name: '홍지동',
          },
          {
            id: 'seoul_23_088',
            name: '홍파동',
          },
          {
            id: 'seoul_23_089',
            name: '화동',
          },
          {
            id: 'seoul_23_090',
            name: '효자동',
          },
          {
            id: 'seoul_23_091',
            name: '효제동',
          },
          {
            id: 'seoul_23_092',
            name: '훈정동',
          },
        ],
      },
      {
        id: 'seoul_24',
        name: '중구',
        subregions: [
          {
            id: 'seoul_24_001',
            name: '광희동1가',
          },
          {
            id: 'seoul_24_002',
            name: '광희동2가',
          },
          {
            id: 'seoul_24_003',
            name: '남대문로1가',
          },
          {
            id: 'seoul_24_004',
            name: '남대문로2가',
          },
          {
            id: 'seoul_24_005',
            name: '남대문로3가',
          },
          {
            id: 'seoul_24_006',
            name: '남대문로4가',
          },
          {
            id: 'seoul_24_007',
            name: '남대문로5가',
          },
          {
            id: 'seoul_24_008',
            name: '남산동1가',
          },
          {
            id: 'seoul_24_009',
            name: '남산동2가',
          },
          {
            id: 'seoul_24_010',
            name: '남산동3가',
          },
          {
            id: 'seoul_24_011',
            name: '남창동',
          },
          {
            id: 'seoul_24_012',
            name: '남학동',
          },
          {
            id: 'seoul_24_013',
            name: '다동',
          },
          {
            id: 'seoul_24_014',
            name: '도동1가',
          },
          {
            id: 'seoul_24_015',
            name: '도동2가',
          },
          {
            id: 'seoul_24_016',
            name: '동자동',
          },
          {
            id: 'seoul_24_017',
            name: '만리동1가',
          },
          {
            id: 'seoul_24_018',
            name: '만리동2가',
          },
          {
            id: 'seoul_24_019',
            name: '명동1가',
          },
          {
            id: 'seoul_24_020',
            name: '명동2가',
          },
          {
            id: 'seoul_24_021',
            name: '무교동',
          },
          {
            id: 'seoul_24_022',
            name: '무학동',
          },
          {
            id: 'seoul_24_023',
            name: '묵정동',
          },
          {
            id: 'seoul_24_024',
            name: '방산동',
          },
          {
            id: 'seoul_24_025',
            name: '봉래동1가',
          },
          {
            id: 'seoul_24_026',
            name: '봉래동2가',
          },
          {
            id: 'seoul_24_027',
            name: '북창동',
          },
          {
            id: 'seoul_24_028',
            name: '산림동',
          },
          {
            id: 'seoul_24_029',
            name: '삼각동',
          },
          {
            id: 'seoul_24_030',
            name: '서소문동',
          },
          {
            id: 'seoul_24_031',
            name: '소공동',
          },
          {
            id: 'seoul_24_032',
            name: '수표동',
          },
          {
            id: 'seoul_24_033',
            name: '수하동',
          },
          {
            id: 'seoul_24_034',
            name: '순화동',
          },
          {
            id: 'seoul_24_035',
            name: '신당1동',
          },
          {
            id: 'seoul_24_036',
            name: '신당2동',
          },
          {
            id: 'seoul_24_037',
            name: '신당3동',
          },
          {
            id: 'seoul_24_038',
            name: '신당4동',
          },
          {
            id: 'seoul_24_039',
            name: '신당5동',
          },
          {
            id: 'seoul_24_040',
            name: '신당6동',
          },
          {
            id: 'seoul_24_041',
            name: '신당동',
          },
          {
            id: 'seoul_24_042',
            name: '쌍림동',
          },
          {
            id: 'seoul_24_043',
            name: '양동',
          },
          {
            id: 'seoul_24_044',
            name: '예관동',
          },
          {
            id: 'seoul_24_045',
            name: '예장동',
          },
          {
            id: 'seoul_24_046',
            name: '오장동',
          },
          {
            id: 'seoul_24_047',
            name: '을지로1가',
          },
          {
            id: 'seoul_24_048',
            name: '을지로2가',
          },
          {
            id: 'seoul_24_049',
            name: '을지로3가',
          },
          {
            id: 'seoul_24_050',
            name: '을지로4가',
          },
          {
            id: 'seoul_24_051',
            name: '을지로5가',
          },
          {
            id: 'seoul_24_052',
            name: '을지로6가',
          },
          {
            id: 'seoul_24_053',
            name: '을지로7가',
          },
          {
            id: 'seoul_24_054',
            name: '의주로1가',
          },
          {
            id: 'seoul_24_055',
            name: '의주로2가',
          },
          {
            id: 'seoul_24_056',
            name: '인현동1가',
          },
          {
            id: 'seoul_24_057',
            name: '인현동2가',
          },
          {
            id: 'seoul_24_058',
            name: '입정동',
          },
          {
            id: 'seoul_24_059',
            name: '장교동',
          },
          {
            id: 'seoul_24_060',
            name: '장충동1가',
          },
          {
            id: 'seoul_24_061',
            name: '장충동2가',
          },
          {
            id: 'seoul_24_062',
            name: '저동1가',
          },
          {
            id: 'seoul_24_063',
            name: '저동2가',
          },
          {
            id: 'seoul_24_064',
            name: '정동',
          },
          {
            id: 'seoul_24_065',
            name: '주교동',
          },
          {
            id: 'seoul_24_066',
            name: '주자동',
          },
          {
            id: 'seoul_24_067',
            name: '중림동',
          },
          {
            id: 'seoul_24_068',
            name: '초동',
          },
          {
            id: 'seoul_24_069',
            name: '충무로1가',
          },
          {
            id: 'seoul_24_070',
            name: '충무로2가',
          },
          {
            id: 'seoul_24_071',
            name: '충무로3가',
          },
          {
            id: 'seoul_24_072',
            name: '충무로4가',
          },
          {
            id: 'seoul_24_073',
            name: '충무로5가',
          },
          {
            id: 'seoul_24_074',
            name: '충정로1가',
          },
          {
            id: 'seoul_24_075',
            name: '태평로1가',
          },
          {
            id: 'seoul_24_076',
            name: '태평로2가',
          },
          {
            id: 'seoul_24_077',
            name: '필동1가',
          },
          {
            id: 'seoul_24_078',
            name: '필동2가',
          },
          {
            id: 'seoul_24_079',
            name: '필동3가',
          },
          {
            id: 'seoul_24_080',
            name: '황학동',
          },
          {
            id: 'seoul_24_081',
            name: '회현동1가',
          },
          {
            id: 'seoul_24_082',
            name: '회현동2가',
          },
          {
            id: 'seoul_24_083',
            name: '회현동3가',
          },
          {
            id: 'seoul_24_084',
            name: '흥인동',
          },
        ],
      },
      {
        id: 'seoul_25',
        name: '중랑구',
        subregions: [
          {
            id: 'seoul_25_001',
            name: '망우1동',
          },
          {
            id: 'seoul_25_002',
            name: '망우2동',
          },
          {
            id: 'seoul_25_003',
            name: '망우3동',
          },
          {
            id: 'seoul_25_004',
            name: '망우동',
          },
          {
            id: 'seoul_25_005',
            name: '면목1동',
          },
          {
            id: 'seoul_25_006',
            name: '면목2동',
          },
          {
            id: 'seoul_25_007',
            name: '면목3동',
          },
          {
            id: 'seoul_25_008',
            name: '면목4동',
          },
          {
            id: 'seoul_25_009',
            name: '면목5동',
          },
          {
            id: 'seoul_25_010',
            name: '면목6동',
          },
          {
            id: 'seoul_25_011',
            name: '면목7동',
          },
          {
            id: 'seoul_25_012',
            name: '면목동',
          },
          {
            id: 'seoul_25_013',
            name: '묵1동',
          },
          {
            id: 'seoul_25_014',
            name: '묵2동',
          },
          {
            id: 'seoul_25_015',
            name: '묵동',
          },
          {
            id: 'seoul_25_016',
            name: '상봉1동',
          },
          {
            id: 'seoul_25_017',
            name: '상봉2동',
          },
          {
            id: 'seoul_25_018',
            name: '상봉동',
          },
          {
            id: 'seoul_25_019',
            name: '신내동',
          },
          {
            id: 'seoul_25_020',
            name: '중화1동',
          },
          {
            id: 'seoul_25_021',
            name: '중화2동',
          },
          {
            id: 'seoul_25_022',
            name: '중화동',
          },
        ],
      },
    ],
  },
  {
    id: 'gyeonggi',
    name: '경기',
    subregions: [
      {
        id: 'gyeonggi_01',
        name: '가평군',
        subregions: [
          {
            id: 'gyeonggi_01_001',
            name: '가평면',
          },
          {
            id: 'gyeonggi_01_002',
            name: '가평읍',
          },
          {
            id: 'gyeonggi_01_003',
            name: '북면',
          },
          {
            id: 'gyeonggi_01_004',
            name: '상면',
          },
          {
            id: 'gyeonggi_01_005',
            name: '설악면',
          },
          {
            id: 'gyeonggi_01_006',
            name: '외서면',
          },
          {
            id: 'gyeonggi_01_007',
            name: '조종면',
          },
          {
            id: 'gyeonggi_01_008',
            name: '청평면',
          },
          {
            id: 'gyeonggi_01_009',
            name: '하면',
          },
        ],
      },
      {
        id: 'gyeonggi_02',
        name: '강화군',
        subregions: [
          {
            id: 'gyeonggi_02_001',
            name: '강화면',
          },
          {
            id: 'gyeonggi_02_002',
            name: '강화읍',
          },
          {
            id: 'gyeonggi_02_003',
            name: '교동면',
          },
          {
            id: 'gyeonggi_02_004',
            name: '길상면',
          },
          {
            id: 'gyeonggi_02_005',
            name: '내가면',
          },
          {
            id: 'gyeonggi_02_006',
            name: '불은면',
          },
          {
            id: 'gyeonggi_02_007',
            name: '삼산면',
          },
          {
            id: 'gyeonggi_02_008',
            name: '서도면',
          },
          {
            id: 'gyeonggi_02_009',
            name: '선원면',
          },
          {
            id: 'gyeonggi_02_010',
            name: '송해면',
          },
          {
            id: 'gyeonggi_02_011',
            name: '양도면',
          },
          {
            id: 'gyeonggi_02_012',
            name: '양사면',
          },
          {
            id: 'gyeonggi_02_013',
            name: '하점면',
          },
          {
            id: 'gyeonggi_02_014',
            name: '화도면',
          },
        ],
      },
      {
        id: 'gyeonggi_03',
        name: '고양군',
        subregions: [
          {
            id: 'gyeonggi_03_001',
            name: '벽제면',
          },
          {
            id: 'gyeonggi_03_002',
            name: '벽제읍',
          },
          {
            id: 'gyeonggi_03_003',
            name: '송포면',
          },
          {
            id: 'gyeonggi_03_004',
            name: '신도면',
          },
          {
            id: 'gyeonggi_03_005',
            name: '신도읍',
          },
          {
            id: 'gyeonggi_03_006',
            name: '원당면',
          },
          {
            id: 'gyeonggi_03_007',
            name: '원당읍',
          },
          {
            id: 'gyeonggi_03_008',
            name: '일산읍',
          },
          {
            id: 'gyeonggi_03_009',
            name: '중면',
          },
          {
            id: 'gyeonggi_03_010',
            name: '지도면',
          },
          {
            id: 'gyeonggi_03_011',
            name: '지도읍',
          },
          {
            id: 'gyeonggi_03_012',
            name: '화전읍',
          },
        ],
      },
      {
        id: 'gyeonggi_04',
        name: '고양시',
        subregions: [
          {
            id: 'gyeonggi_04_001',
            name: '가좌동',
          },
          {
            id: 'gyeonggi_04_002',
            name: '강매동',
          },
          {
            id: 'gyeonggi_04_003',
            name: '고양동',
          },
          {
            id: 'gyeonggi_04_004',
            name: '관산동',
          },
          {
            id: 'gyeonggi_04_005',
            name: '구산동',
          },
          {
            id: 'gyeonggi_04_006',
            name: '내곡동',
          },
          {
            id: 'gyeonggi_04_007',
            name: '내유동',
          },
          {
            id: 'gyeonggi_04_008',
            name: '대자동',
          },
          {
            id: 'gyeonggi_04_009',
            name: '대장동',
          },
          {
            id: 'gyeonggi_04_010',
            name: '대화동',
          },
          {
            id: 'gyeonggi_04_011',
            name: '덕은동',
          },
          {
            id: 'gyeonggi_04_012',
            name: '덕이동',
          },
          {
            id: 'gyeonggi_04_013',
            name: '도내동',
          },
          {
            id: 'gyeonggi_04_014',
            name: '동산동',
          },
          {
            id: 'gyeonggi_04_015',
            name: '마두동',
          },
          {
            id: 'gyeonggi_04_016',
            name: '문봉동',
          },
          {
            id: 'gyeonggi_04_017',
            name: '백석동',
          },
          {
            id: 'gyeonggi_04_018',
            name: '법곳동',
          },
          {
            id: 'gyeonggi_04_019',
            name: '벽제동',
          },
          {
            id: 'gyeonggi_04_020',
            name: '북한동',
          },
          {
            id: 'gyeonggi_04_021',
            name: '사리현동',
          },
          {
            id: 'gyeonggi_04_022',
            name: '산황동',
          },
          {
            id: 'gyeonggi_04_023',
            name: '삼송동',
          },
          {
            id: 'gyeonggi_04_024',
            name: '선유동',
          },
          {
            id: 'gyeonggi_04_025',
            name: '설문동',
          },
          {
            id: 'gyeonggi_04_026',
            name: '성사동',
          },
          {
            id: 'gyeonggi_04_027',
            name: '성석동',
          },
          {
            id: 'gyeonggi_04_028',
            name: '식사동',
          },
          {
            id: 'gyeonggi_04_029',
            name: '신원동',
          },
          {
            id: 'gyeonggi_04_030',
            name: '신평동',
          },
          {
            id: 'gyeonggi_04_031',
            name: '오금동',
          },
          {
            id: 'gyeonggi_04_032',
            name: '용두동',
          },
          {
            id: 'gyeonggi_04_033',
            name: '원당동',
          },
          {
            id: 'gyeonggi_04_034',
            name: '원흥동',
          },
          {
            id: 'gyeonggi_04_035',
            name: '일산동',
          },
          {
            id: 'gyeonggi_04_036',
            name: '장항동',
          },
          {
            id: 'gyeonggi_04_037',
            name: '주교동',
          },
          {
            id: 'gyeonggi_04_038',
            name: '주엽동',
          },
          {
            id: 'gyeonggi_04_039',
            name: '지영동',
          },
          {
            id: 'gyeonggi_04_040',
            name: '지축동',
          },
          {
            id: 'gyeonggi_04_041',
            name: '탄현동',
          },
          {
            id: 'gyeonggi_04_042',
            name: '토당동',
          },
          {
            id: 'gyeonggi_04_043',
            name: '풍동',
          },
          {
            id: 'gyeonggi_04_044',
            name: '행신동',
          },
          {
            id: 'gyeonggi_04_045',
            name: '행주내동',
          },
          {
            id: 'gyeonggi_04_046',
            name: '행주외동',
          },
          {
            id: 'gyeonggi_04_047',
            name: '향동동',
          },
          {
            id: 'gyeonggi_04_048',
            name: '현천동',
          },
          {
            id: 'gyeonggi_04_049',
            name: '화전동',
          },
          {
            id: 'gyeonggi_04_050',
            name: '화정동',
          },
          {
            id: 'gyeonggi_04_051',
            name: '효자동',
          },
        ],
      },
      {
        id: 'gyeonggi_05',
        name: '고양시 덕양구',
        subregions: [
          {
            id: 'gyeonggi_05_001',
            name: '강매동',
          },
          {
            id: 'gyeonggi_05_002',
            name: '고양동',
          },
          {
            id: 'gyeonggi_05_003',
            name: '관산동',
          },
          {
            id: 'gyeonggi_05_004',
            name: '내곡동',
          },
          {
            id: 'gyeonggi_05_005',
            name: '내유동',
          },
          {
            id: 'gyeonggi_05_006',
            name: '대자동',
          },
          {
            id: 'gyeonggi_05_007',
            name: '대장동',
          },
          {
            id: 'gyeonggi_05_008',
            name: '덕은동',
          },
          {
            id: 'gyeonggi_05_009',
            name: '도내동',
          },
          {
            id: 'gyeonggi_05_010',
            name: '동산동',
          },
          {
            id: 'gyeonggi_05_011',
            name: '벽제동',
          },
          {
            id: 'gyeonggi_05_012',
            name: '북한동',
          },
          {
            id: 'gyeonggi_05_013',
            name: '삼송동',
          },
          {
            id: 'gyeonggi_05_014',
            name: '선유동',
          },
          {
            id: 'gyeonggi_05_015',
            name: '성사동',
          },
          {
            id: 'gyeonggi_05_016',
            name: '신원동',
          },
          {
            id: 'gyeonggi_05_017',
            name: '신평동',
          },
          {
            id: 'gyeonggi_05_018',
            name: '오금동',
          },
          {
            id: 'gyeonggi_05_019',
            name: '용두동',
          },
          {
            id: 'gyeonggi_05_020',
            name: '원당동',
          },
          {
            id: 'gyeonggi_05_021',
            name: '원흥동',
          },
          {
            id: 'gyeonggi_05_022',
            name: '주교동',
          },
          {
            id: 'gyeonggi_05_023',
            name: '지축동',
          },
          {
            id: 'gyeonggi_05_024',
            name: '토당동',
          },
          {
            id: 'gyeonggi_05_025',
            name: '행신동',
          },
          {
            id: 'gyeonggi_05_026',
            name: '행주내동',
          },
          {
            id: 'gyeonggi_05_027',
            name: '행주외동',
          },
          {
            id: 'gyeonggi_05_028',
            name: '향동동',
          },
          {
            id: 'gyeonggi_05_029',
            name: '현천동',
          },
          {
            id: 'gyeonggi_05_030',
            name: '화전동',
          },
          {
            id: 'gyeonggi_05_031',
            name: '화정동',
          },
          {
            id: 'gyeonggi_05_032',
            name: '효자동',
          },
        ],
      },
      {
        id: 'gyeonggi_06',
        name: '고양시 일산구',
        subregions: [
          {
            id: 'gyeonggi_06_001',
            name: '가좌동',
          },
          {
            id: 'gyeonggi_06_002',
            name: '구산동',
          },
          {
            id: 'gyeonggi_06_003',
            name: '대화동',
          },
          {
            id: 'gyeonggi_06_004',
            name: '덕이동',
          },
          {
            id: 'gyeonggi_06_005',
            name: '마두동',
          },
          {
            id: 'gyeonggi_06_006',
            name: '문봉동',
          },
          {
            id: 'gyeonggi_06_007',
            name: '백석동',
          },
          {
            id: 'gyeonggi_06_008',
            name: '법곳동',
          },
          {
            id: 'gyeonggi_06_009',
            name: '사리현동',
          },
          {
            id: 'gyeonggi_06_010',
            name: '산황동',
          },
          {
            id: 'gyeonggi_06_011',
            name: '설문동',
          },
          {
            id: 'gyeonggi_06_012',
            name: '성석동',
          },
          {
            id: 'gyeonggi_06_013',
            name: '식사동',
          },
          {
            id: 'gyeonggi_06_014',
            name: '일산동',
          },
          {
            id: 'gyeonggi_06_015',
            name: '장항동',
          },
          {
            id: 'gyeonggi_06_016',
            name: '주엽동',
          },
          {
            id: 'gyeonggi_06_017',
            name: '지영동',
          },
          {
            id: 'gyeonggi_06_018',
            name: '탄현동',
          },
          {
            id: 'gyeonggi_06_019',
            name: '풍동',
          },
        ],
      },
      {
        id: 'gyeonggi_07',
        name: '고양시 일산동구',
        subregions: [
          {
            id: 'gyeonggi_07_001',
            name: '마두동',
          },
          {
            id: 'gyeonggi_07_002',
            name: '문봉동',
          },
          {
            id: 'gyeonggi_07_003',
            name: '백석동',
          },
          {
            id: 'gyeonggi_07_004',
            name: '사리현동',
          },
          {
            id: 'gyeonggi_07_005',
            name: '산황동',
          },
          {
            id: 'gyeonggi_07_006',
            name: '설문동',
          },
          {
            id: 'gyeonggi_07_007',
            name: '성석동',
          },
          {
            id: 'gyeonggi_07_008',
            name: '식사동',
          },
          {
            id: 'gyeonggi_07_009',
            name: '장항동',
          },
          {
            id: 'gyeonggi_07_010',
            name: '정발산동',
          },
          {
            id: 'gyeonggi_07_011',
            name: '중산동',
          },
          {
            id: 'gyeonggi_07_012',
            name: '지영동',
          },
          {
            id: 'gyeonggi_07_013',
            name: '풍동',
          },
        ],
      },
      {
        id: 'gyeonggi_08',
        name: '고양시 일산서구',
        subregions: [
          {
            id: 'gyeonggi_08_001',
            name: '가좌동',
          },
          {
            id: 'gyeonggi_08_002',
            name: '구산동',
          },
          {
            id: 'gyeonggi_08_003',
            name: '대화동',
          },
          {
            id: 'gyeonggi_08_004',
            name: '덕이동',
          },
          {
            id: 'gyeonggi_08_005',
            name: '법곳동',
          },
          {
            id: 'gyeonggi_08_006',
            name: '일산동',
          },
          {
            id: 'gyeonggi_08_007',
            name: '주엽동',
          },
          {
            id: 'gyeonggi_08_008',
            name: '탄현동',
          },
        ],
      },
      {
        id: 'gyeonggi_09',
        name: '과천시',
        subregions: [
          {
            id: 'gyeonggi_09_001',
            name: '갈현동',
          },
          {
            id: 'gyeonggi_09_002',
            name: '과천동',
          },
          {
            id: 'gyeonggi_09_003',
            name: '관문동',
          },
          {
            id: 'gyeonggi_09_004',
            name: '막계동',
          },
          {
            id: 'gyeonggi_09_005',
            name: '문원동',
          },
          {
            id: 'gyeonggi_09_006',
            name: '별양동',
          },
          {
            id: 'gyeonggi_09_007',
            name: '부림동',
          },
          {
            id: 'gyeonggi_09_008',
            name: '원문동',
          },
          {
            id: 'gyeonggi_09_009',
            name: '주암동',
          },
          {
            id: 'gyeonggi_09_010',
            name: '중앙동',
          },
        ],
      },
      {
        id: 'gyeonggi_10',
        name: '광명시',
        subregions: [
          {
            id: 'gyeonggi_10_001',
            name: '가학동',
          },
          {
            id: 'gyeonggi_10_002',
            name: '광명1동',
          },
          {
            id: 'gyeonggi_10_003',
            name: '광명2동',
          },
          {
            id: 'gyeonggi_10_004',
            name: '광명3동',
          },
          {
            id: 'gyeonggi_10_005',
            name: '광명4동',
          },
          {
            id: 'gyeonggi_10_006',
            name: '광명5동',
          },
          {
            id: 'gyeonggi_10_007',
            name: '광명6동',
          },
          {
            id: 'gyeonggi_10_008',
            name: '광명7동',
          },
          {
            id: 'gyeonggi_10_009',
            name: '광명동',
          },
          {
            id: 'gyeonggi_10_010',
            name: '노온사동',
          },
          {
            id: 'gyeonggi_10_011',
            name: '소하1동',
          },
          {
            id: 'gyeonggi_10_012',
            name: '소하2동',
          },
          {
            id: 'gyeonggi_10_013',
            name: '소하동',
          },
          {
            id: 'gyeonggi_10_014',
            name: '옥길동',
          },
          {
            id: 'gyeonggi_10_015',
            name: '일직동',
          },
          {
            id: 'gyeonggi_10_016',
            name: '철산1동',
          },
          {
            id: 'gyeonggi_10_017',
            name: '철산2동',
          },
          {
            id: 'gyeonggi_10_018',
            name: '철산3동',
          },
          {
            id: 'gyeonggi_10_019',
            name: '철산4동',
          },
          {
            id: 'gyeonggi_10_020',
            name: '철산동',
          },
          {
            id: 'gyeonggi_10_021',
            name: '하안동',
          },
          {
            id: 'gyeonggi_10_022',
            name: '학온동',
          },
        ],
      },
      {
        id: 'gyeonggi_11',
        name: '광주군',
        subregions: [
          {
            id: 'gyeonggi_11_001',
            name: '광주면',
          },
          {
            id: 'gyeonggi_11_002',
            name: '광주읍',
          },
          {
            id: 'gyeonggi_11_003',
            name: '구천면',
          },
          {
            id: 'gyeonggi_11_004',
            name: '낙생면',
          },
          {
            id: 'gyeonggi_11_005',
            name: '남종면',
          },
          {
            id: 'gyeonggi_11_006',
            name: '대왕면',
          },
          {
            id: 'gyeonggi_11_007',
            name: '도척면',
          },
          {
            id: 'gyeonggi_11_008',
            name: '돌마면',
          },
          {
            id: 'gyeonggi_11_009',
            name: '동부면',
          },
          {
            id: 'gyeonggi_11_010',
            name: '동부읍',
          },
          {
            id: 'gyeonggi_11_011',
            name: '서부면',
          },
          {
            id: 'gyeonggi_11_012',
            name: '실촌면',
          },
          {
            id: 'gyeonggi_11_013',
            name: '언주면',
          },
          {
            id: 'gyeonggi_11_014',
            name: '오포면',
          },
          {
            id: 'gyeonggi_11_015',
            name: '중대면',
          },
          {
            id: 'gyeonggi_11_016',
            name: '중부면',
          },
          {
            id: 'gyeonggi_11_017',
            name: '초월면',
          },
          {
            id: 'gyeonggi_11_018',
            name: '퇴촌면',
          },
        ],
      },
      {
        id: 'gyeonggi_12',
        name: '광주시',
        subregions: [
          {
            id: 'gyeonggi_12_001',
            name: '경안동',
          },
          {
            id: 'gyeonggi_12_002',
            name: '고산동',
          },
          {
            id: 'gyeonggi_12_003',
            name: '곤지암읍',
          },
          {
            id: 'gyeonggi_12_004',
            name: '남종면',
          },
          {
            id: 'gyeonggi_12_005',
            name: '남한산성면',
          },
          {
            id: 'gyeonggi_12_006',
            name: '능평동',
          },
          {
            id: 'gyeonggi_12_007',
            name: '도척면',
          },
          {
            id: 'gyeonggi_12_008',
            name: '매산동',
          },
          {
            id: 'gyeonggi_12_009',
            name: '목동',
          },
          {
            id: 'gyeonggi_12_010',
            name: '목현동',
          },
          {
            id: 'gyeonggi_12_011',
            name: '문형동',
          },
          {
            id: 'gyeonggi_12_012',
            name: '삼동',
          },
          {
            id: 'gyeonggi_12_013',
            name: '송정동',
          },
          {
            id: 'gyeonggi_12_014',
            name: '신현동',
          },
          {
            id: 'gyeonggi_12_015',
            name: '실촌면',
          },
          {
            id: 'gyeonggi_12_016',
            name: '실촌읍',
          },
          {
            id: 'gyeonggi_12_017',
            name: '쌍령동',
          },
          {
            id: 'gyeonggi_12_018',
            name: '양벌동',
          },
          {
            id: 'gyeonggi_12_019',
            name: '역동',
          },
          {
            id: 'gyeonggi_12_020',
            name: '오포읍',
          },
          {
            id: 'gyeonggi_12_021',
            name: '장지동',
          },
          {
            id: 'gyeonggi_12_022',
            name: '중대동',
          },
          {
            id: 'gyeonggi_12_023',
            name: '중부면',
          },
          {
            id: 'gyeonggi_12_024',
            name: '직동',
          },
          {
            id: 'gyeonggi_12_025',
            name: '초월면',
          },
          {
            id: 'gyeonggi_12_026',
            name: '초월읍',
          },
          {
            id: 'gyeonggi_12_027',
            name: '추자동',
          },
          {
            id: 'gyeonggi_12_028',
            name: '탄벌동',
          },
          {
            id: 'gyeonggi_12_029',
            name: '태전동',
          },
          {
            id: 'gyeonggi_12_030',
            name: '퇴촌면',
          },
          {
            id: 'gyeonggi_12_031',
            name: '회덕동',
          },
        ],
      },
      {
        id: 'gyeonggi_13',
        name: '구리시',
        subregions: [
          {
            id: 'gyeonggi_13_001',
            name: '갈매동',
          },
          {
            id: 'gyeonggi_13_002',
            name: '교문동',
          },
          {
            id: 'gyeonggi_13_003',
            name: '동구동',
          },
          {
            id: 'gyeonggi_13_004',
            name: '사노동',
          },
          {
            id: 'gyeonggi_13_005',
            name: '수택동',
          },
          {
            id: 'gyeonggi_13_006',
            name: '수평동',
          },
          {
            id: 'gyeonggi_13_007',
            name: '아천동',
          },
          {
            id: 'gyeonggi_13_008',
            name: '인창동',
          },
          {
            id: 'gyeonggi_13_009',
            name: '토평동',
          },
        ],
      },
      {
        id: 'gyeonggi_14',
        name: '군포시',
        subregions: [
          {
            id: 'gyeonggi_14_001',
            name: '군포1동',
          },
          {
            id: 'gyeonggi_14_002',
            name: '군포2동',
          },
          {
            id: 'gyeonggi_14_003',
            name: '금정동',
          },
          {
            id: 'gyeonggi_14_004',
            name: '당동',
          },
          {
            id: 'gyeonggi_14_005',
            name: '당정동',
          },
          {
            id: 'gyeonggi_14_006',
            name: '대야미동',
          },
          {
            id: 'gyeonggi_14_007',
            name: '도마교동',
          },
          {
            id: 'gyeonggi_14_008',
            name: '둔대동',
          },
          {
            id: 'gyeonggi_14_009',
            name: '부곡동',
          },
          {
            id: 'gyeonggi_14_010',
            name: '산본1동',
          },
          {
            id: 'gyeonggi_14_011',
            name: '산본2동',
          },
          {
            id: 'gyeonggi_14_012',
            name: '산본동',
          },
          {
            id: 'gyeonggi_14_013',
            name: '속달동',
          },
        ],
      },
      {
        id: 'gyeonggi_15',
        name: '김포군',
        subregions: [
          {
            id: 'gyeonggi_15_001',
            name: '검단면',
          },
          {
            id: 'gyeonggi_15_002',
            name: '계양면',
          },
          {
            id: 'gyeonggi_15_003',
            name: '고촌면',
          },
          {
            id: 'gyeonggi_15_004',
            name: '김포면',
          },
          {
            id: 'gyeonggi_15_005',
            name: '김포읍',
          },
          {
            id: 'gyeonggi_15_006',
            name: '대곳면',
          },
          {
            id: 'gyeonggi_15_007',
            name: '대곶면',
          },
          {
            id: 'gyeonggi_15_008',
            name: '양동면',
          },
          {
            id: 'gyeonggi_15_009',
            name: '양서면',
          },
          {
            id: 'gyeonggi_15_010',
            name: '양촌면',
          },
          {
            id: 'gyeonggi_15_011',
            name: '오정면',
          },
          {
            id: 'gyeonggi_15_012',
            name: '월곳면',
          },
          {
            id: 'gyeonggi_15_013',
            name: '월곶면',
          },
          {
            id: 'gyeonggi_15_014',
            name: '통진면',
          },
          {
            id: 'gyeonggi_15_015',
            name: '하성면',
          },
        ],
      },
      {
        id: 'gyeonggi_16',
        name: '김포시',
        subregions: [
          {
            id: 'gyeonggi_16_001',
            name: '감정동',
          },
          {
            id: 'gyeonggi_16_002',
            name: '걸포동',
          },
          {
            id: 'gyeonggi_16_003',
            name: '고촌면',
          },
          {
            id: 'gyeonggi_16_004',
            name: '고촌읍',
          },
          {
            id: 'gyeonggi_16_005',
            name: '구래동',
          },
          {
            id: 'gyeonggi_16_006',
            name: '대곶면',
          },
          {
            id: 'gyeonggi_16_007',
            name: '마산동',
          },
          {
            id: 'gyeonggi_16_008',
            name: '북변동',
          },
          {
            id: 'gyeonggi_16_009',
            name: '사우동',
          },
          {
            id: 'gyeonggi_16_010',
            name: '양촌면',
          },
          {
            id: 'gyeonggi_16_011',
            name: '양촌읍',
          },
          {
            id: 'gyeonggi_16_012',
            name: '운양동',
          },
          {
            id: 'gyeonggi_16_013',
            name: '월곶면',
          },
          {
            id: 'gyeonggi_16_014',
            name: '장기동',
          },
          {
            id: 'gyeonggi_16_015',
            name: '통진면',
          },
          {
            id: 'gyeonggi_16_016',
            name: '통진읍',
          },
          {
            id: 'gyeonggi_16_017',
            name: '풍무동',
          },
          {
            id: 'gyeonggi_16_018',
            name: '하성면',
          },
        ],
      },
      {
        id: 'gyeonggi_17',
        name: '남양주군',
        subregions: [
          {
            id: 'gyeonggi_17_001',
            name: '구리읍',
          },
          {
            id: 'gyeonggi_17_002',
            name: '미금읍',
          },
          {
            id: 'gyeonggi_17_003',
            name: '별내면',
          },
          {
            id: 'gyeonggi_17_004',
            name: '수동면',
          },
          {
            id: 'gyeonggi_17_005',
            name: '와부면',
          },
          {
            id: 'gyeonggi_17_006',
            name: '와부읍',
          },
          {
            id: 'gyeonggi_17_007',
            name: '조안면',
          },
          {
            id: 'gyeonggi_17_008',
            name: '진건면',
          },
          {
            id: 'gyeonggi_17_009',
            name: '진접면',
          },
          {
            id: 'gyeonggi_17_010',
            name: '진접읍',
          },
          {
            id: 'gyeonggi_17_011',
            name: '퇴계원면',
          },
          {
            id: 'gyeonggi_17_012',
            name: '화도면',
          },
          {
            id: 'gyeonggi_17_013',
            name: '화도읍',
          },
        ],
      },
      {
        id: 'gyeonggi_18',
        name: '남양주시',
        subregions: [
          {
            id: 'gyeonggi_18_001',
            name: '가운동',
          },
          {
            id: 'gyeonggi_18_002',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_18_003',
            name: '다산동',
          },
          {
            id: 'gyeonggi_18_004',
            name: '도농동',
          },
          {
            id: 'gyeonggi_18_005',
            name: '별내동',
          },
          {
            id: 'gyeonggi_18_006',
            name: '별내면',
          },
          {
            id: 'gyeonggi_18_007',
            name: '삼패동',
          },
          {
            id: 'gyeonggi_18_008',
            name: '수동면',
          },
          {
            id: 'gyeonggi_18_009',
            name: '수석동',
          },
          {
            id: 'gyeonggi_18_010',
            name: '오남면',
          },
          {
            id: 'gyeonggi_18_011',
            name: '오남읍',
          },
          {
            id: 'gyeonggi_18_012',
            name: '와부읍',
          },
          {
            id: 'gyeonggi_18_013',
            name: '이패동',
          },
          {
            id: 'gyeonggi_18_014',
            name: '일패동',
          },
          {
            id: 'gyeonggi_18_015',
            name: '조안면',
          },
          {
            id: 'gyeonggi_18_016',
            name: '지금동',
          },
          {
            id: 'gyeonggi_18_017',
            name: '진건면',
          },
          {
            id: 'gyeonggi_18_018',
            name: '진건읍',
          },
          {
            id: 'gyeonggi_18_019',
            name: '진접읍',
          },
          {
            id: 'gyeonggi_18_020',
            name: '퇴계원면',
          },
          {
            id: 'gyeonggi_18_021',
            name: '퇴계원읍',
          },
          {
            id: 'gyeonggi_18_022',
            name: '평내동',
          },
          {
            id: 'gyeonggi_18_023',
            name: '호평동',
          },
          {
            id: 'gyeonggi_18_024',
            name: '화도읍',
          },
        ],
      },
      {
        id: 'gyeonggi_19',
        name: '동두천시',
        subregions: [
          {
            id: 'gyeonggi_19_001',
            name: '걸산동',
          },
          {
            id: 'gyeonggi_19_002',
            name: '광암동',
          },
          {
            id: 'gyeonggi_19_003',
            name: '내행동',
          },
          {
            id: 'gyeonggi_19_004',
            name: '동두천동',
          },
          {
            id: 'gyeonggi_19_005',
            name: '동안동',
          },
          {
            id: 'gyeonggi_19_006',
            name: '보산동',
          },
          {
            id: 'gyeonggi_19_007',
            name: '상봉암동',
          },
          {
            id: 'gyeonggi_19_008',
            name: '상패동',
          },
          {
            id: 'gyeonggi_19_009',
            name: '생연1동',
          },
          {
            id: 'gyeonggi_19_010',
            name: '생연2동',
          },
          {
            id: 'gyeonggi_19_011',
            name: '생연3동',
          },
          {
            id: 'gyeonggi_19_012',
            name: '생연4동',
          },
          {
            id: 'gyeonggi_19_013',
            name: '생연동',
          },
          {
            id: 'gyeonggi_19_014',
            name: '소요동',
          },
          {
            id: 'gyeonggi_19_015',
            name: '송내동',
          },
          {
            id: 'gyeonggi_19_016',
            name: '안흥동',
          },
          {
            id: 'gyeonggi_19_017',
            name: '지행동',
          },
          {
            id: 'gyeonggi_19_018',
            name: '탑동동',
          },
          {
            id: 'gyeonggi_19_019',
            name: '하봉암동',
          },
        ],
      },
      {
        id: 'gyeonggi_20',
        name: '미금시',
        subregions: [
          {
            id: 'gyeonggi_20_001',
            name: '가운동',
          },
          {
            id: 'gyeonggi_20_002',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_20_003',
            name: '도농동',
          },
          {
            id: 'gyeonggi_20_004',
            name: '삼패동',
          },
          {
            id: 'gyeonggi_20_005',
            name: '수석동',
          },
          {
            id: 'gyeonggi_20_006',
            name: '양정동',
          },
          {
            id: 'gyeonggi_20_007',
            name: '이패동',
          },
          {
            id: 'gyeonggi_20_008',
            name: '일패동',
          },
          {
            id: 'gyeonggi_20_009',
            name: '지금동',
          },
          {
            id: 'gyeonggi_20_010',
            name: '평내동',
          },
          {
            id: 'gyeonggi_20_011',
            name: '호평동',
          },
        ],
      },
      {
        id: 'gyeonggi_21',
        name: '부천군',
        subregions: [
          {
            id: 'gyeonggi_21_001',
            name: '계양면',
          },
          {
            id: 'gyeonggi_21_002',
            name: '대부면',
          },
          {
            id: 'gyeonggi_21_003',
            name: '덕적면',
          },
          {
            id: 'gyeonggi_21_004',
            name: '북도면',
          },
          {
            id: 'gyeonggi_21_005',
            name: '소래면',
          },
          {
            id: 'gyeonggi_21_006',
            name: '소사읍',
          },
          {
            id: 'gyeonggi_21_007',
            name: '영종면',
          },
          {
            id: 'gyeonggi_21_008',
            name: '영흥면',
          },
          {
            id: 'gyeonggi_21_009',
            name: '오정면',
          },
          {
            id: 'gyeonggi_21_010',
            name: '용유면',
          },
        ],
      },
      {
        id: 'gyeonggi_22',
        name: '부천시',
        subregions: [
          {
            id: 'gyeonggi_22_001',
            name: '계수동',
          },
          {
            id: 'gyeonggi_22_002',
            name: '고강동',
          },
          {
            id: 'gyeonggi_22_003',
            name: '괴안동',
          },
          {
            id: 'gyeonggi_22_004',
            name: '내동',
          },
          {
            id: 'gyeonggi_22_005',
            name: '대장동',
          },
          {
            id: 'gyeonggi_22_006',
            name: '도당동',
          },
          {
            id: 'gyeonggi_22_007',
            name: '범박동',
          },
          {
            id: 'gyeonggi_22_008',
            name: '삼정동',
          },
          {
            id: 'gyeonggi_22_009',
            name: '상동',
          },
          {
            id: 'gyeonggi_22_010',
            name: '소사동',
          },
          {
            id: 'gyeonggi_22_011',
            name: '소사본동',
          },
          {
            id: 'gyeonggi_22_012',
            name: '송내동',
          },
          {
            id: 'gyeonggi_22_013',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_22_014',
            name: '심곡본동',
          },
          {
            id: 'gyeonggi_22_015',
            name: '약대동',
          },
          {
            id: 'gyeonggi_22_016',
            name: '여월동',
          },
          {
            id: 'gyeonggi_22_017',
            name: '역곡동',
          },
          {
            id: 'gyeonggi_22_018',
            name: '오정동',
          },
          {
            id: 'gyeonggi_22_019',
            name: '옥길동',
          },
          {
            id: 'gyeonggi_22_020',
            name: '원미동',
          },
          {
            id: 'gyeonggi_22_021',
            name: '원종동',
          },
          {
            id: 'gyeonggi_22_022',
            name: '작동',
          },
          {
            id: 'gyeonggi_22_023',
            name: '중동',
          },
          {
            id: 'gyeonggi_22_024',
            name: '춘의동',
          },
        ],
      },
      {
        id: 'gyeonggi_23',
        name: '부천시 남구',
        subregions: [
          {
            id: 'gyeonggi_23_001',
            name: '계수동',
          },
          {
            id: 'gyeonggi_23_002',
            name: '괴안동',
          },
          {
            id: 'gyeonggi_23_003',
            name: '범박동',
          },
          {
            id: 'gyeonggi_23_004',
            name: '상동',
          },
          {
            id: 'gyeonggi_23_005',
            name: '소사1동',
          },
          {
            id: 'gyeonggi_23_006',
            name: '소사2동',
          },
          {
            id: 'gyeonggi_23_007',
            name: '소사3동',
          },
          {
            id: 'gyeonggi_23_008',
            name: '소사동',
          },
          {
            id: 'gyeonggi_23_009',
            name: '송내동',
          },
          {
            id: 'gyeonggi_23_010',
            name: '심곡1동',
          },
          {
            id: 'gyeonggi_23_011',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_23_012',
            name: '역곡1동',
          },
          {
            id: 'gyeonggi_23_013',
            name: '역곡2동',
          },
          {
            id: 'gyeonggi_23_014',
            name: '역곡동',
          },
          {
            id: 'gyeonggi_23_015',
            name: '옥길동',
          },
          {
            id: 'gyeonggi_23_016',
            name: '중동',
          },
        ],
      },
      {
        id: 'gyeonggi_24',
        name: '부천시 소사구',
        subregions: [
          {
            id: 'gyeonggi_24_001',
            name: '계수동',
          },
          {
            id: 'gyeonggi_24_002',
            name: '괴안동',
          },
          {
            id: 'gyeonggi_24_003',
            name: '범박동',
          },
          {
            id: 'gyeonggi_24_004',
            name: '소사동',
          },
          {
            id: 'gyeonggi_24_005',
            name: '소사본동',
          },
          {
            id: 'gyeonggi_24_006',
            name: '송내동',
          },
          {
            id: 'gyeonggi_24_007',
            name: '심곡본동',
          },
          {
            id: 'gyeonggi_24_008',
            name: '옥길동',
          },
        ],
      },
      {
        id: 'gyeonggi_25',
        name: '부천시 오정구',
        subregions: [
          {
            id: 'gyeonggi_25_001',
            name: '고강동',
          },
          {
            id: 'gyeonggi_25_002',
            name: '내동',
          },
          {
            id: 'gyeonggi_25_003',
            name: '대장동',
          },
          {
            id: 'gyeonggi_25_004',
            name: '삼정동',
          },
          {
            id: 'gyeonggi_25_005',
            name: '여월동',
          },
          {
            id: 'gyeonggi_25_006',
            name: '오정동',
          },
          {
            id: 'gyeonggi_25_007',
            name: '원종동',
          },
          {
            id: 'gyeonggi_25_008',
            name: '작동',
          },
        ],
      },
      {
        id: 'gyeonggi_26',
        name: '부천시 원미구',
        subregions: [
          {
            id: 'gyeonggi_26_001',
            name: '도당동',
          },
          {
            id: 'gyeonggi_26_002',
            name: '상동',
          },
          {
            id: 'gyeonggi_26_003',
            name: '소사동',
          },
          {
            id: 'gyeonggi_26_004',
            name: '송내동',
          },
          {
            id: 'gyeonggi_26_005',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_26_006',
            name: '약대동',
          },
          {
            id: 'gyeonggi_26_007',
            name: '여월동',
          },
          {
            id: 'gyeonggi_26_008',
            name: '역곡동',
          },
          {
            id: 'gyeonggi_26_009',
            name: '원미동',
          },
          {
            id: 'gyeonggi_26_010',
            name: '작동',
          },
          {
            id: 'gyeonggi_26_011',
            name: '중동',
          },
          {
            id: 'gyeonggi_26_012',
            name: '춘의동',
          },
        ],
      },
      {
        id: 'gyeonggi_27',
        name: '부천시 중구',
        subregions: [
          {
            id: 'gyeonggi_27_001',
            name: '고강동',
          },
          {
            id: 'gyeonggi_27_002',
            name: '내동',
          },
          {
            id: 'gyeonggi_27_003',
            name: '대장동',
          },
          {
            id: 'gyeonggi_27_004',
            name: '도당동',
          },
          {
            id: 'gyeonggi_27_005',
            name: '삼정동',
          },
          {
            id: 'gyeonggi_27_006',
            name: '성곡동',
          },
          {
            id: 'gyeonggi_27_007',
            name: '성지동',
          },
          {
            id: 'gyeonggi_27_008',
            name: '신흥1동',
          },
          {
            id: 'gyeonggi_27_009',
            name: '신흥2동',
          },
          {
            id: 'gyeonggi_27_010',
            name: '심곡2동',
          },
          {
            id: 'gyeonggi_27_011',
            name: '심곡3동',
          },
          {
            id: 'gyeonggi_27_012',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_27_013',
            name: '약대동',
          },
          {
            id: 'gyeonggi_27_014',
            name: '여월동',
          },
          {
            id: 'gyeonggi_27_015',
            name: '오정동',
          },
          {
            id: 'gyeonggi_27_016',
            name: '원미1동',
          },
          {
            id: 'gyeonggi_27_017',
            name: '원미2동',
          },
          {
            id: 'gyeonggi_27_018',
            name: '원미동',
          },
          {
            id: 'gyeonggi_27_019',
            name: '원종동',
          },
          {
            id: 'gyeonggi_27_020',
            name: '작동',
          },
          {
            id: 'gyeonggi_27_021',
            name: '중동',
          },
          {
            id: 'gyeonggi_27_022',
            name: '춘의동',
          },
        ],
      },
      {
        id: 'gyeonggi_28',
        name: '성남시',
        subregions: [
          {
            id: 'gyeonggi_28_001',
            name: '갈현동',
          },
          {
            id: 'gyeonggi_28_002',
            name: '고등동',
          },
          {
            id: 'gyeonggi_28_003',
            name: '구미동',
          },
          {
            id: 'gyeonggi_28_004',
            name: '궁내동',
          },
          {
            id: 'gyeonggi_28_005',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_28_006',
            name: '금토동',
          },
          {
            id: 'gyeonggi_28_007',
            name: '단대1동',
          },
          {
            id: 'gyeonggi_28_008',
            name: '단대2동',
          },
          {
            id: 'gyeonggi_28_009',
            name: '단대3동',
          },
          {
            id: 'gyeonggi_28_010',
            name: '단대4동',
          },
          {
            id: 'gyeonggi_28_011',
            name: '단대동',
          },
          {
            id: 'gyeonggi_28_012',
            name: '대장동',
          },
          {
            id: 'gyeonggi_28_013',
            name: '도촌동',
          },
          {
            id: 'gyeonggi_28_014',
            name: '동원동',
          },
          {
            id: 'gyeonggi_28_015',
            name: '둔전동',
          },
          {
            id: 'gyeonggi_28_016',
            name: '백현동',
          },
          {
            id: 'gyeonggi_28_017',
            name: '복정동',
          },
          {
            id: 'gyeonggi_28_018',
            name: '분당동',
          },
          {
            id: 'gyeonggi_28_019',
            name: '사송동',
          },
          {
            id: 'gyeonggi_28_020',
            name: '삼평동',
          },
          {
            id: 'gyeonggi_28_021',
            name: '상대원1동',
          },
          {
            id: 'gyeonggi_28_022',
            name: '상대원2동',
          },
          {
            id: 'gyeonggi_28_023',
            name: '상대원3동',
          },
          {
            id: 'gyeonggi_28_024',
            name: '상대원동',
          },
          {
            id: 'gyeonggi_28_025',
            name: '상적동',
          },
          {
            id: 'gyeonggi_28_026',
            name: '서현동',
          },
          {
            id: 'gyeonggi_28_027',
            name: '석운동',
          },
          {
            id: 'gyeonggi_28_028',
            name: '성남동',
          },
          {
            id: 'gyeonggi_28_029',
            name: '수내동',
          },
          {
            id: 'gyeonggi_28_030',
            name: '수진1동',
          },
          {
            id: 'gyeonggi_28_031',
            name: '수진2동',
          },
          {
            id: 'gyeonggi_28_032',
            name: '수진동',
          },
          {
            id: 'gyeonggi_28_033',
            name: '시흥동',
          },
          {
            id: 'gyeonggi_28_034',
            name: '신촌동',
          },
          {
            id: 'gyeonggi_28_035',
            name: '신흥1동',
          },
          {
            id: 'gyeonggi_28_036',
            name: '신흥2동',
          },
          {
            id: 'gyeonggi_28_037',
            name: '신흥3동',
          },
          {
            id: 'gyeonggi_28_038',
            name: '신흥동',
          },
          {
            id: 'gyeonggi_28_039',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_28_040',
            name: '야탑동',
          },
          {
            id: 'gyeonggi_28_041',
            name: '여수동',
          },
          {
            id: 'gyeonggi_28_042',
            name: '오야동',
          },
          {
            id: 'gyeonggi_28_043',
            name: '운중동',
          },
          {
            id: 'gyeonggi_28_044',
            name: '율동',
          },
          {
            id: 'gyeonggi_28_045',
            name: '은행1동',
          },
          {
            id: 'gyeonggi_28_046',
            name: '은행2동',
          },
          {
            id: 'gyeonggi_28_047',
            name: '은행동',
          },
          {
            id: 'gyeonggi_28_048',
            name: '이매동',
          },
          {
            id: 'gyeonggi_28_049',
            name: '정자동',
          },
          {
            id: 'gyeonggi_28_050',
            name: '중동',
          },
          {
            id: 'gyeonggi_28_051',
            name: '창곡동',
          },
          {
            id: 'gyeonggi_28_052',
            name: '태평1동',
          },
          {
            id: 'gyeonggi_28_053',
            name: '태평2동',
          },
          {
            id: 'gyeonggi_28_054',
            name: '태평3동',
          },
          {
            id: 'gyeonggi_28_055',
            name: '태평동',
          },
          {
            id: 'gyeonggi_28_056',
            name: '판교동',
          },
          {
            id: 'gyeonggi_28_057',
            name: '하대원동',
          },
          {
            id: 'gyeonggi_28_058',
            name: '하산운동',
          },
        ],
      },
      {
        id: 'gyeonggi_29',
        name: '성남시 분당구',
        subregions: [
          {
            id: 'gyeonggi_29_001',
            name: '구미동',
          },
          {
            id: 'gyeonggi_29_002',
            name: '궁내동',
          },
          {
            id: 'gyeonggi_29_003',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_29_004',
            name: '대장동',
          },
          {
            id: 'gyeonggi_29_005',
            name: '동원동',
          },
          {
            id: 'gyeonggi_29_006',
            name: '백현동',
          },
          {
            id: 'gyeonggi_29_007',
            name: '분당동',
          },
          {
            id: 'gyeonggi_29_008',
            name: '삼평동',
          },
          {
            id: 'gyeonggi_29_009',
            name: '서현동',
          },
          {
            id: 'gyeonggi_29_010',
            name: '석운동',
          },
          {
            id: 'gyeonggi_29_011',
            name: '수내동',
          },
          {
            id: 'gyeonggi_29_012',
            name: '야탑동',
          },
          {
            id: 'gyeonggi_29_013',
            name: '운중동',
          },
          {
            id: 'gyeonggi_29_014',
            name: '율동',
          },
          {
            id: 'gyeonggi_29_015',
            name: '이매동',
          },
          {
            id: 'gyeonggi_29_016',
            name: '정자동',
          },
          {
            id: 'gyeonggi_29_017',
            name: '판교동',
          },
          {
            id: 'gyeonggi_29_018',
            name: '하산운동',
          },
        ],
      },
      {
        id: 'gyeonggi_30',
        name: '성남시 수정구',
        subregions: [
          {
            id: 'gyeonggi_30_001',
            name: '고등동',
          },
          {
            id: 'gyeonggi_30_002',
            name: '금토동',
          },
          {
            id: 'gyeonggi_30_003',
            name: '단대동',
          },
          {
            id: 'gyeonggi_30_004',
            name: '둔전동',
          },
          {
            id: 'gyeonggi_30_005',
            name: '복정동',
          },
          {
            id: 'gyeonggi_30_006',
            name: '사송동',
          },
          {
            id: 'gyeonggi_30_007',
            name: '산성동',
          },
          {
            id: 'gyeonggi_30_008',
            name: '상적동',
          },
          {
            id: 'gyeonggi_30_009',
            name: '수진동',
          },
          {
            id: 'gyeonggi_30_010',
            name: '시흥동',
          },
          {
            id: 'gyeonggi_30_011',
            name: '신촌동',
          },
          {
            id: 'gyeonggi_30_012',
            name: '신흥동',
          },
          {
            id: 'gyeonggi_30_013',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_30_014',
            name: '양지동',
          },
          {
            id: 'gyeonggi_30_015',
            name: '오야동',
          },
          {
            id: 'gyeonggi_30_016',
            name: '창곡동',
          },
          {
            id: 'gyeonggi_30_017',
            name: '태평동',
          },
        ],
      },
      {
        id: 'gyeonggi_31',
        name: '성남시 중원구',
        subregions: [
          {
            id: 'gyeonggi_31_001',
            name: '갈현동',
          },
          {
            id: 'gyeonggi_31_002',
            name: '구미동',
          },
          {
            id: 'gyeonggi_31_003',
            name: '궁내동',
          },
          {
            id: 'gyeonggi_31_004',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_31_005',
            name: '금광동',
          },
          {
            id: 'gyeonggi_31_006',
            name: '대장동',
          },
          {
            id: 'gyeonggi_31_007',
            name: '도촌동',
          },
          {
            id: 'gyeonggi_31_008',
            name: '동원동',
          },
          {
            id: 'gyeonggi_31_009',
            name: '백현동',
          },
          {
            id: 'gyeonggi_31_010',
            name: '분당동',
          },
          {
            id: 'gyeonggi_31_011',
            name: '삼평동',
          },
          {
            id: 'gyeonggi_31_012',
            name: '상대원동',
          },
          {
            id: 'gyeonggi_31_013',
            name: '서현동',
          },
          {
            id: 'gyeonggi_31_014',
            name: '석운동',
          },
          {
            id: 'gyeonggi_31_015',
            name: '성남동',
          },
          {
            id: 'gyeonggi_31_016',
            name: '수내동',
          },
          {
            id: 'gyeonggi_31_017',
            name: '야탑동',
          },
          {
            id: 'gyeonggi_31_018',
            name: '여수동',
          },
          {
            id: 'gyeonggi_31_019',
            name: '운중동',
          },
          {
            id: 'gyeonggi_31_020',
            name: '율동',
          },
          {
            id: 'gyeonggi_31_021',
            name: '은행동',
          },
          {
            id: 'gyeonggi_31_022',
            name: '이매동',
          },
          {
            id: 'gyeonggi_31_023',
            name: '정자동',
          },
          {
            id: 'gyeonggi_31_024',
            name: '중동',
          },
          {
            id: 'gyeonggi_31_025',
            name: '중앙동',
          },
          {
            id: 'gyeonggi_31_026',
            name: '판교동',
          },
          {
            id: 'gyeonggi_31_027',
            name: '하대원동',
          },
          {
            id: 'gyeonggi_31_028',
            name: '하산운동',
          },
        ],
      },
      {
        id: 'gyeonggi_32',
        name: '송탄시',
        subregions: [
          {
            id: 'gyeonggi_32_001',
            name: '가재동',
          },
          {
            id: 'gyeonggi_32_002',
            name: '도원동',
          },
          {
            id: 'gyeonggi_32_003',
            name: '도일동',
          },
          {
            id: 'gyeonggi_32_004',
            name: '독곡동',
          },
          {
            id: 'gyeonggi_32_005',
            name: '동부동',
          },
          {
            id: 'gyeonggi_32_006',
            name: '모곡동',
          },
          {
            id: 'gyeonggi_32_007',
            name: '서정동',
          },
          {
            id: 'gyeonggi_32_008',
            name: '송북동',
          },
          {
            id: 'gyeonggi_32_009',
            name: '신장1동',
          },
          {
            id: 'gyeonggi_32_010',
            name: '신장2동',
          },
          {
            id: 'gyeonggi_32_011',
            name: '신장동',
          },
          {
            id: 'gyeonggi_32_012',
            name: '이충동',
          },
          {
            id: 'gyeonggi_32_013',
            name: '장당동',
          },
          {
            id: 'gyeonggi_32_014',
            name: '장안동',
          },
          {
            id: 'gyeonggi_32_015',
            name: '중앙동',
          },
          {
            id: 'gyeonggi_32_016',
            name: '지산동',
          },
          {
            id: 'gyeonggi_32_017',
            name: '칠괴동',
          },
          {
            id: 'gyeonggi_32_018',
            name: '칠원동',
          },
        ],
      },
      {
        id: 'gyeonggi_33',
        name: '수원시',
        subregions: [
          {
            id: 'gyeonggi_33_001',
            name: '고등동',
          },
          {
            id: 'gyeonggi_33_002',
            name: '고색동',
          },
          {
            id: 'gyeonggi_33_003',
            name: '곡반정동',
          },
          {
            id: 'gyeonggi_33_004',
            name: '곡선동',
          },
          {
            id: 'gyeonggi_33_005',
            name: '교동',
          },
          {
            id: 'gyeonggi_33_006',
            name: '구운동',
          },
          {
            id: 'gyeonggi_33_007',
            name: '구천동',
          },
          {
            id: 'gyeonggi_33_008',
            name: '권선동',
          },
          {
            id: 'gyeonggi_33_009',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_33_010',
            name: '남수동',
          },
          {
            id: 'gyeonggi_33_011',
            name: '남창동',
          },
          {
            id: 'gyeonggi_33_012',
            name: '남향동',
          },
          {
            id: 'gyeonggi_33_013',
            name: '대황교동',
          },
          {
            id: 'gyeonggi_33_014',
            name: '매교동',
          },
          {
            id: 'gyeonggi_33_015',
            name: '매산동',
          },
          {
            id: 'gyeonggi_33_016',
            name: '매산로1가',
          },
          {
            id: 'gyeonggi_33_017',
            name: '매산로2가',
          },
          {
            id: 'gyeonggi_33_018',
            name: '매산로3가',
          },
          {
            id: 'gyeonggi_33_019',
            name: '매탄동',
          },
          {
            id: 'gyeonggi_33_020',
            name: '매향동',
          },
          {
            id: 'gyeonggi_33_021',
            name: '반정동',
          },
          {
            id: 'gyeonggi_33_022',
            name: '북수동',
          },
          {
            id: 'gyeonggi_33_023',
            name: '상광교동',
          },
          {
            id: 'gyeonggi_33_024',
            name: '서둔동',
          },
          {
            id: 'gyeonggi_33_025',
            name: '세류1동',
          },
          {
            id: 'gyeonggi_33_026',
            name: '세류2동',
          },
          {
            id: 'gyeonggi_33_027',
            name: '세류3동',
          },
          {
            id: 'gyeonggi_33_028',
            name: '세류동',
          },
          {
            id: 'gyeonggi_33_029',
            name: '송원동',
          },
          {
            id: 'gyeonggi_33_030',
            name: '송죽동',
          },
          {
            id: 'gyeonggi_33_031',
            name: '신안동',
          },
          {
            id: 'gyeonggi_33_032',
            name: '신풍동',
          },
          {
            id: 'gyeonggi_33_033',
            name: '연무동',
          },
          {
            id: 'gyeonggi_33_034',
            name: '영동',
          },
          {
            id: 'gyeonggi_33_035',
            name: '영화동',
          },
          {
            id: 'gyeonggi_33_036',
            name: '오목천동',
          },
          {
            id: 'gyeonggi_33_037',
            name: '우만동',
          },
          {
            id: 'gyeonggi_33_038',
            name: '원천동',
          },
          {
            id: 'gyeonggi_33_039',
            name: '율전동',
          },
          {
            id: 'gyeonggi_33_040',
            name: '이목동',
          },
          {
            id: 'gyeonggi_33_041',
            name: '이의동',
          },
          {
            id: 'gyeonggi_33_042',
            name: '인계동',
          },
          {
            id: 'gyeonggi_33_043',
            name: '장안동',
          },
          {
            id: 'gyeonggi_33_044',
            name: '장지동',
          },
          {
            id: 'gyeonggi_33_045',
            name: '정자동',
          },
          {
            id: 'gyeonggi_33_046',
            name: '조원동',
          },
          {
            id: 'gyeonggi_33_047',
            name: '중동',
          },
          {
            id: 'gyeonggi_33_048',
            name: '지동',
          },
          {
            id: 'gyeonggi_33_049',
            name: '지만동',
          },
          {
            id: 'gyeonggi_33_050',
            name: '천천동',
          },
          {
            id: 'gyeonggi_33_051',
            name: '탑동',
          },
          {
            id: 'gyeonggi_33_052',
            name: '파장동',
          },
          {
            id: 'gyeonggi_33_053',
            name: '팔달동',
          },
          {
            id: 'gyeonggi_33_054',
            name: '팔달로1가',
          },
          {
            id: 'gyeonggi_33_055',
            name: '팔달로2가',
          },
          {
            id: 'gyeonggi_33_056',
            name: '팔달로3가',
          },
          {
            id: 'gyeonggi_33_057',
            name: '평동',
          },
          {
            id: 'gyeonggi_33_058',
            name: '평리동',
          },
          {
            id: 'gyeonggi_33_059',
            name: '하광교동',
          },
          {
            id: 'gyeonggi_33_060',
            name: '하동',
          },
          {
            id: 'gyeonggi_33_061',
            name: '호매실동',
          },
          {
            id: 'gyeonggi_33_062',
            name: '화서1동',
          },
          {
            id: 'gyeonggi_33_063',
            name: '화서2동',
          },
          {
            id: 'gyeonggi_33_064',
            name: '화서동',
          },
        ],
      },
      {
        id: 'gyeonggi_34',
        name: '수원시 권선구',
        subregions: [
          {
            id: 'gyeonggi_34_001',
            name: '고등동',
          },
          {
            id: 'gyeonggi_34_002',
            name: '고색동',
          },
          {
            id: 'gyeonggi_34_003',
            name: '곡반정동',
          },
          {
            id: 'gyeonggi_34_004',
            name: '곡선동',
          },
          {
            id: 'gyeonggi_34_005',
            name: '교동',
          },
          {
            id: 'gyeonggi_34_006',
            name: '구운동',
          },
          {
            id: 'gyeonggi_34_007',
            name: '권선동',
          },
          {
            id: 'gyeonggi_34_008',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_34_009',
            name: '당수동',
          },
          {
            id: 'gyeonggi_34_010',
            name: '대황교동',
          },
          {
            id: 'gyeonggi_34_011',
            name: '매교동',
          },
          {
            id: 'gyeonggi_34_012',
            name: '매산동',
          },
          {
            id: 'gyeonggi_34_013',
            name: '매산로1가',
          },
          {
            id: 'gyeonggi_34_014',
            name: '매산로2가',
          },
          {
            id: 'gyeonggi_34_015',
            name: '매산로3가',
          },
          {
            id: 'gyeonggi_34_016',
            name: '매탄동',
          },
          {
            id: 'gyeonggi_34_017',
            name: '서둔동',
          },
          {
            id: 'gyeonggi_34_018',
            name: '세류1동',
          },
          {
            id: 'gyeonggi_34_019',
            name: '세류2동',
          },
          {
            id: 'gyeonggi_34_020',
            name: '세류3동',
          },
          {
            id: 'gyeonggi_34_021',
            name: '세류동',
          },
          {
            id: 'gyeonggi_34_022',
            name: '오목천동',
          },
          {
            id: 'gyeonggi_34_023',
            name: '원천동',
          },
          {
            id: 'gyeonggi_34_024',
            name: '인계동',
          },
          {
            id: 'gyeonggi_34_025',
            name: '입북동',
          },
          {
            id: 'gyeonggi_34_026',
            name: '장지동',
          },
          {
            id: 'gyeonggi_34_027',
            name: '탑동',
          },
          {
            id: 'gyeonggi_34_028',
            name: '평동',
          },
          {
            id: 'gyeonggi_34_029',
            name: '평리동',
          },
          {
            id: 'gyeonggi_34_030',
            name: '호매실동',
          },
        ],
      },
      {
        id: 'gyeonggi_35',
        name: '수원시 영통구',
        subregions: [
          {
            id: 'gyeonggi_35_001',
            name: '망포동',
          },
          {
            id: 'gyeonggi_35_002',
            name: '매탄동',
          },
          {
            id: 'gyeonggi_35_003',
            name: '신동',
          },
          {
            id: 'gyeonggi_35_004',
            name: '영통동',
          },
          {
            id: 'gyeonggi_35_005',
            name: '원천동',
          },
          {
            id: 'gyeonggi_35_006',
            name: '이의동',
          },
          {
            id: 'gyeonggi_35_007',
            name: '하동',
          },
        ],
      },
      {
        id: 'gyeonggi_36',
        name: '수원시 장안구',
        subregions: [
          {
            id: 'gyeonggi_36_001',
            name: '구천동',
          },
          {
            id: 'gyeonggi_36_002',
            name: '남수동',
          },
          {
            id: 'gyeonggi_36_003',
            name: '남창동',
          },
          {
            id: 'gyeonggi_36_004',
            name: '남향동',
          },
          {
            id: 'gyeonggi_36_005',
            name: '매향동',
          },
          {
            id: 'gyeonggi_36_006',
            name: '북수동',
          },
          {
            id: 'gyeonggi_36_007',
            name: '상광교동',
          },
          {
            id: 'gyeonggi_36_008',
            name: '송원동',
          },
          {
            id: 'gyeonggi_36_009',
            name: '송죽동',
          },
          {
            id: 'gyeonggi_36_010',
            name: '신안동',
          },
          {
            id: 'gyeonggi_36_011',
            name: '신풍동',
          },
          {
            id: 'gyeonggi_36_012',
            name: '연무동',
          },
          {
            id: 'gyeonggi_36_013',
            name: '영동',
          },
          {
            id: 'gyeonggi_36_014',
            name: '영화동',
          },
          {
            id: 'gyeonggi_36_015',
            name: '우만동',
          },
          {
            id: 'gyeonggi_36_016',
            name: '율전동',
          },
          {
            id: 'gyeonggi_36_017',
            name: '이목동',
          },
          {
            id: 'gyeonggi_36_018',
            name: '이의동',
          },
          {
            id: 'gyeonggi_36_019',
            name: '장안동',
          },
          {
            id: 'gyeonggi_36_020',
            name: '정자동',
          },
          {
            id: 'gyeonggi_36_021',
            name: '조원동',
          },
          {
            id: 'gyeonggi_36_022',
            name: '중동',
          },
          {
            id: 'gyeonggi_36_023',
            name: '지동',
          },
          {
            id: 'gyeonggi_36_024',
            name: '지만동',
          },
          {
            id: 'gyeonggi_36_025',
            name: '천천동',
          },
          {
            id: 'gyeonggi_36_026',
            name: '파장동',
          },
          {
            id: 'gyeonggi_36_027',
            name: '팔달동',
          },
          {
            id: 'gyeonggi_36_028',
            name: '팔달로1가',
          },
          {
            id: 'gyeonggi_36_029',
            name: '팔달로2가',
          },
          {
            id: 'gyeonggi_36_030',
            name: '팔달로3가',
          },
          {
            id: 'gyeonggi_36_031',
            name: '하광교동',
          },
          {
            id: 'gyeonggi_36_032',
            name: '하동',
          },
          {
            id: 'gyeonggi_36_033',
            name: '화서1동',
          },
          {
            id: 'gyeonggi_36_034',
            name: '화서2동',
          },
          {
            id: 'gyeonggi_36_035',
            name: '화서동',
          },
        ],
      },
      {
        id: 'gyeonggi_37',
        name: '수원시 팔달구',
        subregions: [
          {
            id: 'gyeonggi_37_001',
            name: '고등동',
          },
          {
            id: 'gyeonggi_37_002',
            name: '교동',
          },
          {
            id: 'gyeonggi_37_003',
            name: '구천동',
          },
          {
            id: 'gyeonggi_37_004',
            name: '남수동',
          },
          {
            id: 'gyeonggi_37_005',
            name: '남창동',
          },
          {
            id: 'gyeonggi_37_006',
            name: '망포동',
          },
          {
            id: 'gyeonggi_37_007',
            name: '매교동',
          },
          {
            id: 'gyeonggi_37_008',
            name: '매산로1가',
          },
          {
            id: 'gyeonggi_37_009',
            name: '매산로2가',
          },
          {
            id: 'gyeonggi_37_010',
            name: '매산로3가',
          },
          {
            id: 'gyeonggi_37_011',
            name: '매탄동',
          },
          {
            id: 'gyeonggi_37_012',
            name: '매향동',
          },
          {
            id: 'gyeonggi_37_013',
            name: '북수동',
          },
          {
            id: 'gyeonggi_37_014',
            name: '신동',
          },
          {
            id: 'gyeonggi_37_015',
            name: '신풍동',
          },
          {
            id: 'gyeonggi_37_016',
            name: '영동',
          },
          {
            id: 'gyeonggi_37_017',
            name: '영통동',
          },
          {
            id: 'gyeonggi_37_018',
            name: '우만동',
          },
          {
            id: 'gyeonggi_37_019',
            name: '원천동',
          },
          {
            id: 'gyeonggi_37_020',
            name: '이의동',
          },
          {
            id: 'gyeonggi_37_021',
            name: '인계동',
          },
          {
            id: 'gyeonggi_37_022',
            name: '장안동',
          },
          {
            id: 'gyeonggi_37_023',
            name: '중동',
          },
          {
            id: 'gyeonggi_37_024',
            name: '지동',
          },
          {
            id: 'gyeonggi_37_025',
            name: '팔달로1가',
          },
          {
            id: 'gyeonggi_37_026',
            name: '팔달로2가',
          },
          {
            id: 'gyeonggi_37_027',
            name: '팔달로3가',
          },
          {
            id: 'gyeonggi_37_028',
            name: '하동',
          },
          {
            id: 'gyeonggi_37_029',
            name: '화서동',
          },
        ],
      },
      {
        id: 'gyeonggi_38',
        name: '시흥군',
        subregions: [
          {
            id: 'gyeonggi_38_001',
            name: '과천면',
          },
          {
            id: 'gyeonggi_38_002',
            name: '군자면',
          },
          {
            id: 'gyeonggi_38_003',
            name: '군포읍',
          },
          {
            id: 'gyeonggi_38_004',
            name: '남면',
          },
          {
            id: 'gyeonggi_38_005',
            name: '동면',
          },
          {
            id: 'gyeonggi_38_006',
            name: '서면',
          },
          {
            id: 'gyeonggi_38_007',
            name: '소래면',
          },
          {
            id: 'gyeonggi_38_008',
            name: '소래읍',
          },
          {
            id: 'gyeonggi_38_009',
            name: '소하읍',
          },
          {
            id: 'gyeonggi_38_010',
            name: '수암면',
          },
          {
            id: 'gyeonggi_38_011',
            name: '신동면',
          },
          {
            id: 'gyeonggi_38_012',
            name: '안양읍',
          },
          {
            id: 'gyeonggi_38_013',
            name: '의왕면',
          },
          {
            id: 'gyeonggi_38_014',
            name: '의왕읍',
          },
        ],
      },
      {
        id: 'gyeonggi_39',
        name: '시흥시',
        subregions: [
          {
            id: 'gyeonggi_39_001',
            name: '거모동',
          },
          {
            id: 'gyeonggi_39_002',
            name: '계수동',
          },
          {
            id: 'gyeonggi_39_003',
            name: '과림동',
          },
          {
            id: 'gyeonggi_39_004',
            name: '광석동',
          },
          {
            id: 'gyeonggi_39_005',
            name: '군자동',
          },
          {
            id: 'gyeonggi_39_006',
            name: '금이동',
          },
          {
            id: 'gyeonggi_39_007',
            name: '논곡동',
          },
          {
            id: 'gyeonggi_39_008',
            name: '능곡동',
          },
          {
            id: 'gyeonggi_39_009',
            name: '대야동',
          },
          {
            id: 'gyeonggi_39_010',
            name: '도창동',
          },
          {
            id: 'gyeonggi_39_011',
            name: '매화동',
          },
          {
            id: 'gyeonggi_39_012',
            name: '목감동',
          },
          {
            id: 'gyeonggi_39_013',
            name: '무지내동',
          },
          {
            id: 'gyeonggi_39_014',
            name: '무지동',
          },
          {
            id: 'gyeonggi_39_015',
            name: '물왕동',
          },
          {
            id: 'gyeonggi_39_016',
            name: '미산동',
          },
          {
            id: 'gyeonggi_39_017',
            name: '방산동',
          },
          {
            id: 'gyeonggi_39_018',
            name: '배곧동',
          },
          {
            id: 'gyeonggi_39_019',
            name: '산현동',
          },
          {
            id: 'gyeonggi_39_020',
            name: '수암동',
          },
          {
            id: 'gyeonggi_39_021',
            name: '신관동',
          },
          {
            id: 'gyeonggi_39_022',
            name: '신천동',
          },
          {
            id: 'gyeonggi_39_023',
            name: '안산동',
          },
          {
            id: 'gyeonggi_39_024',
            name: '안현동',
          },
          {
            id: 'gyeonggi_39_025',
            name: '월곶동',
          },
          {
            id: 'gyeonggi_39_026',
            name: '은행동',
          },
          {
            id: 'gyeonggi_39_027',
            name: '장곡동',
          },
          {
            id: 'gyeonggi_39_028',
            name: '장상동',
          },
          {
            id: 'gyeonggi_39_029',
            name: '장하동',
          },
          {
            id: 'gyeonggi_39_030',
            name: '장현동',
          },
          {
            id: 'gyeonggi_39_031',
            name: '정왕동',
          },
          {
            id: 'gyeonggi_39_032',
            name: '조남동',
          },
          {
            id: 'gyeonggi_39_033',
            name: '죽율동',
          },
          {
            id: 'gyeonggi_39_034',
            name: '포동',
          },
          {
            id: 'gyeonggi_39_035',
            name: '하상동',
          },
          {
            id: 'gyeonggi_39_036',
            name: '하중동',
          },
          {
            id: 'gyeonggi_39_037',
            name: '화정동',
          },
        ],
      },
      {
        id: 'gyeonggi_40',
        name: '안산시',
        subregions: [
          {
            id: 'gyeonggi_40_001',
            name: '건건동',
          },
          {
            id: 'gyeonggi_40_002',
            name: '고잔동',
          },
          {
            id: 'gyeonggi_40_003',
            name: '군자동',
          },
          {
            id: 'gyeonggi_40_004',
            name: '남동',
          },
          {
            id: 'gyeonggi_40_005',
            name: '대부남동',
          },
          {
            id: 'gyeonggi_40_006',
            name: '대부동동',
          },
          {
            id: 'gyeonggi_40_007',
            name: '대부북동',
          },
          {
            id: 'gyeonggi_40_008',
            name: '동동',
          },
          {
            id: 'gyeonggi_40_009',
            name: '목내동',
          },
          {
            id: 'gyeonggi_40_010',
            name: '반월동',
          },
          {
            id: 'gyeonggi_40_011',
            name: '본오동',
          },
          {
            id: 'gyeonggi_40_012',
            name: '부곡동',
          },
          {
            id: 'gyeonggi_40_013',
            name: '북동',
          },
          {
            id: 'gyeonggi_40_014',
            name: '사동',
          },
          {
            id: 'gyeonggi_40_015',
            name: '사사동',
          },
          {
            id: 'gyeonggi_40_016',
            name: '선감동',
          },
          {
            id: 'gyeonggi_40_017',
            name: '선부동',
          },
          {
            id: 'gyeonggi_40_018',
            name: '성곡동',
          },
          {
            id: 'gyeonggi_40_019',
            name: '성포동',
          },
          {
            id: 'gyeonggi_40_020',
            name: '수암동',
          },
          {
            id: 'gyeonggi_40_021',
            name: '신길동',
          },
          {
            id: 'gyeonggi_40_022',
            name: '양상동',
          },
          {
            id: 'gyeonggi_40_023',
            name: '와동',
          },
          {
            id: 'gyeonggi_40_024',
            name: '원곡동',
          },
          {
            id: 'gyeonggi_40_025',
            name: '원시동',
          },
          {
            id: 'gyeonggi_40_026',
            name: '원초동',
          },
          {
            id: 'gyeonggi_40_027',
            name: '월피동',
          },
          {
            id: 'gyeonggi_40_028',
            name: '이동',
          },
          {
            id: 'gyeonggi_40_029',
            name: '일동',
          },
          {
            id: 'gyeonggi_40_030',
            name: '장상동',
          },
          {
            id: 'gyeonggi_40_031',
            name: '장하동',
          },
          {
            id: 'gyeonggi_40_032',
            name: '중앙동',
          },
          {
            id: 'gyeonggi_40_033',
            name: '초지동',
          },
          {
            id: 'gyeonggi_40_034',
            name: '팔곡이동',
          },
          {
            id: 'gyeonggi_40_035',
            name: '팔곡일동',
          },
          {
            id: 'gyeonggi_40_036',
            name: '풍도동',
          },
          {
            id: 'gyeonggi_40_037',
            name: '화정동',
          },
        ],
      },
      {
        id: 'gyeonggi_41',
        name: '안산시 단원구',
        subregions: [
          {
            id: 'gyeonggi_41_001',
            name: '고잔동',
          },
          {
            id: 'gyeonggi_41_002',
            name: '대부남동',
          },
          {
            id: 'gyeonggi_41_003',
            name: '대부동동',
          },
          {
            id: 'gyeonggi_41_004',
            name: '대부북동',
          },
          {
            id: 'gyeonggi_41_005',
            name: '목내동',
          },
          {
            id: 'gyeonggi_41_006',
            name: '선감동',
          },
          {
            id: 'gyeonggi_41_007',
            name: '선부동',
          },
          {
            id: 'gyeonggi_41_008',
            name: '성곡동',
          },
          {
            id: 'gyeonggi_41_009',
            name: '신길동',
          },
          {
            id: 'gyeonggi_41_010',
            name: '와동',
          },
          {
            id: 'gyeonggi_41_011',
            name: '원곡동',
          },
          {
            id: 'gyeonggi_41_012',
            name: '원시동',
          },
          {
            id: 'gyeonggi_41_013',
            name: '초지동',
          },
          {
            id: 'gyeonggi_41_014',
            name: '풍도동',
          },
          {
            id: 'gyeonggi_41_015',
            name: '화정동',
          },
        ],
      },
      {
        id: 'gyeonggi_42',
        name: '안산시 상록구',
        subregions: [
          {
            id: 'gyeonggi_42_001',
            name: '건건동',
          },
          {
            id: 'gyeonggi_42_002',
            name: '본오동',
          },
          {
            id: 'gyeonggi_42_003',
            name: '부곡동',
          },
          {
            id: 'gyeonggi_42_004',
            name: '사동',
          },
          {
            id: 'gyeonggi_42_005',
            name: '사사동',
          },
          {
            id: 'gyeonggi_42_006',
            name: '성포동',
          },
          {
            id: 'gyeonggi_42_007',
            name: '수암동',
          },
          {
            id: 'gyeonggi_42_008',
            name: '양상동',
          },
          {
            id: 'gyeonggi_42_009',
            name: '월피동',
          },
          {
            id: 'gyeonggi_42_010',
            name: '이동',
          },
          {
            id: 'gyeonggi_42_011',
            name: '일동',
          },
          {
            id: 'gyeonggi_42_012',
            name: '장상동',
          },
          {
            id: 'gyeonggi_42_013',
            name: '장하동',
          },
          {
            id: 'gyeonggi_42_014',
            name: '팔곡이동',
          },
          {
            id: 'gyeonggi_42_015',
            name: '팔곡일동',
          },
        ],
      },
      {
        id: 'gyeonggi_43',
        name: '안성군',
        subregions: [
          {
            id: 'gyeonggi_43_001',
            name: '고삼면',
          },
          {
            id: 'gyeonggi_43_002',
            name: '공도면',
          },
          {
            id: 'gyeonggi_43_003',
            name: '금광면',
          },
          {
            id: 'gyeonggi_43_004',
            name: '대덕면',
          },
          {
            id: 'gyeonggi_43_005',
            name: '미양면',
          },
          {
            id: 'gyeonggi_43_006',
            name: '보개면',
          },
          {
            id: 'gyeonggi_43_007',
            name: '삼죽면',
          },
          {
            id: 'gyeonggi_43_008',
            name: '서운면',
          },
          {
            id: 'gyeonggi_43_009',
            name: '안성읍',
          },
          {
            id: 'gyeonggi_43_010',
            name: '양성면',
          },
          {
            id: 'gyeonggi_43_011',
            name: '원곡면',
          },
          {
            id: 'gyeonggi_43_012',
            name: '이죽면',
          },
          {
            id: 'gyeonggi_43_013',
            name: '일죽면',
          },
          {
            id: 'gyeonggi_43_014',
            name: '죽산면',
          },
        ],
      },
      {
        id: 'gyeonggi_44',
        name: '안성시',
        subregions: [
          {
            id: 'gyeonggi_44_001',
            name: '가사동',
          },
          {
            id: 'gyeonggi_44_002',
            name: '가현동',
          },
          {
            id: 'gyeonggi_44_003',
            name: '계동',
          },
          {
            id: 'gyeonggi_44_004',
            name: '고삼면',
          },
          {
            id: 'gyeonggi_44_005',
            name: '공도면',
          },
          {
            id: 'gyeonggi_44_006',
            name: '공도읍',
          },
          {
            id: 'gyeonggi_44_007',
            name: '구포동',
          },
          {
            id: 'gyeonggi_44_008',
            name: '금광면',
          },
          {
            id: 'gyeonggi_44_009',
            name: '금산동',
          },
          {
            id: 'gyeonggi_44_010',
            name: '금석동',
          },
          {
            id: 'gyeonggi_44_011',
            name: '낙원동',
          },
          {
            id: 'gyeonggi_44_012',
            name: '당왕동',
          },
          {
            id: 'gyeonggi_44_013',
            name: '대덕면',
          },
          {
            id: 'gyeonggi_44_014',
            name: '대천동',
          },
          {
            id: 'gyeonggi_44_015',
            name: '도기동',
          },
          {
            id: 'gyeonggi_44_016',
            name: '동본동',
          },
          {
            id: 'gyeonggi_44_017',
            name: '명륜동',
          },
          {
            id: 'gyeonggi_44_018',
            name: '미양면',
          },
          {
            id: 'gyeonggi_44_019',
            name: '발화동',
          },
          {
            id: 'gyeonggi_44_020',
            name: '보개면',
          },
          {
            id: 'gyeonggi_44_021',
            name: '봉남동',
          },
          {
            id: 'gyeonggi_44_022',
            name: '봉산동',
          },
          {
            id: 'gyeonggi_44_023',
            name: '사곡동',
          },
          {
            id: 'gyeonggi_44_024',
            name: '삼죽면',
          },
          {
            id: 'gyeonggi_44_025',
            name: '서운면',
          },
          {
            id: 'gyeonggi_44_026',
            name: '서인동',
          },
          {
            id: 'gyeonggi_44_027',
            name: '석정동',
          },
          {
            id: 'gyeonggi_44_028',
            name: '성남동',
          },
          {
            id: 'gyeonggi_44_029',
            name: '숭인동',
          },
          {
            id: 'gyeonggi_44_030',
            name: '신건지동',
          },
          {
            id: 'gyeonggi_44_031',
            name: '신모산동',
          },
          {
            id: 'gyeonggi_44_032',
            name: '신소현동',
          },
          {
            id: 'gyeonggi_44_033',
            name: '신흥동',
          },
          {
            id: 'gyeonggi_44_034',
            name: '아양동',
          },
          {
            id: 'gyeonggi_44_035',
            name: '양성면',
          },
          {
            id: 'gyeonggi_44_036',
            name: '연지동',
          },
          {
            id: 'gyeonggi_44_037',
            name: '영동',
          },
          {
            id: 'gyeonggi_44_038',
            name: '옥산동',
          },
          {
            id: 'gyeonggi_44_039',
            name: '옥천동',
          },
          {
            id: 'gyeonggi_44_040',
            name: '원곡면',
          },
          {
            id: 'gyeonggi_44_041',
            name: '인지동',
          },
          {
            id: 'gyeonggi_44_042',
            name: '일죽면',
          },
          {
            id: 'gyeonggi_44_043',
            name: '죽산면',
          },
          {
            id: 'gyeonggi_44_044',
            name: '중리동',
          },
          {
            id: 'gyeonggi_44_045',
            name: '창전동',
          },
          {
            id: 'gyeonggi_44_046',
            name: '현수동',
          },
        ],
      },
      {
        id: 'gyeonggi_45',
        name: '안양시',
        subregions: [
          {
            id: 'gyeonggi_45_001',
            name: '관양동',
          },
          {
            id: 'gyeonggi_45_002',
            name: '박달동',
          },
          {
            id: 'gyeonggi_45_003',
            name: '비산1동',
          },
          {
            id: 'gyeonggi_45_004',
            name: '비산2동',
          },
          {
            id: 'gyeonggi_45_005',
            name: '비산동',
          },
          {
            id: 'gyeonggi_45_006',
            name: '석수1동',
          },
          {
            id: 'gyeonggi_45_007',
            name: '석수2동',
          },
          {
            id: 'gyeonggi_45_008',
            name: '석수동',
          },
          {
            id: 'gyeonggi_45_009',
            name: '안양1동',
          },
          {
            id: 'gyeonggi_45_010',
            name: '안양2동',
          },
          {
            id: 'gyeonggi_45_011',
            name: '안양3동',
          },
          {
            id: 'gyeonggi_45_012',
            name: '안양4동',
          },
          {
            id: 'gyeonggi_45_013',
            name: '안양5동',
          },
          {
            id: 'gyeonggi_45_014',
            name: '안양6동',
          },
          {
            id: 'gyeonggi_45_015',
            name: '안양7동',
          },
          {
            id: 'gyeonggi_45_016',
            name: '안양8동',
          },
          {
            id: 'gyeonggi_45_017',
            name: '안양동',
          },
          {
            id: 'gyeonggi_45_018',
            name: '평촌동',
          },
          {
            id: 'gyeonggi_45_019',
            name: '호계1동',
          },
          {
            id: 'gyeonggi_45_020',
            name: '호계2동',
          },
          {
            id: 'gyeonggi_45_021',
            name: '호계3동',
          },
          {
            id: 'gyeonggi_45_022',
            name: '호계동',
          },
        ],
      },
      {
        id: 'gyeonggi_46',
        name: '안양시 동안구',
        subregions: [
          {
            id: 'gyeonggi_46_001',
            name: '관양동',
          },
          {
            id: 'gyeonggi_46_002',
            name: '비산동',
          },
          {
            id: 'gyeonggi_46_003',
            name: '안양동',
          },
          {
            id: 'gyeonggi_46_004',
            name: '평촌동',
          },
          {
            id: 'gyeonggi_46_005',
            name: '호계동',
          },
        ],
      },
      {
        id: 'gyeonggi_47',
        name: '안양시 만안구',
        subregions: [
          {
            id: 'gyeonggi_47_001',
            name: '박달동',
          },
          {
            id: 'gyeonggi_47_002',
            name: '석수동',
          },
          {
            id: 'gyeonggi_47_003',
            name: '안양동',
          },
        ],
      },
      {
        id: 'gyeonggi_48',
        name: '양주군',
        subregions: [
          {
            id: 'gyeonggi_48_001',
            name: '광적면',
          },
          {
            id: 'gyeonggi_48_002',
            name: '구리면',
          },
          {
            id: 'gyeonggi_48_003',
            name: '구리읍',
          },
          {
            id: 'gyeonggi_48_004',
            name: '남면',
          },
          {
            id: 'gyeonggi_48_005',
            name: '노해면',
          },
          {
            id: 'gyeonggi_48_006',
            name: '동두천읍',
          },
          {
            id: 'gyeonggi_48_007',
            name: '미금면',
          },
          {
            id: 'gyeonggi_48_008',
            name: '미금읍',
          },
          {
            id: 'gyeonggi_48_009',
            name: '백석면',
          },
          {
            id: 'gyeonggi_48_010',
            name: '백석읍',
          },
          {
            id: 'gyeonggi_48_011',
            name: '별내면',
          },
          {
            id: 'gyeonggi_48_012',
            name: '수동면',
          },
          {
            id: 'gyeonggi_48_013',
            name: '양주읍',
          },
          {
            id: 'gyeonggi_48_014',
            name: '와부면',
          },
          {
            id: 'gyeonggi_48_015',
            name: '은현면',
          },
          {
            id: 'gyeonggi_48_016',
            name: '의정부읍',
          },
          {
            id: 'gyeonggi_48_017',
            name: '이남면',
          },
          {
            id: 'gyeonggi_48_018',
            name: '장흥면',
          },
          {
            id: 'gyeonggi_48_019',
            name: '주내면',
          },
          {
            id: 'gyeonggi_48_020',
            name: '진건면',
          },
          {
            id: 'gyeonggi_48_021',
            name: '진접면',
          },
          {
            id: 'gyeonggi_48_022',
            name: '화도면',
          },
          {
            id: 'gyeonggi_48_023',
            name: '회천면',
          },
          {
            id: 'gyeonggi_48_024',
            name: '회천읍',
          },
        ],
      },
      {
        id: 'gyeonggi_49',
        name: '양주시',
        subregions: [
          {
            id: 'gyeonggi_49_001',
            name: '고암동',
          },
          {
            id: 'gyeonggi_49_002',
            name: '고읍동',
          },
          {
            id: 'gyeonggi_49_003',
            name: '광사동',
          },
          {
            id: 'gyeonggi_49_004',
            name: '광적면',
          },
          {
            id: 'gyeonggi_49_005',
            name: '남면',
          },
          {
            id: 'gyeonggi_49_006',
            name: '남방동',
          },
          {
            id: 'gyeonggi_49_007',
            name: '덕계동',
          },
          {
            id: 'gyeonggi_49_008',
            name: '덕정동',
          },
          {
            id: 'gyeonggi_49_009',
            name: '마전동',
          },
          {
            id: 'gyeonggi_49_010',
            name: '만송동',
          },
          {
            id: 'gyeonggi_49_011',
            name: '백석읍',
          },
          {
            id: 'gyeonggi_49_012',
            name: '봉양동',
          },
          {
            id: 'gyeonggi_49_013',
            name: '산북동',
          },
          {
            id: 'gyeonggi_49_014',
            name: '삼숭동',
          },
          {
            id: 'gyeonggi_49_015',
            name: '어둔동',
          },
          {
            id: 'gyeonggi_49_016',
            name: '옥정동',
          },
          {
            id: 'gyeonggi_49_017',
            name: '유양동',
          },
          {
            id: 'gyeonggi_49_018',
            name: '율정동',
          },
          {
            id: 'gyeonggi_49_019',
            name: '은현면',
          },
          {
            id: 'gyeonggi_49_020',
            name: '장흥면',
          },
          {
            id: 'gyeonggi_49_021',
            name: '회암동',
          },
          {
            id: 'gyeonggi_49_022',
            name: '회정동',
          },
        ],
      },
      {
        id: 'gyeonggi_50',
        name: '양평군',
        subregions: [
          {
            id: 'gyeonggi_50_001',
            name: '강상면',
          },
          {
            id: 'gyeonggi_50_002',
            name: '강하면',
          },
          {
            id: 'gyeonggi_50_003',
            name: '개군면',
          },
          {
            id: 'gyeonggi_50_004',
            name: '단월면',
          },
          {
            id: 'gyeonggi_50_005',
            name: '서종면',
          },
          {
            id: 'gyeonggi_50_006',
            name: '양동면',
          },
          {
            id: 'gyeonggi_50_007',
            name: '양서면',
          },
          {
            id: 'gyeonggi_50_008',
            name: '양평면',
          },
          {
            id: 'gyeonggi_50_009',
            name: '양평읍',
          },
          {
            id: 'gyeonggi_50_010',
            name: '옥천면',
          },
          {
            id: 'gyeonggi_50_011',
            name: '용문면',
          },
          {
            id: 'gyeonggi_50_012',
            name: '지제면',
          },
          {
            id: 'gyeonggi_50_013',
            name: '지평면',
          },
          {
            id: 'gyeonggi_50_014',
            name: '청운면',
          },
        ],
      },
      {
        id: 'gyeonggi_51',
        name: '여주군',
        subregions: [
          {
            id: 'gyeonggi_51_001',
            name: '가남면',
          },
          {
            id: 'gyeonggi_51_002',
            name: '강천면',
          },
          {
            id: 'gyeonggi_51_003',
            name: '개군면',
          },
          {
            id: 'gyeonggi_51_004',
            name: '금사면',
          },
          {
            id: 'gyeonggi_51_005',
            name: '능서면',
          },
          {
            id: 'gyeonggi_51_006',
            name: '대신면',
          },
          {
            id: 'gyeonggi_51_007',
            name: '북내면',
          },
          {
            id: 'gyeonggi_51_008',
            name: '산북면',
          },
          {
            id: 'gyeonggi_51_009',
            name: '여주읍',
          },
          {
            id: 'gyeonggi_51_010',
            name: '점동면',
          },
          {
            id: 'gyeonggi_51_011',
            name: '흥천면',
          },
        ],
      },
      {
        id: 'gyeonggi_52',
        name: '여주시',
        subregions: [
          {
            id: 'gyeonggi_52_001',
            name: '가남읍',
          },
          {
            id: 'gyeonggi_52_002',
            name: '가업동',
          },
          {
            id: 'gyeonggi_52_003',
            name: '강천면',
          },
          {
            id: 'gyeonggi_52_004',
            name: '교동',
          },
          {
            id: 'gyeonggi_52_005',
            name: '금사면',
          },
          {
            id: 'gyeonggi_52_006',
            name: '능서면',
          },
          {
            id: 'gyeonggi_52_007',
            name: '능현동',
          },
          {
            id: 'gyeonggi_52_008',
            name: '단현동',
          },
          {
            id: 'gyeonggi_52_009',
            name: '대신면',
          },
          {
            id: 'gyeonggi_52_010',
            name: '매룡동',
          },
          {
            id: 'gyeonggi_52_011',
            name: '멱곡동',
          },
          {
            id: 'gyeonggi_52_012',
            name: '북내면',
          },
          {
            id: 'gyeonggi_52_013',
            name: '산북면',
          },
          {
            id: 'gyeonggi_52_014',
            name: '삼교동',
          },
          {
            id: 'gyeonggi_52_015',
            name: '상거동',
          },
          {
            id: 'gyeonggi_52_016',
            name: '상동',
          },
          {
            id: 'gyeonggi_52_017',
            name: '세종대왕면',
          },
          {
            id: 'gyeonggi_52_018',
            name: '신진동',
          },
          {
            id: 'gyeonggi_52_019',
            name: '연라동',
          },
          {
            id: 'gyeonggi_52_020',
            name: '연양동',
          },
          {
            id: 'gyeonggi_52_021',
            name: '오금동',
          },
          {
            id: 'gyeonggi_52_022',
            name: '오학동',
          },
          {
            id: 'gyeonggi_52_023',
            name: '우만동',
          },
          {
            id: 'gyeonggi_52_024',
            name: '월송동',
          },
          {
            id: 'gyeonggi_52_025',
            name: '점동면',
          },
          {
            id: 'gyeonggi_52_026',
            name: '점봉동',
          },
          {
            id: 'gyeonggi_52_027',
            name: '창동',
          },
          {
            id: 'gyeonggi_52_028',
            name: '천송동',
          },
          {
            id: 'gyeonggi_52_029',
            name: '하거동',
          },
          {
            id: 'gyeonggi_52_030',
            name: '하동',
          },
          {
            id: 'gyeonggi_52_031',
            name: '현암동',
          },
          {
            id: 'gyeonggi_52_032',
            name: '홍문동',
          },
          {
            id: 'gyeonggi_52_033',
            name: '흥천면',
          },
        ],
      },
      {
        id: 'gyeonggi_53',
        name: '연천군',
        subregions: [
          {
            id: 'gyeonggi_53_001',
            name: '관인면',
          },
          {
            id: 'gyeonggi_53_002',
            name: '군남면',
          },
          {
            id: 'gyeonggi_53_003',
            name: '미산면',
          },
          {
            id: 'gyeonggi_53_004',
            name: '백학면',
          },
          {
            id: 'gyeonggi_53_005',
            name: '신서면',
          },
          {
            id: 'gyeonggi_53_006',
            name: '연천면',
          },
          {
            id: 'gyeonggi_53_007',
            name: '연천읍',
          },
          {
            id: 'gyeonggi_53_008',
            name: '왕징면',
          },
          {
            id: 'gyeonggi_53_009',
            name: '장남면',
          },
          {
            id: 'gyeonggi_53_010',
            name: '전곡면',
          },
          {
            id: 'gyeonggi_53_011',
            name: '전곡읍',
          },
          {
            id: 'gyeonggi_53_012',
            name: '중면',
          },
          {
            id: 'gyeonggi_53_013',
            name: '청산면',
          },
        ],
      },
      {
        id: 'gyeonggi_54',
        name: '오산시',
        subregions: [
          {
            id: 'gyeonggi_54_001',
            name: '가수동',
          },
          {
            id: 'gyeonggi_54_002',
            name: '가장동',
          },
          {
            id: 'gyeonggi_54_003',
            name: '갈곶동',
          },
          {
            id: 'gyeonggi_54_004',
            name: '고현동',
          },
          {
            id: 'gyeonggi_54_005',
            name: '궐동',
          },
          {
            id: 'gyeonggi_54_006',
            name: '금암동',
          },
          {
            id: 'gyeonggi_54_007',
            name: '남촌동',
          },
          {
            id: 'gyeonggi_54_008',
            name: '내삼미동',
          },
          {
            id: 'gyeonggi_54_009',
            name: '누읍동',
          },
          {
            id: 'gyeonggi_54_010',
            name: '두곡동',
          },
          {
            id: 'gyeonggi_54_011',
            name: '벌음동',
          },
          {
            id: 'gyeonggi_54_012',
            name: '부산동',
          },
          {
            id: 'gyeonggi_54_013',
            name: '서동',
          },
          {
            id: 'gyeonggi_54_014',
            name: '서랑동',
          },
          {
            id: 'gyeonggi_54_015',
            name: '세교동',
          },
          {
            id: 'gyeonggi_54_016',
            name: '세마동',
          },
          {
            id: 'gyeonggi_54_017',
            name: '수청동',
          },
          {
            id: 'gyeonggi_54_018',
            name: '신장동',
          },
          {
            id: 'gyeonggi_54_019',
            name: '양산동',
          },
          {
            id: 'gyeonggi_54_020',
            name: '역촌동',
          },
          {
            id: 'gyeonggi_54_021',
            name: '오산동',
          },
          {
            id: 'gyeonggi_54_022',
            name: '외삼미동',
          },
          {
            id: 'gyeonggi_54_023',
            name: '원동',
          },
          {
            id: 'gyeonggi_54_024',
            name: '은계동',
          },
          {
            id: 'gyeonggi_54_025',
            name: '중앙동',
          },
          {
            id: 'gyeonggi_54_026',
            name: '지곶동',
          },
          {
            id: 'gyeonggi_54_027',
            name: '청학동',
          },
          {
            id: 'gyeonggi_54_028',
            name: '청호동',
          },
          {
            id: 'gyeonggi_54_029',
            name: '초평동',
          },
          {
            id: 'gyeonggi_54_030',
            name: '탑동',
          },
        ],
      },
      {
        id: 'gyeonggi_55',
        name: '옹진군',
        subregions: [
          {
            id: 'gyeonggi_55_001',
            name: '대부면',
          },
          {
            id: 'gyeonggi_55_002',
            name: '대청면',
          },
          {
            id: 'gyeonggi_55_003',
            name: '덕적면',
          },
          {
            id: 'gyeonggi_55_004',
            name: '백령면',
          },
          {
            id: 'gyeonggi_55_005',
            name: '북도면',
          },
          {
            id: 'gyeonggi_55_006',
            name: '송림면',
          },
          {
            id: 'gyeonggi_55_007',
            name: '영종면',
          },
          {
            id: 'gyeonggi_55_008',
            name: '영흥면',
          },
          {
            id: 'gyeonggi_55_009',
            name: '용유면',
          },
          {
            id: 'gyeonggi_55_010',
            name: '자월면',
          },
        ],
      },
      {
        id: 'gyeonggi_56',
        name: '용인군',
        subregions: [
          {
            id: 'gyeonggi_56_001',
            name: '고삼면',
          },
          {
            id: 'gyeonggi_56_002',
            name: '구성면',
          },
          {
            id: 'gyeonggi_56_003',
            name: '기흥면',
          },
          {
            id: 'gyeonggi_56_004',
            name: '기흥읍',
          },
          {
            id: 'gyeonggi_56_005',
            name: '남사면',
          },
          {
            id: 'gyeonggi_56_006',
            name: '내사면',
          },
          {
            id: 'gyeonggi_56_007',
            name: '모현면',
          },
          {
            id: 'gyeonggi_56_008',
            name: '수지면',
          },
          {
            id: 'gyeonggi_56_009',
            name: '외사면',
          },
          {
            id: 'gyeonggi_56_010',
            name: '용인면',
          },
          {
            id: 'gyeonggi_56_011',
            name: '용인읍',
          },
          {
            id: 'gyeonggi_56_012',
            name: '원삼면',
          },
          {
            id: 'gyeonggi_56_013',
            name: '이동면',
          },
          {
            id: 'gyeonggi_56_014',
            name: '포곡면',
          },
        ],
      },
      {
        id: 'gyeonggi_57',
        name: '용인시',
        subregions: [
          {
            id: 'gyeonggi_57_001',
            name: '고기동',
          },
          {
            id: 'gyeonggi_57_002',
            name: '고림동',
          },
          {
            id: 'gyeonggi_57_003',
            name: '구성면',
          },
          {
            id: 'gyeonggi_57_004',
            name: '구성읍',
          },
          {
            id: 'gyeonggi_57_005',
            name: '기흥읍',
          },
          {
            id: 'gyeonggi_57_006',
            name: '김량장동',
          },
          {
            id: 'gyeonggi_57_007',
            name: '남동',
          },
          {
            id: 'gyeonggi_57_008',
            name: '남사면',
          },
          {
            id: 'gyeonggi_57_009',
            name: '동천동',
          },
          {
            id: 'gyeonggi_57_010',
            name: '마평동',
          },
          {
            id: 'gyeonggi_57_011',
            name: '모현면',
          },
          {
            id: 'gyeonggi_57_012',
            name: '백암면',
          },
          {
            id: 'gyeonggi_57_013',
            name: '삼가동',
          },
          {
            id: 'gyeonggi_57_014',
            name: '상현동',
          },
          {
            id: 'gyeonggi_57_015',
            name: '성복동',
          },
          {
            id: 'gyeonggi_57_016',
            name: '수지읍',
          },
          {
            id: 'gyeonggi_57_017',
            name: '신봉동',
          },
          {
            id: 'gyeonggi_57_018',
            name: '양지면',
          },
          {
            id: 'gyeonggi_57_019',
            name: '역북동',
          },
          {
            id: 'gyeonggi_57_020',
            name: '운학동',
          },
          {
            id: 'gyeonggi_57_021',
            name: '원삼면',
          },
          {
            id: 'gyeonggi_57_022',
            name: '유방동',
          },
          {
            id: 'gyeonggi_57_023',
            name: '이동면',
          },
          {
            id: 'gyeonggi_57_024',
            name: '죽전동',
          },
          {
            id: 'gyeonggi_57_025',
            name: '포곡면',
          },
          {
            id: 'gyeonggi_57_026',
            name: '풍덕천동',
          },
          {
            id: 'gyeonggi_57_027',
            name: '해곡동',
          },
          {
            id: 'gyeonggi_57_028',
            name: '호동',
          },
        ],
      },
      {
        id: 'gyeonggi_58',
        name: '용인시 기흥구',
        subregions: [
          {
            id: 'gyeonggi_58_001',
            name: '고매동',
          },
          {
            id: 'gyeonggi_58_002',
            name: '공세동',
          },
          {
            id: 'gyeonggi_58_003',
            name: '구갈동',
          },
          {
            id: 'gyeonggi_58_004',
            name: '농서동',
          },
          {
            id: 'gyeonggi_58_005',
            name: '동백동',
          },
          {
            id: 'gyeonggi_58_006',
            name: '마북동',
          },
          {
            id: 'gyeonggi_58_007',
            name: '보라동',
          },
          {
            id: 'gyeonggi_58_008',
            name: '보정동',
          },
          {
            id: 'gyeonggi_58_009',
            name: '상갈동',
          },
          {
            id: 'gyeonggi_58_010',
            name: '상하동',
          },
          {
            id: 'gyeonggi_58_011',
            name: '서천동',
          },
          {
            id: 'gyeonggi_58_012',
            name: '신갈동',
          },
          {
            id: 'gyeonggi_58_013',
            name: '언남동',
          },
          {
            id: 'gyeonggi_58_014',
            name: '영덕동',
          },
          {
            id: 'gyeonggi_58_015',
            name: '중동',
          },
          {
            id: 'gyeonggi_58_016',
            name: '지곡동',
          },
          {
            id: 'gyeonggi_58_017',
            name: '청덕동',
          },
          {
            id: 'gyeonggi_58_018',
            name: '하갈동',
          },
        ],
      },
      {
        id: 'gyeonggi_59',
        name: '용인시 수지구',
        subregions: [
          {
            id: 'gyeonggi_59_001',
            name: '고기동',
          },
          {
            id: 'gyeonggi_59_002',
            name: '동천동',
          },
          {
            id: 'gyeonggi_59_003',
            name: '상현동',
          },
          {
            id: 'gyeonggi_59_004',
            name: '성복동',
          },
          {
            id: 'gyeonggi_59_005',
            name: '신봉동',
          },
          {
            id: 'gyeonggi_59_006',
            name: '죽전동',
          },
          {
            id: 'gyeonggi_59_007',
            name: '풍덕천동',
          },
        ],
      },
      {
        id: 'gyeonggi_60',
        name: '용인시 처인구',
        subregions: [
          {
            id: 'gyeonggi_60_001',
            name: '고림동',
          },
          {
            id: 'gyeonggi_60_002',
            name: '김량장동',
          },
          {
            id: 'gyeonggi_60_003',
            name: '남동',
          },
          {
            id: 'gyeonggi_60_004',
            name: '남사면',
          },
          {
            id: 'gyeonggi_60_005',
            name: '남사읍',
          },
          {
            id: 'gyeonggi_60_006',
            name: '마평동',
          },
          {
            id: 'gyeonggi_60_007',
            name: '모현면',
          },
          {
            id: 'gyeonggi_60_008',
            name: '모현읍',
          },
          {
            id: 'gyeonggi_60_009',
            name: '백암면',
          },
          {
            id: 'gyeonggi_60_010',
            name: '삼가동',
          },
          {
            id: 'gyeonggi_60_011',
            name: '양지면',
          },
          {
            id: 'gyeonggi_60_012',
            name: '역북동',
          },
          {
            id: 'gyeonggi_60_013',
            name: '운학동',
          },
          {
            id: 'gyeonggi_60_014',
            name: '원삼면',
          },
          {
            id: 'gyeonggi_60_015',
            name: '유방동',
          },
          {
            id: 'gyeonggi_60_016',
            name: '이동면',
          },
          {
            id: 'gyeonggi_60_017',
            name: '이동읍',
          },
          {
            id: 'gyeonggi_60_018',
            name: '포곡읍',
          },
          {
            id: 'gyeonggi_60_019',
            name: '해곡동',
          },
          {
            id: 'gyeonggi_60_020',
            name: '호동',
          },
        ],
      },
      {
        id: 'gyeonggi_61',
        name: '의왕시',
        subregions: [
          {
            id: 'gyeonggi_61_001',
            name: '고천동',
          },
          {
            id: 'gyeonggi_61_002',
            name: '내손1동',
          },
          {
            id: 'gyeonggi_61_003',
            name: '내손2동',
          },
          {
            id: 'gyeonggi_61_004',
            name: '내손동',
          },
          {
            id: 'gyeonggi_61_005',
            name: '부곡동',
          },
          {
            id: 'gyeonggi_61_006',
            name: '삼동',
          },
          {
            id: 'gyeonggi_61_007',
            name: '오전동',
          },
          {
            id: 'gyeonggi_61_008',
            name: '왕곡동',
          },
          {
            id: 'gyeonggi_61_009',
            name: '월암동',
          },
          {
            id: 'gyeonggi_61_010',
            name: '이동',
          },
          {
            id: 'gyeonggi_61_011',
            name: '청계동',
          },
          {
            id: 'gyeonggi_61_012',
            name: '초평동',
          },
          {
            id: 'gyeonggi_61_013',
            name: '포일동',
          },
          {
            id: 'gyeonggi_61_014',
            name: '학의동',
          },
        ],
      },
      {
        id: 'gyeonggi_62',
        name: '의정부시',
        subregions: [
          {
            id: 'gyeonggi_62_001',
            name: '가능1동',
          },
          {
            id: 'gyeonggi_62_002',
            name: '가능2동',
          },
          {
            id: 'gyeonggi_62_003',
            name: '가능3동',
          },
          {
            id: 'gyeonggi_62_004',
            name: '가능동',
          },
          {
            id: 'gyeonggi_62_005',
            name: '가능리',
          },
          {
            id: 'gyeonggi_62_006',
            name: '고산동',
          },
          {
            id: 'gyeonggi_62_007',
            name: '금오동',
          },
          {
            id: 'gyeonggi_62_008',
            name: '금오리',
          },
          {
            id: 'gyeonggi_62_009',
            name: '낙양동',
          },
          {
            id: 'gyeonggi_62_010',
            name: '낙양리',
          },
          {
            id: 'gyeonggi_62_011',
            name: '녹양동',
          },
          {
            id: 'gyeonggi_62_012',
            name: '녹양리',
          },
          {
            id: 'gyeonggi_62_013',
            name: '민락동',
          },
          {
            id: 'gyeonggi_62_014',
            name: '민락리',
          },
          {
            id: 'gyeonggi_62_015',
            name: '산곡동',
          },
          {
            id: 'gyeonggi_62_016',
            name: '송산동',
          },
          {
            id: 'gyeonggi_62_017',
            name: '신곡동',
          },
          {
            id: 'gyeonggi_62_018',
            name: '신곡리',
          },
          {
            id: 'gyeonggi_62_019',
            name: '용현동',
          },
          {
            id: 'gyeonggi_62_020',
            name: '용현리',
          },
          {
            id: 'gyeonggi_62_021',
            name: '의정부1동',
          },
          {
            id: 'gyeonggi_62_022',
            name: '의정부2동',
          },
          {
            id: 'gyeonggi_62_023',
            name: '의정부3동',
          },
          {
            id: 'gyeonggi_62_024',
            name: '의정부4동',
          },
          {
            id: 'gyeonggi_62_025',
            name: '의정부동',
          },
          {
            id: 'gyeonggi_62_026',
            name: '의정부리',
          },
          {
            id: 'gyeonggi_62_027',
            name: '자금동',
          },
          {
            id: 'gyeonggi_62_028',
            name: '자일동',
          },
          {
            id: 'gyeonggi_62_029',
            name: '자일리',
          },
          {
            id: 'gyeonggi_62_030',
            name: '장곡동',
          },
          {
            id: 'gyeonggi_62_031',
            name: '장암동',
          },
          {
            id: 'gyeonggi_62_032',
            name: '장암리',
          },
          {
            id: 'gyeonggi_62_033',
            name: '호원동',
          },
          {
            id: 'gyeonggi_62_034',
            name: '호원리',
          },
        ],
      },
      {
        id: 'gyeonggi_63',
        name: '이천군',
        subregions: [
          {
            id: 'gyeonggi_63_001',
            name: '대월면',
          },
          {
            id: 'gyeonggi_63_002',
            name: '마장면',
          },
          {
            id: 'gyeonggi_63_003',
            name: '모가면',
          },
          {
            id: 'gyeonggi_63_004',
            name: '백사면',
          },
          {
            id: 'gyeonggi_63_005',
            name: '부발면',
          },
          {
            id: 'gyeonggi_63_006',
            name: '부발읍',
          },
          {
            id: 'gyeonggi_63_007',
            name: '설성면',
          },
          {
            id: 'gyeonggi_63_008',
            name: '신둔면',
          },
          {
            id: 'gyeonggi_63_009',
            name: '율면',
          },
          {
            id: 'gyeonggi_63_010',
            name: '이천읍',
          },
          {
            id: 'gyeonggi_63_011',
            name: '장호원읍',
          },
          {
            id: 'gyeonggi_63_012',
            name: '호법면',
          },
        ],
      },
      {
        id: 'gyeonggi_64',
        name: '이천시',
        subregions: [
          {
            id: 'gyeonggi_64_001',
            name: '갈산동',
          },
          {
            id: 'gyeonggi_64_002',
            name: '고담동',
          },
          {
            id: 'gyeonggi_64_003',
            name: '관고동',
          },
          {
            id: 'gyeonggi_64_004',
            name: '단월동',
          },
          {
            id: 'gyeonggi_64_005',
            name: '대월면',
          },
          {
            id: 'gyeonggi_64_006',
            name: '대포동',
          },
          {
            id: 'gyeonggi_64_007',
            name: '마장면',
          },
          {
            id: 'gyeonggi_64_008',
            name: '모가면',
          },
          {
            id: 'gyeonggi_64_009',
            name: '백사면',
          },
          {
            id: 'gyeonggi_64_010',
            name: '부발읍',
          },
          {
            id: 'gyeonggi_64_011',
            name: '사음동',
          },
          {
            id: 'gyeonggi_64_012',
            name: '설성면',
          },
          {
            id: 'gyeonggi_64_013',
            name: '송정동',
          },
          {
            id: 'gyeonggi_64_014',
            name: '신둔면',
          },
          {
            id: 'gyeonggi_64_015',
            name: '안흥동',
          },
          {
            id: 'gyeonggi_64_016',
            name: '율면',
          },
          {
            id: 'gyeonggi_64_017',
            name: '율현동',
          },
          {
            id: 'gyeonggi_64_018',
            name: '장록동',
          },
          {
            id: 'gyeonggi_64_019',
            name: '장호원읍',
          },
          {
            id: 'gyeonggi_64_020',
            name: '중리동',
          },
          {
            id: 'gyeonggi_64_021',
            name: '증일동',
          },
          {
            id: 'gyeonggi_64_022',
            name: '증포동',
          },
          {
            id: 'gyeonggi_64_023',
            name: '진리동',
          },
          {
            id: 'gyeonggi_64_024',
            name: '창전동',
          },
          {
            id: 'gyeonggi_64_025',
            name: '호법면',
          },
        ],
      },
      {
        id: 'gyeonggi_65',
        name: '인천시',
        subregions: [
          {
            id: 'gyeonggi_65_001',
            name: '가정동',
          },
          {
            id: 'gyeonggi_65_002',
            name: '가좌동',
          },
          {
            id: 'gyeonggi_65_003',
            name: '간석동',
          },
          {
            id: 'gyeonggi_65_004',
            name: '갈산동',
          },
          {
            id: 'gyeonggi_65_005',
            name: '검암동',
          },
          {
            id: 'gyeonggi_65_006',
            name: '경동',
          },
          {
            id: 'gyeonggi_65_007',
            name: '경서동',
          },
          {
            id: 'gyeonggi_65_008',
            name: '계산동',
          },
          {
            id: 'gyeonggi_65_009',
            name: '고잔동',
          },
          {
            id: 'gyeonggi_65_010',
            name: '공촌동',
          },
          {
            id: 'gyeonggi_65_011',
            name: '관교동',
          },
          {
            id: 'gyeonggi_65_012',
            name: '관동',
          },
          {
            id: 'gyeonggi_65_013',
            name: '관동1가',
          },
          {
            id: 'gyeonggi_65_014',
            name: '관동2가',
          },
          {
            id: 'gyeonggi_65_015',
            name: '관동3가',
          },
          {
            id: 'gyeonggi_65_016',
            name: '구산동',
          },
          {
            id: 'gyeonggi_65_017',
            name: '구월동',
          },
          {
            id: 'gyeonggi_65_018',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_65_019',
            name: '남촌동',
          },
          {
            id: 'gyeonggi_65_020',
            name: '내동',
          },
          {
            id: 'gyeonggi_65_021',
            name: '논현동',
          },
          {
            id: 'gyeonggi_65_022',
            name: '답동',
          },
          {
            id: 'gyeonggi_65_023',
            name: '도림동',
          },
          {
            id: 'gyeonggi_65_024',
            name: '도원동',
          },
          {
            id: 'gyeonggi_65_025',
            name: '도화동',
          },
          {
            id: 'gyeonggi_65_026',
            name: '동춘동',
          },
          {
            id: 'gyeonggi_65_027',
            name: '만석동',
          },
          {
            id: 'gyeonggi_65_028',
            name: '만수동',
          },
          {
            id: 'gyeonggi_65_029',
            name: '문학동',
          },
          {
            id: 'gyeonggi_65_030',
            name: '백석동',
          },
          {
            id: 'gyeonggi_65_031',
            name: '부개동',
          },
          {
            id: 'gyeonggi_65_032',
            name: '부평동',
          },
          {
            id: 'gyeonggi_65_033',
            name: '북성동',
          },
          {
            id: 'gyeonggi_65_034',
            name: '북성동1가',
          },
          {
            id: 'gyeonggi_65_035',
            name: '북성동2가',
          },
          {
            id: 'gyeonggi_65_036',
            name: '북성동3가',
          },
          {
            id: 'gyeonggi_65_037',
            name: '사동',
          },
          {
            id: 'gyeonggi_65_038',
            name: '산곡동',
          },
          {
            id: 'gyeonggi_65_039',
            name: '삼산동',
          },
          {
            id: 'gyeonggi_65_040',
            name: '서운동',
          },
          {
            id: 'gyeonggi_65_041',
            name: '서창동',
          },
          {
            id: 'gyeonggi_65_042',
            name: '석남동',
          },
          {
            id: 'gyeonggi_65_043',
            name: '선린동',
          },
          {
            id: 'gyeonggi_65_044',
            name: '선학동',
          },
          {
            id: 'gyeonggi_65_045',
            name: '선화동',
          },
          {
            id: 'gyeonggi_65_046',
            name: '송림동',
          },
          {
            id: 'gyeonggi_65_047',
            name: '송월동',
          },
          {
            id: 'gyeonggi_65_048',
            name: '송월동1가',
          },
          {
            id: 'gyeonggi_65_049',
            name: '송월동2가',
          },
          {
            id: 'gyeonggi_65_050',
            name: '송월동3가',
          },
          {
            id: 'gyeonggi_65_051',
            name: '송학동',
          },
          {
            id: 'gyeonggi_65_052',
            name: '송학동1가',
          },
          {
            id: 'gyeonggi_65_053',
            name: '송학동2가',
          },
          {
            id: 'gyeonggi_65_054',
            name: '송학동3가',
          },
          {
            id: 'gyeonggi_65_055',
            name: '송현동',
          },
          {
            id: 'gyeonggi_65_056',
            name: '수산동',
          },
          {
            id: 'gyeonggi_65_057',
            name: '숭의동',
          },
          {
            id: 'gyeonggi_65_058',
            name: '시천동',
          },
          {
            id: 'gyeonggi_65_059',
            name: '신생동',
          },
          {
            id: 'gyeonggi_65_060',
            name: '신포동',
          },
          {
            id: 'gyeonggi_65_061',
            name: '신현동',
          },
          {
            id: 'gyeonggi_65_062',
            name: '신흥동',
          },
          {
            id: 'gyeonggi_65_063',
            name: '신흥동1가',
          },
          {
            id: 'gyeonggi_65_064',
            name: '신흥동2가',
          },
          {
            id: 'gyeonggi_65_065',
            name: '신흥동3가',
          },
          {
            id: 'gyeonggi_65_066',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_65_067',
            name: '십정동',
          },
          {
            id: 'gyeonggi_65_068',
            name: '연수동',
          },
          {
            id: 'gyeonggi_65_069',
            name: '연희동',
          },
          {
            id: 'gyeonggi_65_070',
            name: '옥련동',
          },
          {
            id: 'gyeonggi_65_071',
            name: '용동',
          },
          {
            id: 'gyeonggi_65_072',
            name: '용현동',
          },
          {
            id: 'gyeonggi_65_073',
            name: '운연동',
          },
          {
            id: 'gyeonggi_65_074',
            name: '원창동',
          },
          {
            id: 'gyeonggi_65_075',
            name: '유동',
          },
          {
            id: 'gyeonggi_65_076',
            name: '율목동',
          },
          {
            id: 'gyeonggi_65_077',
            name: '인현동',
          },
          {
            id: 'gyeonggi_65_078',
            name: '일신동',
          },
          {
            id: 'gyeonggi_65_079',
            name: '작전동',
          },
          {
            id: 'gyeonggi_65_080',
            name: '장수동',
          },
          {
            id: 'gyeonggi_65_081',
            name: '전동',
          },
          {
            id: 'gyeonggi_65_082',
            name: '주안동',
          },
          {
            id: 'gyeonggi_65_083',
            name: '중앙동',
          },
          {
            id: 'gyeonggi_65_084',
            name: '중앙동1가',
          },
          {
            id: 'gyeonggi_65_085',
            name: '중앙동2가',
          },
          {
            id: 'gyeonggi_65_086',
            name: '중앙동3가',
          },
          {
            id: 'gyeonggi_65_087',
            name: '중앙동4가',
          },
          {
            id: 'gyeonggi_65_088',
            name: '창영동',
          },
          {
            id: 'gyeonggi_65_089',
            name: '청천동',
          },
          {
            id: 'gyeonggi_65_090',
            name: '청학동',
          },
          {
            id: 'gyeonggi_65_091',
            name: '학익동',
          },
          {
            id: 'gyeonggi_65_092',
            name: '항동',
          },
          {
            id: 'gyeonggi_65_093',
            name: '항동1가',
          },
          {
            id: 'gyeonggi_65_094',
            name: '항동2가',
          },
          {
            id: 'gyeonggi_65_095',
            name: '항동3가',
          },
          {
            id: 'gyeonggi_65_096',
            name: '항동4가',
          },
          {
            id: 'gyeonggi_65_097',
            name: '항동5가',
          },
          {
            id: 'gyeonggi_65_098',
            name: '항동6가',
          },
          {
            id: 'gyeonggi_65_099',
            name: '항동7가',
          },
          {
            id: 'gyeonggi_65_100',
            name: '해안동',
          },
          {
            id: 'gyeonggi_65_101',
            name: '해안동1가',
          },
          {
            id: 'gyeonggi_65_102',
            name: '해안동2가',
          },
          {
            id: 'gyeonggi_65_103',
            name: '해안동3가',
          },
          {
            id: 'gyeonggi_65_104',
            name: '해안동4가',
          },
          {
            id: 'gyeonggi_65_105',
            name: '화수동',
          },
          {
            id: 'gyeonggi_65_106',
            name: '화평동',
          },
          {
            id: 'gyeonggi_65_107',
            name: '효성동',
          },
        ],
      },
      {
        id: 'gyeonggi_66',
        name: '인천시 남구',
        subregions: [
          {
            id: 'gyeonggi_66_001',
            name: '간석동',
          },
          {
            id: 'gyeonggi_66_002',
            name: '고잔동',
          },
          {
            id: 'gyeonggi_66_003',
            name: '관교동',
          },
          {
            id: 'gyeonggi_66_004',
            name: '구기동',
          },
          {
            id: 'gyeonggi_66_005',
            name: '구월동',
          },
          {
            id: 'gyeonggi_66_006',
            name: '남촌동',
          },
          {
            id: 'gyeonggi_66_007',
            name: '논현동',
          },
          {
            id: 'gyeonggi_66_008',
            name: '논현동1동',
          },
          {
            id: 'gyeonggi_66_009',
            name: '논현동2동',
          },
          {
            id: 'gyeonggi_66_010',
            name: '도림동',
          },
          {
            id: 'gyeonggi_66_011',
            name: '도화동',
          },
          {
            id: 'gyeonggi_66_012',
            name: '도화동1동',
          },
          {
            id: 'gyeonggi_66_013',
            name: '도화동2동',
          },
          {
            id: 'gyeonggi_66_014',
            name: '동춘동',
          },
          {
            id: 'gyeonggi_66_015',
            name: '만수동',
          },
          {
            id: 'gyeonggi_66_016',
            name: '문학동',
          },
          {
            id: 'gyeonggi_66_017',
            name: '서창동',
          },
          {
            id: 'gyeonggi_66_018',
            name: '선학동',
          },
          {
            id: 'gyeonggi_66_019',
            name: '수산동',
          },
          {
            id: 'gyeonggi_66_020',
            name: '숭의동',
          },
          {
            id: 'gyeonggi_66_021',
            name: '숭의동1동',
          },
          {
            id: 'gyeonggi_66_022',
            name: '숭의동2동',
          },
          {
            id: 'gyeonggi_66_023',
            name: '숭의동3동',
          },
          {
            id: 'gyeonggi_66_024',
            name: '숭의동4동',
          },
          {
            id: 'gyeonggi_66_025',
            name: '연수동',
          },
          {
            id: 'gyeonggi_66_026',
            name: '옥련동',
          },
          {
            id: 'gyeonggi_66_027',
            name: '용현동',
          },
          {
            id: 'gyeonggi_66_028',
            name: '용현동1동',
          },
          {
            id: 'gyeonggi_66_029',
            name: '용현동2동',
          },
          {
            id: 'gyeonggi_66_030',
            name: '운연동',
          },
          {
            id: 'gyeonggi_66_031',
            name: '장수동',
          },
          {
            id: 'gyeonggi_66_032',
            name: '주안동',
          },
          {
            id: 'gyeonggi_66_033',
            name: '주안동1동',
          },
          {
            id: 'gyeonggi_66_034',
            name: '주안동2동',
          },
          {
            id: 'gyeonggi_66_035',
            name: '청학동',
          },
          {
            id: 'gyeonggi_66_036',
            name: '학익동',
          },
        ],
      },
      {
        id: 'gyeonggi_67',
        name: '인천시 동구',
        subregions: [
          {
            id: 'gyeonggi_67_001',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_67_002',
            name: '금곡동1동',
          },
          {
            id: 'gyeonggi_67_003',
            name: '금곡동2동',
          },
          {
            id: 'gyeonggi_67_004',
            name: '만석동',
          },
          {
            id: 'gyeonggi_67_005',
            name: '송림동',
          },
          {
            id: 'gyeonggi_67_006',
            name: '송림동1동',
          },
          {
            id: 'gyeonggi_67_007',
            name: '송림동2동',
          },
          {
            id: 'gyeonggi_67_008',
            name: '송림동3동',
          },
          {
            id: 'gyeonggi_67_009',
            name: '송림동4동',
          },
          {
            id: 'gyeonggi_67_010',
            name: '송현동',
          },
          {
            id: 'gyeonggi_67_011',
            name: '송현동1동',
          },
          {
            id: 'gyeonggi_67_012',
            name: '송현동2동',
          },
          {
            id: 'gyeonggi_67_013',
            name: '송현동3동',
          },
          {
            id: 'gyeonggi_67_014',
            name: '송현동4동',
          },
          {
            id: 'gyeonggi_67_015',
            name: '창영동',
          },
          {
            id: 'gyeonggi_67_016',
            name: '화수동',
          },
          {
            id: 'gyeonggi_67_017',
            name: '화수동1동',
          },
          {
            id: 'gyeonggi_67_018',
            name: '화수동2동',
          },
          {
            id: 'gyeonggi_67_019',
            name: '화수동3동',
          },
          {
            id: 'gyeonggi_67_020',
            name: '화평동',
          },
        ],
      },
      {
        id: 'gyeonggi_68',
        name: '인천시 북구',
        subregions: [
          {
            id: 'gyeonggi_68_001',
            name: '가정동',
          },
          {
            id: 'gyeonggi_68_002',
            name: '가좌동',
          },
          {
            id: 'gyeonggi_68_003',
            name: '갈산동',
          },
          {
            id: 'gyeonggi_68_004',
            name: '검암동',
          },
          {
            id: 'gyeonggi_68_005',
            name: '경서동',
          },
          {
            id: 'gyeonggi_68_006',
            name: '계산동',
          },
          {
            id: 'gyeonggi_68_007',
            name: '계산동1동',
          },
          {
            id: 'gyeonggi_68_008',
            name: '계산동2동',
          },
          {
            id: 'gyeonggi_68_009',
            name: '공촌동',
          },
          {
            id: 'gyeonggi_68_010',
            name: '구산동',
          },
          {
            id: 'gyeonggi_68_011',
            name: '백석동',
          },
          {
            id: 'gyeonggi_68_012',
            name: '백천동',
          },
          {
            id: 'gyeonggi_68_013',
            name: '부개동',
          },
          {
            id: 'gyeonggi_68_014',
            name: '부평동',
          },
          {
            id: 'gyeonggi_68_015',
            name: '부평동1동',
          },
          {
            id: 'gyeonggi_68_016',
            name: '부평동2동',
          },
          {
            id: 'gyeonggi_68_017',
            name: '부평동3동',
          },
          {
            id: 'gyeonggi_68_018',
            name: '산곡동',
          },
          {
            id: 'gyeonggi_68_019',
            name: '삼산동',
          },
          {
            id: 'gyeonggi_68_020',
            name: '서운동',
          },
          {
            id: 'gyeonggi_68_021',
            name: '석남동',
          },
          {
            id: 'gyeonggi_68_022',
            name: '시천동',
          },
          {
            id: 'gyeonggi_68_023',
            name: '신현동',
          },
          {
            id: 'gyeonggi_68_024',
            name: '심곡동',
          },
          {
            id: 'gyeonggi_68_025',
            name: '십정동',
          },
          {
            id: 'gyeonggi_68_026',
            name: '십정동1동',
          },
          {
            id: 'gyeonggi_68_027',
            name: '십정동2동',
          },
          {
            id: 'gyeonggi_68_028',
            name: '연희동',
          },
          {
            id: 'gyeonggi_68_029',
            name: '원창동',
          },
          {
            id: 'gyeonggi_68_030',
            name: '일신동',
          },
          {
            id: 'gyeonggi_68_031',
            name: '작전동',
          },
          {
            id: 'gyeonggi_68_032',
            name: '청천동',
          },
          {
            id: 'gyeonggi_68_033',
            name: '효성동',
          },
        ],
      },
      {
        id: 'gyeonggi_69',
        name: '인천시 중구',
        subregions: [
          {
            id: 'gyeonggi_69_001',
            name: '경동',
          },
          {
            id: 'gyeonggi_69_002',
            name: '관동',
          },
          {
            id: 'gyeonggi_69_003',
            name: '관동1가',
          },
          {
            id: 'gyeonggi_69_004',
            name: '관동2가',
          },
          {
            id: 'gyeonggi_69_005',
            name: '관동3가',
          },
          {
            id: 'gyeonggi_69_006',
            name: '내동',
          },
          {
            id: 'gyeonggi_69_007',
            name: '답동',
          },
          {
            id: 'gyeonggi_69_008',
            name: '도원동',
          },
          {
            id: 'gyeonggi_69_009',
            name: '북성동',
          },
          {
            id: 'gyeonggi_69_010',
            name: '북성동1가',
          },
          {
            id: 'gyeonggi_69_011',
            name: '북성동2가',
          },
          {
            id: 'gyeonggi_69_012',
            name: '북성동3가',
          },
          {
            id: 'gyeonggi_69_013',
            name: '사동',
          },
          {
            id: 'gyeonggi_69_014',
            name: '선린동',
          },
          {
            id: 'gyeonggi_69_015',
            name: '선화동',
          },
          {
            id: 'gyeonggi_69_016',
            name: '송월동',
          },
          {
            id: 'gyeonggi_69_017',
            name: '송월동1가',
          },
          {
            id: 'gyeonggi_69_018',
            name: '송월동2가',
          },
          {
            id: 'gyeonggi_69_019',
            name: '송월동3가',
          },
          {
            id: 'gyeonggi_69_020',
            name: '송학동',
          },
          {
            id: 'gyeonggi_69_021',
            name: '송학동1가',
          },
          {
            id: 'gyeonggi_69_022',
            name: '송학동2가',
          },
          {
            id: 'gyeonggi_69_023',
            name: '송학동3가',
          },
          {
            id: 'gyeonggi_69_024',
            name: '신생동',
          },
          {
            id: 'gyeonggi_69_025',
            name: '신포동',
          },
          {
            id: 'gyeonggi_69_026',
            name: '신흥동',
          },
          {
            id: 'gyeonggi_69_027',
            name: '신흥동1가',
          },
          {
            id: 'gyeonggi_69_028',
            name: '신흥동2가',
          },
          {
            id: 'gyeonggi_69_029',
            name: '신흥동3가',
          },
          {
            id: 'gyeonggi_69_030',
            name: '용동',
          },
          {
            id: 'gyeonggi_69_031',
            name: '유동',
          },
          {
            id: 'gyeonggi_69_032',
            name: '율목동',
          },
          {
            id: 'gyeonggi_69_033',
            name: '인현동',
          },
          {
            id: 'gyeonggi_69_034',
            name: '전동',
          },
          {
            id: 'gyeonggi_69_035',
            name: '중앙동',
          },
          {
            id: 'gyeonggi_69_036',
            name: '중앙동1가',
          },
          {
            id: 'gyeonggi_69_037',
            name: '중앙동2가',
          },
          {
            id: 'gyeonggi_69_038',
            name: '중앙동3가',
          },
          {
            id: 'gyeonggi_69_039',
            name: '중앙동4가',
          },
          {
            id: 'gyeonggi_69_040',
            name: '항동',
          },
          {
            id: 'gyeonggi_69_041',
            name: '항동1가',
          },
          {
            id: 'gyeonggi_69_042',
            name: '항동2가',
          },
          {
            id: 'gyeonggi_69_043',
            name: '항동3가',
          },
          {
            id: 'gyeonggi_69_044',
            name: '항동4가',
          },
          {
            id: 'gyeonggi_69_045',
            name: '항동5가',
          },
          {
            id: 'gyeonggi_69_046',
            name: '항동6가',
          },
          {
            id: 'gyeonggi_69_047',
            name: '항동7가',
          },
          {
            id: 'gyeonggi_69_048',
            name: '해안동',
          },
          {
            id: 'gyeonggi_69_049',
            name: '해안동1가',
          },
          {
            id: 'gyeonggi_69_050',
            name: '해안동2가',
          },
          {
            id: 'gyeonggi_69_051',
            name: '해안동3가',
          },
          {
            id: 'gyeonggi_69_052',
            name: '해안동4가',
          },
        ],
      },
      {
        id: 'gyeonggi_70',
        name: '파주군',
        subregions: [
          {
            id: 'gyeonggi_70_001',
            name: '광탄면',
          },
          {
            id: 'gyeonggi_70_002',
            name: '교하면',
          },
          {
            id: 'gyeonggi_70_003',
            name: '군내면',
          },
          {
            id: 'gyeonggi_70_004',
            name: '금촌읍',
          },
          {
            id: 'gyeonggi_70_005',
            name: '문산읍',
          },
          {
            id: 'gyeonggi_70_006',
            name: '법원읍',
          },
          {
            id: 'gyeonggi_70_007',
            name: '아동면',
          },
          {
            id: 'gyeonggi_70_008',
            name: '월롱면',
          },
          {
            id: 'gyeonggi_70_009',
            name: '임진면',
          },
          {
            id: 'gyeonggi_70_010',
            name: '장단면',
          },
          {
            id: 'gyeonggi_70_011',
            name: '적성면',
          },
          {
            id: 'gyeonggi_70_012',
            name: '조리면',
          },
          {
            id: 'gyeonggi_70_013',
            name: '주내면',
          },
          {
            id: 'gyeonggi_70_014',
            name: '주내읍',
          },
          {
            id: 'gyeonggi_70_015',
            name: '진동면',
          },
          {
            id: 'gyeonggi_70_016',
            name: '진서면',
          },
          {
            id: 'gyeonggi_70_017',
            name: '천현면',
          },
          {
            id: 'gyeonggi_70_018',
            name: '탄현면',
          },
          {
            id: 'gyeonggi_70_019',
            name: '파주읍',
          },
          {
            id: 'gyeonggi_70_020',
            name: '파평면',
          },
        ],
      },
      {
        id: 'gyeonggi_71',
        name: '파주시',
        subregions: [
          {
            id: 'gyeonggi_71_001',
            name: '검산동',
          },
          {
            id: 'gyeonggi_71_002',
            name: '광탄면',
          },
          {
            id: 'gyeonggi_71_003',
            name: '교하동',
          },
          {
            id: 'gyeonggi_71_004',
            name: '교하면',
          },
          {
            id: 'gyeonggi_71_005',
            name: '교하읍',
          },
          {
            id: 'gyeonggi_71_006',
            name: '군내면',
          },
          {
            id: 'gyeonggi_71_007',
            name: '금능동',
          },
          {
            id: 'gyeonggi_71_008',
            name: '금릉동',
          },
          {
            id: 'gyeonggi_71_009',
            name: '금촌동',
          },
          {
            id: 'gyeonggi_71_010',
            name: '다율동',
          },
          {
            id: 'gyeonggi_71_011',
            name: '당하동',
          },
          {
            id: 'gyeonggi_71_012',
            name: '동패동',
          },
          {
            id: 'gyeonggi_71_013',
            name: '맥금동',
          },
          {
            id: 'gyeonggi_71_014',
            name: '목동동',
          },
          {
            id: 'gyeonggi_71_015',
            name: '문발동',
          },
          {
            id: 'gyeonggi_71_016',
            name: '문산읍',
          },
          {
            id: 'gyeonggi_71_017',
            name: '법원읍',
          },
          {
            id: 'gyeonggi_71_018',
            name: '산남동',
          },
          {
            id: 'gyeonggi_71_019',
            name: '상지석동',
          },
          {
            id: 'gyeonggi_71_020',
            name: '서패동',
          },
          {
            id: 'gyeonggi_71_021',
            name: '송촌동',
          },
          {
            id: 'gyeonggi_71_022',
            name: '신촌동',
          },
          {
            id: 'gyeonggi_71_023',
            name: '아동동',
          },
          {
            id: 'gyeonggi_71_024',
            name: '야당동',
          },
          {
            id: 'gyeonggi_71_025',
            name: '야동동',
          },
          {
            id: 'gyeonggi_71_026',
            name: '연다산동',
          },
          {
            id: 'gyeonggi_71_027',
            name: '오도동',
          },
          {
            id: 'gyeonggi_71_028',
            name: '와동동',
          },
          {
            id: 'gyeonggi_71_029',
            name: '월롱면',
          },
          {
            id: 'gyeonggi_71_030',
            name: '장단면',
          },
          {
            id: 'gyeonggi_71_031',
            name: '적성면',
          },
          {
            id: 'gyeonggi_71_032',
            name: '조리면',
          },
          {
            id: 'gyeonggi_71_033',
            name: '조리읍',
          },
          {
            id: 'gyeonggi_71_034',
            name: '진동면',
          },
          {
            id: 'gyeonggi_71_035',
            name: '진서면',
          },
          {
            id: 'gyeonggi_71_036',
            name: '탄현면',
          },
          {
            id: 'gyeonggi_71_037',
            name: '파주읍',
          },
          {
            id: 'gyeonggi_71_038',
            name: '파평면',
          },
          {
            id: 'gyeonggi_71_039',
            name: '하지석동',
          },
        ],
      },
      {
        id: 'gyeonggi_72',
        name: '평택군',
        subregions: [
          {
            id: 'gyeonggi_72_001',
            name: '고덕면',
          },
          {
            id: 'gyeonggi_72_002',
            name: '서탄면',
          },
          {
            id: 'gyeonggi_72_003',
            name: '송탄면',
          },
          {
            id: 'gyeonggi_72_004',
            name: '송탄읍',
          },
          {
            id: 'gyeonggi_72_005',
            name: '안중면',
          },
          {
            id: 'gyeonggi_72_006',
            name: '오성면',
          },
          {
            id: 'gyeonggi_72_007',
            name: '진위면',
          },
          {
            id: 'gyeonggi_72_008',
            name: '청북면',
          },
          {
            id: 'gyeonggi_72_009',
            name: '팽성면',
          },
          {
            id: 'gyeonggi_72_010',
            name: '팽성읍',
          },
          {
            id: 'gyeonggi_72_011',
            name: '평택읍',
          },
          {
            id: 'gyeonggi_72_012',
            name: '포승면',
          },
          {
            id: 'gyeonggi_72_013',
            name: '현덕면',
          },
        ],
      },
      {
        id: 'gyeonggi_73',
        name: '평택시',
        subregions: [
          {
            id: 'gyeonggi_73_001',
            name: '가재동',
          },
          {
            id: 'gyeonggi_73_002',
            name: '고덕동',
          },
          {
            id: 'gyeonggi_73_003',
            name: '고덕면',
          },
          {
            id: 'gyeonggi_73_004',
            name: '군문동',
          },
          {
            id: 'gyeonggi_73_005',
            name: '도일동',
          },
          {
            id: 'gyeonggi_73_006',
            name: '독곡동',
          },
          {
            id: 'gyeonggi_73_007',
            name: '동삭동',
          },
          {
            id: 'gyeonggi_73_008',
            name: '모곡동',
          },
          {
            id: 'gyeonggi_73_009',
            name: '비전1동',
          },
          {
            id: 'gyeonggi_73_010',
            name: '비전2동',
          },
          {
            id: 'gyeonggi_73_011',
            name: '비전동',
          },
          {
            id: 'gyeonggi_73_012',
            name: '서부동',
          },
          {
            id: 'gyeonggi_73_013',
            name: '서정동',
          },
          {
            id: 'gyeonggi_73_014',
            name: '서탄면',
          },
          {
            id: 'gyeonggi_73_015',
            name: '세교동',
          },
          {
            id: 'gyeonggi_73_016',
            name: '소사동',
          },
          {
            id: 'gyeonggi_73_017',
            name: '신대동',
          },
          {
            id: 'gyeonggi_73_018',
            name: '신장동',
          },
          {
            id: 'gyeonggi_73_019',
            name: '신평동',
          },
          {
            id: 'gyeonggi_73_020',
            name: '안중면',
          },
          {
            id: 'gyeonggi_73_021',
            name: '안중읍',
          },
          {
            id: 'gyeonggi_73_022',
            name: '오성면',
          },
          {
            id: 'gyeonggi_73_023',
            name: '용이동',
          },
          {
            id: 'gyeonggi_73_024',
            name: '월곡동',
          },
          {
            id: 'gyeonggi_73_025',
            name: '유천동',
          },
          {
            id: 'gyeonggi_73_026',
            name: '이충동',
          },
          {
            id: 'gyeonggi_73_027',
            name: '장당동',
          },
          {
            id: 'gyeonggi_73_028',
            name: '장안동',
          },
          {
            id: 'gyeonggi_73_029',
            name: '죽백동',
          },
          {
            id: 'gyeonggi_73_030',
            name: '지산동',
          },
          {
            id: 'gyeonggi_73_031',
            name: '지제동',
          },
          {
            id: 'gyeonggi_73_032',
            name: '진위면',
          },
          {
            id: 'gyeonggi_73_033',
            name: '청룡동',
          },
          {
            id: 'gyeonggi_73_034',
            name: '청북면',
          },
          {
            id: 'gyeonggi_73_035',
            name: '청북읍',
          },
          {
            id: 'gyeonggi_73_036',
            name: '칠괴동',
          },
          {
            id: 'gyeonggi_73_037',
            name: '칠원동',
          },
          {
            id: 'gyeonggi_73_038',
            name: '통복동',
          },
          {
            id: 'gyeonggi_73_039',
            name: '팽성읍',
          },
          {
            id: 'gyeonggi_73_040',
            name: '평택동',
          },
          {
            id: 'gyeonggi_73_041',
            name: '포승면',
          },
          {
            id: 'gyeonggi_73_042',
            name: '포승읍',
          },
          {
            id: 'gyeonggi_73_043',
            name: '합정동',
          },
          {
            id: 'gyeonggi_73_044',
            name: '현덕면',
          },
        ],
      },
      {
        id: 'gyeonggi_74',
        name: '포천군',
        subregions: [
          {
            id: 'gyeonggi_74_001',
            name: '가산면',
          },
          {
            id: 'gyeonggi_74_002',
            name: '관인면',
          },
          {
            id: 'gyeonggi_74_003',
            name: '군내면',
          },
          {
            id: 'gyeonggi_74_004',
            name: '내촌면',
          },
          {
            id: 'gyeonggi_74_005',
            name: '소흘면',
          },
          {
            id: 'gyeonggi_74_006',
            name: '소흘읍',
          },
          {
            id: 'gyeonggi_74_007',
            name: '신북면',
          },
          {
            id: 'gyeonggi_74_008',
            name: '영북면',
          },
          {
            id: 'gyeonggi_74_009',
            name: '영중면',
          },
          {
            id: 'gyeonggi_74_010',
            name: '이동면',
          },
          {
            id: 'gyeonggi_74_011',
            name: '일동면',
          },
          {
            id: 'gyeonggi_74_012',
            name: '창수면',
          },
          {
            id: 'gyeonggi_74_013',
            name: '청산면',
          },
          {
            id: 'gyeonggi_74_014',
            name: '포천면',
          },
          {
            id: 'gyeonggi_74_015',
            name: '포천읍',
          },
          {
            id: 'gyeonggi_74_016',
            name: '화현면',
          },
        ],
      },
      {
        id: 'gyeonggi_75',
        name: '포천시',
        subregions: [
          {
            id: 'gyeonggi_75_001',
            name: '가산면',
          },
          {
            id: 'gyeonggi_75_002',
            name: '관인면',
          },
          {
            id: 'gyeonggi_75_003',
            name: '군내면',
          },
          {
            id: 'gyeonggi_75_004',
            name: '내촌면',
          },
          {
            id: 'gyeonggi_75_005',
            name: '동교동',
          },
          {
            id: 'gyeonggi_75_006',
            name: '선단동',
          },
          {
            id: 'gyeonggi_75_007',
            name: '설운동',
          },
          {
            id: 'gyeonggi_75_008',
            name: '소흘읍',
          },
          {
            id: 'gyeonggi_75_009',
            name: '신북면',
          },
          {
            id: 'gyeonggi_75_010',
            name: '신읍동',
          },
          {
            id: 'gyeonggi_75_011',
            name: '어룡동',
          },
          {
            id: 'gyeonggi_75_012',
            name: '영북면',
          },
          {
            id: 'gyeonggi_75_013',
            name: '영중면',
          },
          {
            id: 'gyeonggi_75_014',
            name: '이동면',
          },
          {
            id: 'gyeonggi_75_015',
            name: '일동면',
          },
          {
            id: 'gyeonggi_75_016',
            name: '자작동',
          },
          {
            id: 'gyeonggi_75_017',
            name: '창수면',
          },
          {
            id: 'gyeonggi_75_018',
            name: '화현면',
          },
        ],
      },
      {
        id: 'gyeonggi_76',
        name: '하남시',
        subregions: [
          {
            id: 'gyeonggi_76_001',
            name: '감북동',
          },
          {
            id: 'gyeonggi_76_002',
            name: '감이동',
          },
          {
            id: 'gyeonggi_76_003',
            name: '감일동',
          },
          {
            id: 'gyeonggi_76_004',
            name: '광암동',
          },
          {
            id: 'gyeonggi_76_005',
            name: '교산동',
          },
          {
            id: 'gyeonggi_76_006',
            name: '당정동',
          },
          {
            id: 'gyeonggi_76_007',
            name: '덕풍1동',
          },
          {
            id: 'gyeonggi_76_008',
            name: '덕풍2동',
          },
          {
            id: 'gyeonggi_76_009',
            name: '덕풍3동',
          },
          {
            id: 'gyeonggi_76_010',
            name: '덕풍동',
          },
          {
            id: 'gyeonggi_76_011',
            name: '망월동',
          },
          {
            id: 'gyeonggi_76_012',
            name: '미사동',
          },
          {
            id: 'gyeonggi_76_013',
            name: '배알미동',
          },
          {
            id: 'gyeonggi_76_014',
            name: '상사창동',
          },
          {
            id: 'gyeonggi_76_015',
            name: '상산곡동',
          },
          {
            id: 'gyeonggi_76_016',
            name: '선동',
          },
          {
            id: 'gyeonggi_76_017',
            name: '신장1동',
          },
          {
            id: 'gyeonggi_76_018',
            name: '신장2동',
          },
          {
            id: 'gyeonggi_76_019',
            name: '신장동',
          },
          {
            id: 'gyeonggi_76_020',
            name: '창우동',
          },
          {
            id: 'gyeonggi_76_021',
            name: '천현동',
          },
          {
            id: 'gyeonggi_76_022',
            name: '초이동',
          },
          {
            id: 'gyeonggi_76_023',
            name: '초일동',
          },
          {
            id: 'gyeonggi_76_024',
            name: '춘궁동',
          },
          {
            id: 'gyeonggi_76_025',
            name: '풍산동',
          },
          {
            id: 'gyeonggi_76_026',
            name: '하사창동',
          },
          {
            id: 'gyeonggi_76_027',
            name: '하산곡동',
          },
          {
            id: 'gyeonggi_76_028',
            name: '학암동',
          },
          {
            id: 'gyeonggi_76_029',
            name: '항동',
          },
        ],
      },
      {
        id: 'gyeonggi_77',
        name: '화성군',
        subregions: [
          {
            id: 'gyeonggi_77_001',
            name: '남양면',
          },
          {
            id: 'gyeonggi_77_002',
            name: '동탄면',
          },
          {
            id: 'gyeonggi_77_003',
            name: '마도면',
          },
          {
            id: 'gyeonggi_77_004',
            name: '매송면',
          },
          {
            id: 'gyeonggi_77_005',
            name: '반월면',
          },
          {
            id: 'gyeonggi_77_006',
            name: '봉담면',
          },
          {
            id: 'gyeonggi_77_007',
            name: '봉담읍',
          },
          {
            id: 'gyeonggi_77_008',
            name: '비봉면',
          },
          {
            id: 'gyeonggi_77_009',
            name: '서신면',
          },
          {
            id: 'gyeonggi_77_010',
            name: '송산면',
          },
          {
            id: 'gyeonggi_77_011',
            name: '안용면',
          },
          {
            id: 'gyeonggi_77_012',
            name: '양감면',
          },
          {
            id: 'gyeonggi_77_013',
            name: '오산면',
          },
          {
            id: 'gyeonggi_77_014',
            name: '오산읍',
          },
          {
            id: 'gyeonggi_77_015',
            name: '우정면',
          },
          {
            id: 'gyeonggi_77_016',
            name: '일왕면',
          },
          {
            id: 'gyeonggi_77_017',
            name: '장안면',
          },
          {
            id: 'gyeonggi_77_018',
            name: '정남면',
          },
          {
            id: 'gyeonggi_77_019',
            name: '태안면',
          },
          {
            id: 'gyeonggi_77_020',
            name: '태안읍',
          },
          {
            id: 'gyeonggi_77_021',
            name: '태장면',
          },
          {
            id: 'gyeonggi_77_022',
            name: '팔탄면',
          },
          {
            id: 'gyeonggi_77_023',
            name: '향남면',
          },
        ],
      },
      {
        id: 'gyeonggi_78',
        name: '화성시',
        subregions: [
          {
            id: 'gyeonggi_78_001',
            name: '금곡동',
          },
          {
            id: 'gyeonggi_78_002',
            name: '기산동',
          },
          {
            id: 'gyeonggi_78_003',
            name: '기안동',
          },
          {
            id: 'gyeonggi_78_004',
            name: '남양동',
          },
          {
            id: 'gyeonggi_78_005',
            name: '남양읍',
          },
          {
            id: 'gyeonggi_78_006',
            name: '능동',
          },
          {
            id: 'gyeonggi_78_007',
            name: '동탄면',
          },
          {
            id: 'gyeonggi_78_008',
            name: '마도면',
          },
          {
            id: 'gyeonggi_78_009',
            name: '매송면',
          },
          {
            id: 'gyeonggi_78_010',
            name: '목동',
          },
          {
            id: 'gyeonggi_78_011',
            name: '무송동',
          },
          {
            id: 'gyeonggi_78_012',
            name: '문호동',
          },
          {
            id: 'gyeonggi_78_013',
            name: '반송동',
          },
          {
            id: 'gyeonggi_78_014',
            name: '반월동',
          },
          {
            id: 'gyeonggi_78_015',
            name: '반정동',
          },
          {
            id: 'gyeonggi_78_016',
            name: '방교동',
          },
          {
            id: 'gyeonggi_78_017',
            name: '배양동',
          },
          {
            id: 'gyeonggi_78_018',
            name: '병점동',
          },
          {
            id: 'gyeonggi_78_019',
            name: '봉담읍',
          },
          {
            id: 'gyeonggi_78_020',
            name: '북양동',
          },
          {
            id: 'gyeonggi_78_021',
            name: '비봉면',
          },
          {
            id: 'gyeonggi_78_022',
            name: '산척동',
          },
          {
            id: 'gyeonggi_78_023',
            name: '새솔동',
          },
          {
            id: 'gyeonggi_78_024',
            name: '서신면',
          },
          {
            id: 'gyeonggi_78_025',
            name: '석우동',
          },
          {
            id: 'gyeonggi_78_026',
            name: '송동',
          },
          {
            id: 'gyeonggi_78_027',
            name: '송림동',
          },
          {
            id: 'gyeonggi_78_028',
            name: '송산동',
          },
          {
            id: 'gyeonggi_78_029',
            name: '송산면',
          },
          {
            id: 'gyeonggi_78_030',
            name: '수화동',
          },
          {
            id: 'gyeonggi_78_031',
            name: '시동',
          },
          {
            id: 'gyeonggi_78_032',
            name: '신남동',
          },
          {
            id: 'gyeonggi_78_033',
            name: '신동',
          },
          {
            id: 'gyeonggi_78_034',
            name: '신외동',
          },
          {
            id: 'gyeonggi_78_035',
            name: '안녕동',
          },
          {
            id: 'gyeonggi_78_036',
            name: '안석동',
          },
          {
            id: 'gyeonggi_78_037',
            name: '양감면',
          },
          {
            id: 'gyeonggi_78_038',
            name: '영천동',
          },
          {
            id: 'gyeonggi_78_039',
            name: '오산동',
          },
          {
            id: 'gyeonggi_78_040',
            name: '온석동',
          },
          {
            id: 'gyeonggi_78_041',
            name: '우정면',
          },
          {
            id: 'gyeonggi_78_042',
            name: '우정읍',
          },
          {
            id: 'gyeonggi_78_043',
            name: '원천동',
          },
          {
            id: 'gyeonggi_78_044',
            name: '장덕동',
          },
          {
            id: 'gyeonggi_78_045',
            name: '장안면',
          },
          {
            id: 'gyeonggi_78_046',
            name: '장전동',
          },
          {
            id: 'gyeonggi_78_047',
            name: '장지동',
          },
          {
            id: 'gyeonggi_78_048',
            name: '정남면',
          },
          {
            id: 'gyeonggi_78_049',
            name: '중동',
          },
          {
            id: 'gyeonggi_78_050',
            name: '진안동',
          },
          {
            id: 'gyeonggi_78_051',
            name: '청계동',
          },
          {
            id: 'gyeonggi_78_052',
            name: '태안읍',
          },
          {
            id: 'gyeonggi_78_053',
            name: '팔탄면',
          },
          {
            id: 'gyeonggi_78_054',
            name: '향남면',
          },
          {
            id: 'gyeonggi_78_055',
            name: '향남읍',
          },
          {
            id: 'gyeonggi_78_056',
            name: '활초동',
          },
          {
            id: 'gyeonggi_78_057',
            name: '황계동',
          },
        ],
      },
    ],
  },
  {
    id: 'incheon',
    name: '인천',
    subregions: [
      {
        id: 'incheon_01',
        name: '강화군',
        subregions: [
          {
            id: 'incheon_01_001',
            name: '강화읍',
          },
          {
            id: 'incheon_01_002',
            name: '교동면',
          },
          {
            id: 'incheon_01_003',
            name: '길상면',
          },
          {
            id: 'incheon_01_004',
            name: '내가면',
          },
          {
            id: 'incheon_01_005',
            name: '불은면',
          },
          {
            id: 'incheon_01_006',
            name: '삼산면',
          },
          {
            id: 'incheon_01_007',
            name: '서도면',
          },
          {
            id: 'incheon_01_008',
            name: '선원면',
          },
          {
            id: 'incheon_01_009',
            name: '송해면',
          },
          {
            id: 'incheon_01_010',
            name: '양도면',
          },
          {
            id: 'incheon_01_011',
            name: '양사면',
          },
          {
            id: 'incheon_01_012',
            name: '하점면',
          },
          {
            id: 'incheon_01_013',
            name: '화도면',
          },
        ],
      },
      {
        id: 'incheon_02',
        name: '계양구',
        subregions: [
          {
            id: 'incheon_02_001',
            name: '갈현동',
          },
          {
            id: 'incheon_02_002',
            name: '계산동',
          },
          {
            id: 'incheon_02_003',
            name: '귤현동',
          },
          {
            id: 'incheon_02_004',
            name: '노오지동',
          },
          {
            id: 'incheon_02_005',
            name: '다남동',
          },
          {
            id: 'incheon_02_006',
            name: '동양동',
          },
          {
            id: 'incheon_02_007',
            name: '둑실동',
          },
          {
            id: 'incheon_02_008',
            name: '목상동',
          },
          {
            id: 'incheon_02_009',
            name: '박촌동',
          },
          {
            id: 'incheon_02_010',
            name: '방축동',
          },
          {
            id: 'incheon_02_011',
            name: '병방동',
          },
          {
            id: 'incheon_02_012',
            name: '삼산동',
          },
          {
            id: 'incheon_02_013',
            name: '상야동',
          },
          {
            id: 'incheon_02_014',
            name: '서운동',
          },
          {
            id: 'incheon_02_015',
            name: '선주지동',
          },
          {
            id: 'incheon_02_016',
            name: '오류동',
          },
          {
            id: 'incheon_02_017',
            name: '용종동',
          },
          {
            id: 'incheon_02_018',
            name: '이화동',
          },
          {
            id: 'incheon_02_019',
            name: '임학동',
          },
          {
            id: 'incheon_02_020',
            name: '작전동',
          },
          {
            id: 'incheon_02_021',
            name: '장기동',
          },
          {
            id: 'incheon_02_022',
            name: '평동',
          },
          {
            id: 'incheon_02_023',
            name: '하야동',
          },
          {
            id: 'incheon_02_024',
            name: '효성동',
          },
        ],
      },
      {
        id: 'incheon_03',
        name: '남구',
        subregions: [
          {
            id: 'incheon_03_001',
            name: '간석동',
          },
          {
            id: 'incheon_03_002',
            name: '고잔동',
          },
          {
            id: 'incheon_03_003',
            name: '관교동',
          },
          {
            id: 'incheon_03_004',
            name: '관교동',
          },
          {
            id: 'incheon_03_005',
            name: '구월동',
          },
          {
            id: 'incheon_03_006',
            name: '남촌동',
          },
          {
            id: 'incheon_03_007',
            name: '논현동',
          },
          {
            id: 'incheon_03_008',
            name: '도림동',
          },
          {
            id: 'incheon_03_009',
            name: '도화1동',
          },
          {
            id: 'incheon_03_010',
            name: '도화2동',
          },
          {
            id: 'incheon_03_011',
            name: '도화3동',
          },
          {
            id: 'incheon_03_012',
            name: '도화동',
          },
          {
            id: 'incheon_03_013',
            name: '도화동',
          },
          {
            id: 'incheon_03_014',
            name: '동춘동',
          },
          {
            id: 'incheon_03_015',
            name: '동춘동',
          },
          {
            id: 'incheon_03_016',
            name: '만수동',
          },
          {
            id: 'incheon_03_017',
            name: '문학동',
          },
          {
            id: 'incheon_03_018',
            name: '문학동',
          },
          {
            id: 'incheon_03_019',
            name: '서창동',
          },
          {
            id: 'incheon_03_020',
            name: '선학동',
          },
          {
            id: 'incheon_03_021',
            name: '선학동',
          },
          {
            id: 'incheon_03_022',
            name: '수산동',
          },
          {
            id: 'incheon_03_023',
            name: '숭의1동',
          },
          {
            id: 'incheon_03_024',
            name: '숭의2동',
          },
          {
            id: 'incheon_03_025',
            name: '숭의3동',
          },
          {
            id: 'incheon_03_026',
            name: '숭의4동',
          },
          {
            id: 'incheon_03_027',
            name: '숭의동',
          },
          {
            id: 'incheon_03_028',
            name: '숭의동',
          },
          {
            id: 'incheon_03_029',
            name: '연수동',
          },
          {
            id: 'incheon_03_030',
            name: '연수동',
          },
          {
            id: 'incheon_03_031',
            name: '옥련동',
          },
          {
            id: 'incheon_03_032',
            name: '옥련동',
          },
          {
            id: 'incheon_03_033',
            name: '용현1동',
          },
          {
            id: 'incheon_03_034',
            name: '용현2동',
          },
          {
            id: 'incheon_03_035',
            name: '용현3동',
          },
          {
            id: 'incheon_03_036',
            name: '용현4동',
          },
          {
            id: 'incheon_03_037',
            name: '용현5동',
          },
          {
            id: 'incheon_03_038',
            name: '용현동',
          },
          {
            id: 'incheon_03_039',
            name: '용현동',
          },
          {
            id: 'incheon_03_040',
            name: '운연동',
          },
          {
            id: 'incheon_03_041',
            name: '장수동',
          },
          {
            id: 'incheon_03_042',
            name: '주안1동',
          },
          {
            id: 'incheon_03_043',
            name: '주안2동',
          },
          {
            id: 'incheon_03_044',
            name: '주안3동',
          },
          {
            id: 'incheon_03_045',
            name: '주안4동',
          },
          {
            id: 'incheon_03_046',
            name: '주안5동',
          },
          {
            id: 'incheon_03_047',
            name: '주안6동',
          },
          {
            id: 'incheon_03_048',
            name: '주안7동',
          },
          {
            id: 'incheon_03_049',
            name: '주안8동',
          },
          {
            id: 'incheon_03_050',
            name: '주안동',
          },
          {
            id: 'incheon_03_051',
            name: '주안동',
          },
          {
            id: 'incheon_03_052',
            name: '청학동',
          },
          {
            id: 'incheon_03_053',
            name: '청학동',
          },
          {
            id: 'incheon_03_054',
            name: '학익1동',
          },
          {
            id: 'incheon_03_055',
            name: '학익2동',
          },
          {
            id: 'incheon_03_056',
            name: '학익동',
          },
          {
            id: 'incheon_03_057',
            name: '학익동',
          },
        ],
      },
      {
        id: 'incheon_04',
        name: '남동구',
        subregions: [
          {
            id: 'incheon_04_001',
            name: '간석1동',
          },
          {
            id: 'incheon_04_002',
            name: '간석2동',
          },
          {
            id: 'incheon_04_003',
            name: '간석3동',
          },
          {
            id: 'incheon_04_004',
            name: '간석동',
          },
          {
            id: 'incheon_04_005',
            name: '간석동',
          },
          {
            id: 'incheon_04_006',
            name: '고잔동',
          },
          {
            id: 'incheon_04_007',
            name: '고잔동',
          },
          {
            id: 'incheon_04_008',
            name: '구월1동',
          },
          {
            id: 'incheon_04_009',
            name: '구월2동',
          },
          {
            id: 'incheon_04_010',
            name: '구월동',
          },
          {
            id: 'incheon_04_011',
            name: '구월동',
          },
          {
            id: 'incheon_04_012',
            name: '남촌동',
          },
          {
            id: 'incheon_04_013',
            name: '남촌동',
          },
          {
            id: 'incheon_04_014',
            name: '논현동',
          },
          {
            id: 'incheon_04_015',
            name: '논현동',
          },
          {
            id: 'incheon_04_016',
            name: '도림동',
          },
          {
            id: 'incheon_04_017',
            name: '도림동',
          },
          {
            id: 'incheon_04_018',
            name: '만수1동',
          },
          {
            id: 'incheon_04_019',
            name: '만수2동',
          },
          {
            id: 'incheon_04_020',
            name: '만수3동',
          },
          {
            id: 'incheon_04_021',
            name: '만수동',
          },
          {
            id: 'incheon_04_022',
            name: '만수동',
          },
          {
            id: 'incheon_04_023',
            name: '서창동',
          },
          {
            id: 'incheon_04_024',
            name: '서창동',
          },
          {
            id: 'incheon_04_025',
            name: '선학동',
          },
          {
            id: 'incheon_04_026',
            name: '수산동',
          },
          {
            id: 'incheon_04_027',
            name: '수산동',
          },
          {
            id: 'incheon_04_028',
            name: '운연동',
          },
          {
            id: 'incheon_04_029',
            name: '운연동',
          },
          {
            id: 'incheon_04_030',
            name: '장수동',
          },
          {
            id: 'incheon_04_031',
            name: '장수동',
          },
        ],
      },
      {
        id: 'incheon_05',
        name: '동구',
        subregions: [
          {
            id: 'incheon_05_001',
            name: '금곡동',
          },
          {
            id: 'incheon_05_002',
            name: '금곡동',
          },
          {
            id: 'incheon_05_003',
            name: '금창동',
          },
          {
            id: 'incheon_05_004',
            name: '만석동',
          },
          {
            id: 'incheon_05_005',
            name: '만석동',
          },
          {
            id: 'incheon_05_006',
            name: '송림1동',
          },
          {
            id: 'incheon_05_007',
            name: '송림2동',
          },
          {
            id: 'incheon_05_008',
            name: '송림3동',
          },
          {
            id: 'incheon_05_009',
            name: '송림4동',
          },
          {
            id: 'incheon_05_010',
            name: '송림5동',
          },
          {
            id: 'incheon_05_011',
            name: '송림6동',
          },
          {
            id: 'incheon_05_012',
            name: '송림동',
          },
          {
            id: 'incheon_05_013',
            name: '송림동',
          },
          {
            id: 'incheon_05_014',
            name: '송현1동',
          },
          {
            id: 'incheon_05_015',
            name: '송현2동',
          },
          {
            id: 'incheon_05_016',
            name: '송현3동',
          },
          {
            id: 'incheon_05_017',
            name: '송현동',
          },
          {
            id: 'incheon_05_018',
            name: '송현동',
          },
          {
            id: 'incheon_05_019',
            name: '창영동',
          },
          {
            id: 'incheon_05_020',
            name: '창영동',
          },
          {
            id: 'incheon_05_021',
            name: '화수1동',
          },
          {
            id: 'incheon_05_022',
            name: '화수2동',
          },
          {
            id: 'incheon_05_023',
            name: '화수동',
          },
          {
            id: 'incheon_05_024',
            name: '화수동',
          },
          {
            id: 'incheon_05_025',
            name: '화평동',
          },
          {
            id: 'incheon_05_026',
            name: '화평동',
          },
        ],
      },
      {
        id: 'incheon_06',
        name: '미추홀구',
        subregions: [
          {
            id: 'incheon_06_001',
            name: '관교동',
          },
          {
            id: 'incheon_06_002',
            name: '도화동',
          },
          {
            id: 'incheon_06_003',
            name: '문학동',
          },
          {
            id: 'incheon_06_004',
            name: '숭의동',
          },
          {
            id: 'incheon_06_005',
            name: '용현동',
          },
          {
            id: 'incheon_06_006',
            name: '주안동',
          },
          {
            id: 'incheon_06_007',
            name: '학익동',
          },
        ],
      },
      {
        id: 'incheon_07',
        name: '부평구',
        subregions: [
          {
            id: 'incheon_07_001',
            name: '갈산동',
          },
          {
            id: 'incheon_07_002',
            name: '계산동',
          },
          {
            id: 'incheon_07_003',
            name: '구산동',
          },
          {
            id: 'incheon_07_004',
            name: '부개동',
          },
          {
            id: 'incheon_07_005',
            name: '부평동',
          },
          {
            id: 'incheon_07_006',
            name: '산곡동',
          },
          {
            id: 'incheon_07_007',
            name: '삼산동',
          },
          {
            id: 'incheon_07_008',
            name: '서운동',
          },
          {
            id: 'incheon_07_009',
            name: '십정동',
          },
          {
            id: 'incheon_07_010',
            name: '일신동',
          },
          {
            id: 'incheon_07_011',
            name: '작전동',
          },
          {
            id: 'incheon_07_012',
            name: '청천동',
          },
          {
            id: 'incheon_07_013',
            name: '효성동',
          },
        ],
      },
      {
        id: 'incheon_08',
        name: '북구',
        subregions: [
          {
            id: 'incheon_08_001',
            name: '가정동',
          },
          {
            id: 'incheon_08_002',
            name: '가좌동',
          },
          {
            id: 'incheon_08_003',
            name: '갈산동',
          },
          {
            id: 'incheon_08_004',
            name: '갈산동',
          },
          {
            id: 'incheon_08_005',
            name: '갈현동',
          },
          {
            id: 'incheon_08_006',
            name: '갈현동',
          },
          {
            id: 'incheon_08_007',
            name: '검암동',
          },
          {
            id: 'incheon_08_008',
            name: '경서동',
          },
          {
            id: 'incheon_08_009',
            name: '계산동',
          },
          {
            id: 'incheon_08_010',
            name: '계산동',
          },
          {
            id: 'incheon_08_011',
            name: '계양동',
          },
          {
            id: 'incheon_08_012',
            name: '공촌동',
          },
          {
            id: 'incheon_08_013',
            name: '구산동',
          },
          {
            id: 'incheon_08_014',
            name: '구산동',
          },
          {
            id: 'incheon_08_015',
            name: '귤현동',
          },
          {
            id: 'incheon_08_016',
            name: '귤현동',
          },
          {
            id: 'incheon_08_017',
            name: '노오지동',
          },
          {
            id: 'incheon_08_018',
            name: '노오지동',
          },
          {
            id: 'incheon_08_019',
            name: '다남동',
          },
          {
            id: 'incheon_08_020',
            name: '다남동',
          },
          {
            id: 'incheon_08_021',
            name: '동양동',
          },
          {
            id: 'incheon_08_022',
            name: '동양동',
          },
          {
            id: 'incheon_08_023',
            name: '둑실동',
          },
          {
            id: 'incheon_08_024',
            name: '둑실동',
          },
          {
            id: 'incheon_08_025',
            name: '목상동',
          },
          {
            id: 'incheon_08_026',
            name: '목상동',
          },
          {
            id: 'incheon_08_027',
            name: '박촌동',
          },
          {
            id: 'incheon_08_028',
            name: '박촌동',
          },
          {
            id: 'incheon_08_029',
            name: '방축동',
          },
          {
            id: 'incheon_08_030',
            name: '방축동',
          },
          {
            id: 'incheon_08_031',
            name: '백석동',
          },
          {
            id: 'incheon_08_032',
            name: '병방동',
          },
          {
            id: 'incheon_08_033',
            name: '병방동',
          },
          {
            id: 'incheon_08_034',
            name: '부개1동',
          },
          {
            id: 'incheon_08_035',
            name: '부개2동',
          },
          {
            id: 'incheon_08_036',
            name: '부개동',
          },
          {
            id: 'incheon_08_037',
            name: '부개동',
          },
          {
            id: 'incheon_08_038',
            name: '부평1동',
          },
          {
            id: 'incheon_08_039',
            name: '부평2동',
          },
          {
            id: 'incheon_08_040',
            name: '부평3동',
          },
          {
            id: 'incheon_08_041',
            name: '부평4동',
          },
          {
            id: 'incheon_08_042',
            name: '부평5동',
          },
          {
            id: 'incheon_08_043',
            name: '부평6동',
          },
          {
            id: 'incheon_08_044',
            name: '부평동',
          },
          {
            id: 'incheon_08_045',
            name: '부평동',
          },
          {
            id: 'incheon_08_046',
            name: '산곡1동',
          },
          {
            id: 'incheon_08_047',
            name: '산곡2동',
          },
          {
            id: 'incheon_08_048',
            name: '산곡동',
          },
          {
            id: 'incheon_08_049',
            name: '산곡동',
          },
          {
            id: 'incheon_08_050',
            name: '삼산동',
          },
          {
            id: 'incheon_08_051',
            name: '삼산동',
          },
          {
            id: 'incheon_08_052',
            name: '상야동',
          },
          {
            id: 'incheon_08_053',
            name: '상야동',
          },
          {
            id: 'incheon_08_054',
            name: '서운동',
          },
          {
            id: 'incheon_08_055',
            name: '서운동',
          },
          {
            id: 'incheon_08_056',
            name: '석남동',
          },
          {
            id: 'incheon_08_057',
            name: '선주지동',
          },
          {
            id: 'incheon_08_058',
            name: '선주지동',
          },
          {
            id: 'incheon_08_059',
            name: '시천동',
          },
          {
            id: 'incheon_08_060',
            name: '신현동',
          },
          {
            id: 'incheon_08_061',
            name: '심곡동',
          },
          {
            id: 'incheon_08_062',
            name: '십정1동',
          },
          {
            id: 'incheon_08_063',
            name: '십정2동',
          },
          {
            id: 'incheon_08_064',
            name: '십정동',
          },
          {
            id: 'incheon_08_065',
            name: '십정동',
          },
          {
            id: 'incheon_08_066',
            name: '연희동',
          },
          {
            id: 'incheon_08_067',
            name: '오류동',
          },
          {
            id: 'incheon_08_068',
            name: '오류동',
          },
          {
            id: 'incheon_08_069',
            name: '용종동',
          },
          {
            id: 'incheon_08_070',
            name: '용종동',
          },
          {
            id: 'incheon_08_071',
            name: '원창동',
          },
          {
            id: 'incheon_08_072',
            name: '이화동',
          },
          {
            id: 'incheon_08_073',
            name: '이화동',
          },
          {
            id: 'incheon_08_074',
            name: '일신동',
          },
          {
            id: 'incheon_08_075',
            name: '일신동',
          },
          {
            id: 'incheon_08_076',
            name: '임학동',
          },
          {
            id: 'incheon_08_077',
            name: '임학동',
          },
          {
            id: 'incheon_08_078',
            name: '작전동',
          },
          {
            id: 'incheon_08_079',
            name: '작전동',
          },
          {
            id: 'incheon_08_080',
            name: '장기동',
          },
          {
            id: 'incheon_08_081',
            name: '장기동',
          },
          {
            id: 'incheon_08_082',
            name: '청천동',
          },
          {
            id: 'incheon_08_083',
            name: '청천동',
          },
          {
            id: 'incheon_08_084',
            name: '평동',
          },
          {
            id: 'incheon_08_085',
            name: '평동',
          },
          {
            id: 'incheon_08_086',
            name: '하야동',
          },
          {
            id: 'incheon_08_087',
            name: '하야동',
          },
          {
            id: 'incheon_08_088',
            name: '효성동',
          },
          {
            id: 'incheon_08_089',
            name: '효성동',
          },
        ],
      },
      {
        id: 'incheon_09',
        name: '서구',
        subregions: [
          {
            id: 'incheon_09_001',
            name: '가신동',
          },
          {
            id: 'incheon_09_002',
            name: '가정동',
          },
          {
            id: 'incheon_09_003',
            name: '가정동',
          },
          {
            id: 'incheon_09_004',
            name: '가좌1동',
          },
          {
            id: 'incheon_09_005',
            name: '가좌2동',
          },
          {
            id: 'incheon_09_006',
            name: '가좌3동',
          },
          {
            id: 'incheon_09_007',
            name: '가좌동',
          },
          {
            id: 'incheon_09_008',
            name: '가좌동',
          },
          {
            id: 'incheon_09_009',
            name: '검암동',
          },
          {
            id: 'incheon_09_010',
            name: '검암동',
          },
          {
            id: 'incheon_09_011',
            name: '경서동',
          },
          {
            id: 'incheon_09_012',
            name: '경서동',
          },
          {
            id: 'incheon_09_013',
            name: '공촌동',
          },
          {
            id: 'incheon_09_014',
            name: '공촌동',
          },
          {
            id: 'incheon_09_015',
            name: '금곡동',
          },
          {
            id: 'incheon_09_016',
            name: '당하동',
          },
          {
            id: 'incheon_09_017',
            name: '대곡동',
          },
          {
            id: 'incheon_09_018',
            name: '마전동',
          },
          {
            id: 'incheon_09_019',
            name: '백석동',
          },
          {
            id: 'incheon_09_020',
            name: '백석동',
          },
          {
            id: 'incheon_09_021',
            name: '불노동',
          },
          {
            id: 'incheon_09_022',
            name: '불로동',
          },
          {
            id: 'incheon_09_023',
            name: '석남1동',
          },
          {
            id: 'incheon_09_024',
            name: '석남2동',
          },
          {
            id: 'incheon_09_025',
            name: '석남동',
          },
          {
            id: 'incheon_09_026',
            name: '석남동',
          },
          {
            id: 'incheon_09_027',
            name: '시천동',
          },
          {
            id: 'incheon_09_028',
            name: '시천동',
          },
          {
            id: 'incheon_09_029',
            name: '신현동',
          },
          {
            id: 'incheon_09_030',
            name: '신현동',
          },
          {
            id: 'incheon_09_031',
            name: '심곡동',
          },
          {
            id: 'incheon_09_032',
            name: '심곡동',
          },
          {
            id: 'incheon_09_033',
            name: '연희동',
          },
          {
            id: 'incheon_09_034',
            name: '연희동',
          },
          {
            id: 'incheon_09_035',
            name: '오류동',
          },
          {
            id: 'incheon_09_036',
            name: '왕길동',
          },
          {
            id: 'incheon_09_037',
            name: '원당동',
          },
          {
            id: 'incheon_09_038',
            name: '원창동',
          },
          {
            id: 'incheon_09_039',
            name: '원창동',
          },
          {
            id: 'incheon_09_040',
            name: '청라동',
          },
        ],
      },
      {
        id: 'incheon_10',
        name: '연수구',
        subregions: [
          {
            id: 'incheon_10_001',
            name: '동춘동',
          },
          {
            id: 'incheon_10_002',
            name: '선학동',
          },
          {
            id: 'incheon_10_003',
            name: '송도동',
          },
          {
            id: 'incheon_10_004',
            name: '연수동',
          },
          {
            id: 'incheon_10_005',
            name: '옥련동',
          },
          {
            id: 'incheon_10_006',
            name: '청학동',
          },
        ],
      },
      {
        id: 'incheon_11',
        name: '옹진군',
        subregions: [
          {
            id: 'incheon_11_001',
            name: '대청면',
          },
          {
            id: 'incheon_11_002',
            name: '덕적면',
          },
          {
            id: 'incheon_11_003',
            name: '백령면',
          },
          {
            id: 'incheon_11_004',
            name: '북도면',
          },
          {
            id: 'incheon_11_005',
            name: '송림면',
          },
          {
            id: 'incheon_11_006',
            name: '연평면',
          },
          {
            id: 'incheon_11_007',
            name: '영흥면',
          },
          {
            id: 'incheon_11_008',
            name: '자월면',
          },
        ],
      },
      {
        id: 'incheon_12',
        name: '중구',
        subregions: [
          {
            id: 'incheon_12_001',
            name: '경동',
          },
          {
            id: 'incheon_12_002',
            name: '경동',
          },
          {
            id: 'incheon_12_003',
            name: '관동1가',
          },
          {
            id: 'incheon_12_004',
            name: '관동1가',
          },
          {
            id: 'incheon_12_005',
            name: '관동2가',
          },
          {
            id: 'incheon_12_006',
            name: '관동2가',
          },
          {
            id: 'incheon_12_007',
            name: '관동3가',
          },
          {
            id: 'incheon_12_008',
            name: '관동3가',
          },
          {
            id: 'incheon_12_009',
            name: '남북동',
          },
          {
            id: 'incheon_12_010',
            name: '남북동',
          },
          {
            id: 'incheon_12_011',
            name: '내경동',
          },
          {
            id: 'incheon_12_012',
            name: '내동',
          },
          {
            id: 'incheon_12_013',
            name: '내동',
          },
          {
            id: 'incheon_12_014',
            name: '답동',
          },
          {
            id: 'incheon_12_015',
            name: '답동',
          },
          {
            id: 'incheon_12_016',
            name: '덕교동',
          },
          {
            id: 'incheon_12_017',
            name: '덕교동',
          },
          {
            id: 'incheon_12_018',
            name: '도원동',
          },
          {
            id: 'incheon_12_019',
            name: '도원동',
          },
          {
            id: 'incheon_12_020',
            name: '무의동',
          },
          {
            id: 'incheon_12_021',
            name: '무의동',
          },
          {
            id: 'incheon_12_022',
            name: '북성동1가',
          },
          {
            id: 'incheon_12_023',
            name: '북성동1가',
          },
          {
            id: 'incheon_12_024',
            name: '북성동2가',
          },
          {
            id: 'incheon_12_025',
            name: '북성동2가',
          },
          {
            id: 'incheon_12_026',
            name: '북성동3가',
          },
          {
            id: 'incheon_12_027',
            name: '북성동3가',
          },
          {
            id: 'incheon_12_028',
            name: '사동',
          },
          {
            id: 'incheon_12_029',
            name: '사동',
          },
          {
            id: 'incheon_12_030',
            name: '선린동',
          },
          {
            id: 'incheon_12_031',
            name: '선린동',
          },
          {
            id: 'incheon_12_032',
            name: '선화동',
          },
          {
            id: 'incheon_12_033',
            name: '선화동',
          },
          {
            id: 'incheon_12_034',
            name: '송월동1가',
          },
          {
            id: 'incheon_12_035',
            name: '송월동1가',
          },
          {
            id: 'incheon_12_036',
            name: '송월동2가',
          },
          {
            id: 'incheon_12_037',
            name: '송월동2가',
          },
          {
            id: 'incheon_12_038',
            name: '송월동3가',
          },
          {
            id: 'incheon_12_039',
            name: '송월동3가',
          },
          {
            id: 'incheon_12_040',
            name: '송학동1가',
          },
          {
            id: 'incheon_12_041',
            name: '송학동1가',
          },
          {
            id: 'incheon_12_042',
            name: '송학동2가',
          },
          {
            id: 'incheon_12_043',
            name: '송학동2가',
          },
          {
            id: 'incheon_12_044',
            name: '송학동3가',
          },
          {
            id: 'incheon_12_045',
            name: '송학동3가',
          },
          {
            id: 'incheon_12_046',
            name: '신생동',
          },
          {
            id: 'incheon_12_047',
            name: '신생동',
          },
          {
            id: 'incheon_12_048',
            name: '신선동',
          },
          {
            id: 'incheon_12_049',
            name: '신포동',
          },
          {
            id: 'incheon_12_050',
            name: '신포동',
          },
          {
            id: 'incheon_12_051',
            name: '신흥동1가',
          },
          {
            id: 'incheon_12_052',
            name: '신흥동1가',
          },
          {
            id: 'incheon_12_053',
            name: '신흥동2가',
          },
          {
            id: 'incheon_12_054',
            name: '신흥동2가',
          },
          {
            id: 'incheon_12_055',
            name: '신흥동3가',
          },
          {
            id: 'incheon_12_056',
            name: '신흥동3가',
          },
          {
            id: 'incheon_12_057',
            name: '연안동',
          },
          {
            id: 'incheon_12_058',
            name: '영종동',
          },
          {
            id: 'incheon_12_059',
            name: '용동',
          },
          {
            id: 'incheon_12_060',
            name: '용동',
          },
          {
            id: 'incheon_12_061',
            name: '용유동',
          },
          {
            id: 'incheon_12_062',
            name: '운남동',
          },
          {
            id: 'incheon_12_063',
            name: '운남동',
          },
          {
            id: 'incheon_12_064',
            name: '운북동',
          },
          {
            id: 'incheon_12_065',
            name: '운북동',
          },
          {
            id: 'incheon_12_066',
            name: '운서동',
          },
          {
            id: 'incheon_12_067',
            name: '운서동',
          },
          {
            id: 'incheon_12_068',
            name: '유동',
          },
          {
            id: 'incheon_12_069',
            name: '유동',
          },
          {
            id: 'incheon_12_070',
            name: '율목동',
          },
          {
            id: 'incheon_12_071',
            name: '율목동',
          },
          {
            id: 'incheon_12_072',
            name: '을왕동',
          },
          {
            id: 'incheon_12_073',
            name: '을왕동',
          },
          {
            id: 'incheon_12_074',
            name: '인현동',
          },
          {
            id: 'incheon_12_075',
            name: '인현동',
          },
          {
            id: 'incheon_12_076',
            name: '전동',
          },
          {
            id: 'incheon_12_077',
            name: '전동',
          },
          {
            id: 'incheon_12_078',
            name: '중산동',
          },
          {
            id: 'incheon_12_079',
            name: '중산동',
          },
          {
            id: 'incheon_12_080',
            name: '중앙동1가',
          },
          {
            id: 'incheon_12_081',
            name: '중앙동1가',
          },
          {
            id: 'incheon_12_082',
            name: '중앙동2가',
          },
          {
            id: 'incheon_12_083',
            name: '중앙동2가',
          },
          {
            id: 'incheon_12_084',
            name: '중앙동3가',
          },
          {
            id: 'incheon_12_085',
            name: '중앙동3가',
          },
          {
            id: 'incheon_12_086',
            name: '중앙동4가',
          },
          {
            id: 'incheon_12_087',
            name: '중앙동4가',
          },
          {
            id: 'incheon_12_088',
            name: '항동1가',
          },
          {
            id: 'incheon_12_089',
            name: '항동1가',
          },
          {
            id: 'incheon_12_090',
            name: '항동2가',
          },
          {
            id: 'incheon_12_091',
            name: '항동2가',
          },
          {
            id: 'incheon_12_092',
            name: '항동3가',
          },
          {
            id: 'incheon_12_093',
            name: '항동3가',
          },
          {
            id: 'incheon_12_094',
            name: '항동4가',
          },
          {
            id: 'incheon_12_095',
            name: '항동4가',
          },
          {
            id: 'incheon_12_096',
            name: '항동5가',
          },
          {
            id: 'incheon_12_097',
            name: '항동5가',
          },
          {
            id: 'incheon_12_098',
            name: '항동6가',
          },
          {
            id: 'incheon_12_099',
            name: '항동6가',
          },
          {
            id: 'incheon_12_100',
            name: '항동7가',
          },
          {
            id: 'incheon_12_101',
            name: '항동7가',
          },
          {
            id: 'incheon_12_102',
            name: '해안동1가',
          },
          {
            id: 'incheon_12_103',
            name: '해안동1가',
          },
          {
            id: 'incheon_12_104',
            name: '해안동2가',
          },
          {
            id: 'incheon_12_105',
            name: '해안동2가',
          },
          {
            id: 'incheon_12_106',
            name: '해안동3가',
          },
          {
            id: 'incheon_12_107',
            name: '해안동3가',
          },
          {
            id: 'incheon_12_108',
            name: '해안동4가',
          },
          {
            id: 'incheon_12_109',
            name: '해안동4가',
          },
        ],
      },
    ],
  },
  {
    id: 'busan',
    name: '부산',
    subregions: [
      {
        id: 'busan_01',
        name: '강서구',
        subregions: [
          {
            id: 'busan_01_001',
            name: '가락동',
          },
          {
            id: 'busan_01_002',
            name: '강동동',
          },

          {
            id: 'busan_01_004',
            name: '구랑동',
          },

          {
            id: 'busan_01_006',
            name: '녹산동',
          },

          {
            id: 'busan_01_009',
            name: '눌차동',
          },
          {
            id: 'busan_01_010',
            name: '대저1동',
          },
          {
            id: 'busan_01_011',
            name: '대저2동',
          },

          {
            id: 'busan_01_015',
            name: '대항동',
          },

          {
            id: 'busan_01_017',
            name: '동선동',
          },
          {
            id: 'busan_01_018',
            name: '명지동',
          },

          {
            id: 'busan_01_020',
            name: '미음동',
          },

          {
            id: 'busan_01_023',
            name: '범방동',
          },

          {
            id: 'busan_01_025',
            name: '봉림동',
          },

          {
            id: 'busan_01_027',
            name: '생곡동',
          },
          {
            id: 'busan_01_028',
            name: '성북동',
          },

          {
            id: 'busan_01_030',
            name: '송정동',
          },

          {
            id: 'busan_01_033',
            name: '식만동',
          },

          {
            id: 'busan_01_035',
            name: '신호동',
          },

          {
            id: 'busan_01_037',
            name: '죽동동',
          },

          {
            id: 'busan_01_039',
            name: '죽림동',
          },

          {
            id: 'busan_01_041',
            name: '지사동',
          },
          {
            id: 'busan_01_042',
            name: '천가동',
          },

          {
            id: 'busan_01_044',
            name: '천성동',
          },
          {
            id: 'busan_01_045',
            name: '화전동',
          },
        ],
      },
      {
        id: 'busan_02',
        name: '금정구',
        subregions: [
          {
            id: 'busan_02_001',
            name: '구서1동',
          },
          {
            id: 'busan_02_002',
            name: '구서2동',
          },
          {
            id: 'busan_02_003',
            name: '구서동',
          },
          {
            id: 'busan_02_004',
            name: '구서동',
          },
          {
            id: 'busan_02_005',
            name: '금사동',
          },
          {
            id: 'busan_02_006',
            name: '금사동',
          },
          {
            id: 'busan_02_007',
            name: '금성동',
          },
          {
            id: 'busan_02_008',
            name: '금성동',
          },
          {
            id: 'busan_02_009',
            name: '남산동',
          },
          {
            id: 'busan_02_010',
            name: '남산동',
          },
          {
            id: 'busan_02_011',
            name: '노포동',
          },
          {
            id: 'busan_02_012',
            name: '노포동',
          },
          {
            id: 'busan_02_013',
            name: '두구동',
          },
          {
            id: 'busan_02_014',
            name: '두구동',
          },
          {
            id: 'busan_02_015',
            name: '부곡1동',
          },
          {
            id: 'busan_02_016',
            name: '부곡2동',
          },
          {
            id: 'busan_02_017',
            name: '부곡3동',
          },
          {
            id: 'busan_02_018',
            name: '부곡동',
          },
          {
            id: 'busan_02_019',
            name: '부곡동',
          },
          {
            id: 'busan_02_020',
            name: '서1동',
          },
          {
            id: 'busan_02_021',
            name: '서2동',
          },
          {
            id: 'busan_02_022',
            name: '서3동',
          },
          {
            id: 'busan_02_023',
            name: '서4동',
          },
          {
            id: 'busan_02_024',
            name: '서동',
          },
          {
            id: 'busan_02_025',
            name: '서동',
          },
          {
            id: 'busan_02_026',
            name: '선동',
          },
          {
            id: 'busan_02_027',
            name: '선동',
          },
          {
            id: 'busan_02_028',
            name: '오륜동',
          },
          {
            id: 'busan_02_029',
            name: '오륜동',
          },
          {
            id: 'busan_02_030',
            name: '장전1동',
          },
          {
            id: 'busan_02_031',
            name: '장전2동',
          },
          {
            id: 'busan_02_032',
            name: '장전3동',
          },
          {
            id: 'busan_02_033',
            name: '장전동',
          },
          {
            id: 'busan_02_034',
            name: '장전동',
          },
          {
            id: 'busan_02_035',
            name: '청룡동',
          },
          {
            id: 'busan_02_036',
            name: '청룡동',
          },
          {
            id: 'busan_02_037',
            name: '청용동',
          },
          {
            id: 'busan_02_038',
            name: '회동동',
          },
          {
            id: 'busan_02_039',
            name: '회동동',
          },
        ],
      },
      {
        id: 'busan_03',
        name: '기장군',
        subregions: [
          {
            id: 'busan_03_001',
            name: '기장읍',
          },
          {
            id: 'busan_03_002',
            name: '일광면',
          },
          {
            id: 'busan_03_003',
            name: '일광읍',
          },
          {
            id: 'busan_03_004',
            name: '장안읍',
          },
          {
            id: 'busan_03_005',
            name: '정관면',
          },
          {
            id: 'busan_03_006',
            name: '정관읍',
          },
          {
            id: 'busan_03_007',
            name: '철마면',
          },
        ],
      },
      {
        id: 'busan_04',
        name: '남구',
        subregions: [
          {
            id: 'busan_04_001',
            name: '감만1동',
          },
          {
            id: 'busan_04_002',
            name: '감만2동',
          },
          {
            id: 'busan_04_003',
            name: '감만동',
          },
          {
            id: 'busan_04_004',
            name: '감만동',
          },
          {
            id: 'busan_04_005',
            name: '광안1동',
          },
          {
            id: 'busan_04_006',
            name: '광안2동',
          },
          {
            id: 'busan_04_007',
            name: '광안3동',
          },
          {
            id: 'busan_04_008',
            name: '광안4동',
          },
          {
            id: 'busan_04_009',
            name: '광안동',
          },
          {
            id: 'busan_04_010',
            name: '광안동',
          },
          {
            id: 'busan_04_011',
            name: '남천1동',
          },
          {
            id: 'busan_04_012',
            name: '남천2동',
          },
          {
            id: 'busan_04_013',
            name: '남천동',
          },
          {
            id: 'busan_04_014',
            name: '남천동',
          },
          {
            id: 'busan_04_015',
            name: '대연1동',
          },
          {
            id: 'busan_04_016',
            name: '대연2동',
          },
          {
            id: 'busan_04_017',
            name: '대연3동',
          },
          {
            id: 'busan_04_018',
            name: '대연4동',
          },
          {
            id: 'busan_04_019',
            name: '대연5동',
          },
          {
            id: 'busan_04_020',
            name: '대연6동',
          },
          {
            id: 'busan_04_021',
            name: '대연동',
          },
          {
            id: 'busan_04_022',
            name: '대연동',
          },
          {
            id: 'busan_04_023',
            name: '망미1동',
          },
          {
            id: 'busan_04_024',
            name: '망미2동',
          },
          {
            id: 'busan_04_025',
            name: '망미동',
          },
          {
            id: 'busan_04_026',
            name: '망미동',
          },
          {
            id: 'busan_04_027',
            name: '문현1동',
          },
          {
            id: 'busan_04_028',
            name: '문현2동',
          },
          {
            id: 'busan_04_029',
            name: '문현3동',
          },
          {
            id: 'busan_04_030',
            name: '문현4동',
          },
          {
            id: 'busan_04_031',
            name: '문현5동',
          },
          {
            id: 'busan_04_032',
            name: '문현동',
          },
          {
            id: 'busan_04_033',
            name: '문현동',
          },
          {
            id: 'busan_04_034',
            name: '민락동',
          },
          {
            id: 'busan_04_035',
            name: '민락동',
          },
          {
            id: 'busan_04_036',
            name: '범일동',
          },
          {
            id: 'busan_04_037',
            name: '범천동',
          },
          {
            id: 'busan_04_038',
            name: '수영동',
          },
          {
            id: 'busan_04_039',
            name: '수영동',
          },
          {
            id: 'busan_04_040',
            name: '용당동',
          },
          {
            id: 'busan_04_041',
            name: '용당동',
          },
          {
            id: 'busan_04_042',
            name: '용호1동',
          },
          {
            id: 'busan_04_043',
            name: '용호2동',
          },
          {
            id: 'busan_04_044',
            name: '용호3동',
          },
          {
            id: 'busan_04_045',
            name: '용호4동',
          },
          {
            id: 'busan_04_046',
            name: '용호동',
          },
          {
            id: 'busan_04_047',
            name: '용호동',
          },
          {
            id: 'busan_04_048',
            name: '우암1동',
          },
          {
            id: 'busan_04_049',
            name: '우암2동',
          },
          {
            id: 'busan_04_050',
            name: '우암동',
          },
          {
            id: 'busan_04_051',
            name: '우암동',
          },
          {
            id: 'busan_04_052',
            name: '재송동',
          },
          {
            id: 'busan_04_053',
            name: '적기동1가',
          },
          {
            id: 'busan_04_054',
            name: '적기동2가',
          },
          {
            id: 'busan_04_055',
            name: '적기동3가',
          },
          {
            id: 'busan_04_056',
            name: '적기동4가',
          },
          {
            id: 'busan_04_057',
            name: '적기동5가',
          },
        ],
      },
      {
        id: 'busan_05',
        name: '동구',
        subregions: [
          {
            id: 'busan_05_001',
            name: '범일1동',
          },
          {
            id: 'busan_05_002',
            name: '범일2동',
          },
          {
            id: 'busan_05_003',
            name: '범일4동',
          },
          {
            id: 'busan_05_004',
            name: '범일5동',
          },
          {
            id: 'busan_05_005',
            name: '범일6동',
          },
          {
            id: 'busan_05_006',
            name: '범일동',
          },
          {
            id: 'busan_05_007',
            name: '범일동',
          },
          {
            id: 'busan_05_008',
            name: '수정1동',
          },
          {
            id: 'busan_05_009',
            name: '수정2동',
          },
          {
            id: 'busan_05_010',
            name: '수정3동',
          },
          {
            id: 'busan_05_011',
            name: '수정4동',
          },
          {
            id: 'busan_05_012',
            name: '수정5동',
          },
          {
            id: 'busan_05_013',
            name: '수정동',
          },
          {
            id: 'busan_05_014',
            name: '수정동',
          },
          {
            id: 'busan_05_015',
            name: '좌천1동',
          },
          {
            id: 'busan_05_016',
            name: '좌천2동',
          },
          {
            id: 'busan_05_017',
            name: '좌천3동',
          },
          {
            id: 'busan_05_018',
            name: '좌천4동',
          },
          {
            id: 'busan_05_019',
            name: '좌천동',
          },
          {
            id: 'busan_05_020',
            name: '좌천동',
          },
          {
            id: 'busan_05_021',
            name: '초량1동',
          },
          {
            id: 'busan_05_022',
            name: '초량2동',
          },
          {
            id: 'busan_05_023',
            name: '초량3동',
          },
          {
            id: 'busan_05_024',
            name: '초량4동',
          },
          {
            id: 'busan_05_025',
            name: '초량6동',
          },
          {
            id: 'busan_05_026',
            name: '초량동',
          },
          {
            id: 'busan_05_027',
            name: '초량동',
          },
        ],
      },
      {
        id: 'busan_06',
        name: '동래구',
        subregions: [
          {
            id: 'busan_06_001',
            name: '거제1동',
          },
          {
            id: 'busan_06_002',
            name: '거제2동',
          },
          {
            id: 'busan_06_003',
            name: '거제3동',
          },
          {
            id: 'busan_06_004',
            name: '거제4동',
          },
          {
            id: 'busan_06_005',
            name: '거제동',
          },
          {
            id: 'busan_06_006',
            name: '거제동',
          },
          {
            id: 'busan_06_007',
            name: '구서동',
          },
          {
            id: 'busan_06_008',
            name: '금사동',
          },
          {
            id: 'busan_06_009',
            name: '금성동',
          },
          {
            id: 'busan_06_010',
            name: '낙민동',
          },
          {
            id: 'busan_06_011',
            name: '낙민동',
          },
          {
            id: 'busan_06_012',
            name: '남산동',
          },
          {
            id: 'busan_06_013',
            name: '노포동',
          },
          {
            id: 'busan_06_014',
            name: '동상동',
          },
          {
            id: 'busan_06_015',
            name: '두구동',
          },
          {
            id: 'busan_06_016',
            name: '명륜1동',
          },
          {
            id: 'busan_06_017',
            name: '명륜2동',
          },
          {
            id: 'busan_06_018',
            name: '명륜동',
          },
          {
            id: 'busan_06_019',
            name: '명륜동',
          },
          {
            id: 'busan_06_020',
            name: '명장동',
          },
          {
            id: 'busan_06_021',
            name: '명장동',
          },
          {
            id: 'busan_06_022',
            name: '반송동',
          },
          {
            id: 'busan_06_023',
            name: '반여동',
          },
          {
            id: 'busan_06_024',
            name: '복산동',
          },
          {
            id: 'busan_06_025',
            name: '복천동',
          },
          {
            id: 'busan_06_026',
            name: '복천동',
          },
          {
            id: 'busan_06_027',
            name: '부곡동',
          },
          {
            id: 'busan_06_028',
            name: '사직1동',
          },
          {
            id: 'busan_06_029',
            name: '사직2동',
          },
          {
            id: 'busan_06_030',
            name: '사직3동',
          },
          {
            id: 'busan_06_031',
            name: '사직동',
          },
          {
            id: 'busan_06_032',
            name: '사직동',
          },
          {
            id: 'busan_06_033',
            name: '서동',
          },
          {
            id: 'busan_06_034',
            name: '석대동',
          },
          {
            id: 'busan_06_035',
            name: '선동',
          },
          {
            id: 'busan_06_036',
            name: '송정동',
          },
          {
            id: 'busan_06_037',
            name: '수민동',
          },
          {
            id: 'busan_06_038',
            name: '수안동',
          },
          {
            id: 'busan_06_039',
            name: '수안동',
          },
          {
            id: 'busan_06_040',
            name: '수영동',
          },
          {
            id: 'busan_06_041',
            name: '안락1동',
          },
          {
            id: 'busan_06_042',
            name: '안락2동',
          },
          {
            id: 'busan_06_043',
            name: '안락동',
          },
          {
            id: 'busan_06_044',
            name: '안락동',
          },
          {
            id: 'busan_06_045',
            name: '연산1동',
          },
          {
            id: 'busan_06_046',
            name: '연산2동',
          },
          {
            id: 'busan_06_047',
            name: '연산3동',
          },
          {
            id: 'busan_06_048',
            name: '연산4동',
          },
          {
            id: 'busan_06_049',
            name: '연산5동',
          },
          {
            id: 'busan_06_050',
            name: '연산6동',
          },
          {
            id: 'busan_06_051',
            name: '연산7동',
          },
          {
            id: 'busan_06_052',
            name: '연산8동',
          },
          {
            id: 'busan_06_053',
            name: '연산9동',
          },
          {
            id: 'busan_06_054',
            name: '연산동',
          },
          {
            id: 'busan_06_055',
            name: '연산동',
          },
          {
            id: 'busan_06_056',
            name: '오륜동',
          },
          {
            id: 'busan_06_057',
            name: '온천1동',
          },
          {
            id: 'busan_06_058',
            name: '온천2동',
          },
          {
            id: 'busan_06_059',
            name: '온천3동',
          },
          {
            id: 'busan_06_060',
            name: '온천동',
          },
          {
            id: 'busan_06_061',
            name: '온천동',
          },
          {
            id: 'busan_06_062',
            name: '우동',
          },
          {
            id: 'busan_06_063',
            name: '장전동',
          },
          {
            id: 'busan_06_064',
            name: '재송동',
          },
          {
            id: 'busan_06_065',
            name: '좌동',
          },
          {
            id: 'busan_06_066',
            name: '중동',
          },
          {
            id: 'busan_06_067',
            name: '청용동',
          },
          {
            id: 'busan_06_068',
            name: '칠산동',
          },
          {
            id: 'busan_06_069',
            name: '칠산동',
          },
          {
            id: 'busan_06_070',
            name: '회동',
          },
        ],
      },
      {
        id: 'busan_07',
        name: '부산진구',
        subregions: [
          {
            id: 'busan_07_001',
            name: '가야1동',
          },
          {
            id: 'busan_07_002',
            name: '가야2동',
          },
          {
            id: 'busan_07_003',
            name: '가야3동',
          },
          {
            id: 'busan_07_004',
            name: '가야동',
          },
          {
            id: 'busan_07_005',
            name: '가야동',
          },
          {
            id: 'busan_07_006',
            name: '감만동',
          },
          {
            id: 'busan_07_007',
            name: '감전동',
          },
          {
            id: 'busan_07_008',
            name: '개금1동',
          },
          {
            id: 'busan_07_009',
            name: '개금2동',
          },
          {
            id: 'busan_07_010',
            name: '개금3동',
          },
          {
            id: 'busan_07_011',
            name: '개금동',
          },
          {
            id: 'busan_07_012',
            name: '개금동',
          },
          {
            id: 'busan_07_013',
            name: '괘법동',
          },
          {
            id: 'busan_07_014',
            name: '구포동',
          },
          {
            id: 'busan_07_015',
            name: '금곡동',
          },
          {
            id: 'busan_07_016',
            name: '금성동',
          },
          {
            id: 'busan_07_017',
            name: '남천동',
          },
          {
            id: 'busan_07_018',
            name: '당감1동',
          },
          {
            id: 'busan_07_019',
            name: '당감2동',
          },
          {
            id: 'busan_07_020',
            name: '당감3동',
          },
          {
            id: 'busan_07_021',
            name: '당감4동',
          },
          {
            id: 'busan_07_022',
            name: '당감동',
          },
          {
            id: 'busan_07_023',
            name: '당감동',
          },
          {
            id: 'busan_07_024',
            name: '대연동',
          },
          {
            id: 'busan_07_025',
            name: '덕천동',
          },
          {
            id: 'busan_07_026',
            name: '덕포동',
          },
          {
            id: 'busan_07_027',
            name: '동평동',
          },
          {
            id: 'busan_07_028',
            name: '만덕동',
          },
          {
            id: 'busan_07_029',
            name: '모라동',
          },
          {
            id: 'busan_07_030',
            name: '문현동',
          },
          {
            id: 'busan_07_031',
            name: '범일동',
          },
          {
            id: 'busan_07_032',
            name: '범전동',
          },
          {
            id: 'busan_07_033',
            name: '범전동',
          },
          {
            id: 'busan_07_034',
            name: '범천1동',
          },
          {
            id: 'busan_07_035',
            name: '범천2동',
          },
          {
            id: 'busan_07_036',
            name: '범천3동',
          },
          {
            id: 'busan_07_037',
            name: '범천동',
          },
          {
            id: 'busan_07_038',
            name: '범천동',
          },
          {
            id: 'busan_07_039',
            name: '부암1동',
          },
          {
            id: 'busan_07_040',
            name: '부암2동',
          },
          {
            id: 'busan_07_041',
            name: '부암3동',
          },
          {
            id: 'busan_07_042',
            name: '부암동',
          },
          {
            id: 'busan_07_043',
            name: '부암동',
          },
          {
            id: 'busan_07_044',
            name: '부전1동',
          },
          {
            id: 'busan_07_045',
            name: '부전2동',
          },
          {
            id: 'busan_07_046',
            name: '부전동',
          },
          {
            id: 'busan_07_047',
            name: '부전동',
          },
          {
            id: 'busan_07_048',
            name: '삼락동',
          },
          {
            id: 'busan_07_049',
            name: '성지동',
          },
          {
            id: 'busan_07_050',
            name: '양정1동',
          },
          {
            id: 'busan_07_051',
            name: '양정2동',
          },
          {
            id: 'busan_07_052',
            name: '양정3동',
          },
          {
            id: 'busan_07_053',
            name: '양정4동',
          },
          {
            id: 'busan_07_054',
            name: '양정동',
          },
          {
            id: 'busan_07_055',
            name: '양정동',
          },
          {
            id: 'busan_07_056',
            name: '엄궁동',
          },
          {
            id: 'busan_07_057',
            name: '연지동',
          },
          {
            id: 'busan_07_058',
            name: '연지동',
          },
          {
            id: 'busan_07_059',
            name: '용당동',
          },
          {
            id: 'busan_07_060',
            name: '용호동',
          },
          {
            id: 'busan_07_061',
            name: '우암동',
          },
          {
            id: 'busan_07_062',
            name: '적기동2가',
          },
          {
            id: 'busan_07_063',
            name: '전포1동',
          },
          {
            id: 'busan_07_064',
            name: '전포2동',
          },
          {
            id: 'busan_07_065',
            name: '전포3동',
          },
          {
            id: 'busan_07_066',
            name: '전포4동',
          },
          {
            id: 'busan_07_067',
            name: '전포동',
          },
          {
            id: 'busan_07_068',
            name: '전포동',
          },
          {
            id: 'busan_07_069',
            name: '주례동',
          },
          {
            id: 'busan_07_070',
            name: '초읍동',
          },
          {
            id: 'busan_07_071',
            name: '초읍동',
          },
          {
            id: 'busan_07_072',
            name: '학장동',
          },
          {
            id: 'busan_07_073',
            name: '화명동',
          },
        ],
      },
      {
        id: 'busan_08',
        name: '북구',
        subregions: [
          {
            id: 'busan_08_001',
            name: '감전1동',
          },
          {
            id: 'busan_08_002',
            name: '감전2동',
          },
          {
            id: 'busan_08_003',
            name: '감전동',
          },
          {
            id: 'busan_08_004',
            name: '감전동',
          },
          {
            id: 'busan_08_005',
            name: '강동동',
          },
          {
            id: 'busan_08_006',
            name: '괘법동',
          },
          {
            id: 'busan_08_007',
            name: '괘법동',
          },
          {
            id: 'busan_08_008',
            name: '구포1동',
          },
          {
            id: 'busan_08_009',
            name: '구포2동',
          },
          {
            id: 'busan_08_010',
            name: '구포동',
          },
          {
            id: 'busan_08_011',
            name: '구포동',
          },
          {
            id: 'busan_08_012',
            name: '금곡동',
          },
          {
            id: 'busan_08_013',
            name: '금곡동',
          },
          {
            id: 'busan_08_014',
            name: '대사리',
          },
          {
            id: 'busan_08_015',
            name: '대저1동',
          },
          {
            id: 'busan_08_016',
            name: '대저2동',
          },
          {
            id: 'busan_08_017',
            name: '대지리',
          },
          {
            id: 'busan_08_018',
            name: '덕두리',
          },
          {
            id: 'busan_08_019',
            name: '덕천1동',
          },
          {
            id: 'busan_08_020',
            name: '덕천2동',
          },
          {
            id: 'busan_08_021',
            name: '덕천동',
          },
          {
            id: 'busan_08_022',
            name: '덕천동',
          },
          {
            id: 'busan_08_023',
            name: '덕포1동',
          },
          {
            id: 'busan_08_024',
            name: '덕포2동',
          },
          {
            id: 'busan_08_025',
            name: '덕포동',
          },
          {
            id: 'busan_08_026',
            name: '덕포동',
          },
          {
            id: 'busan_08_027',
            name: '도도리',
          },
          {
            id: 'busan_08_028',
            name: '동리',
          },
          {
            id: 'busan_08_029',
            name: '만덕동',
          },
          {
            id: 'busan_08_030',
            name: '만덕동',
          },
          {
            id: 'busan_08_031',
            name: '맥도리',
          },
          {
            id: 'busan_08_032',
            name: '명지동',
          },
          {
            id: 'busan_08_033',
            name: '모라동',
          },
          {
            id: 'busan_08_034',
            name: '모라동',
          },
          {
            id: 'busan_08_035',
            name: '북정리',
          },
          {
            id: 'busan_08_036',
            name: '사덕리',
          },
          {
            id: 'busan_08_037',
            name: '사두리',
          },
          {
            id: 'busan_08_038',
            name: '삼락동',
          },
          {
            id: 'busan_08_039',
            name: '삼락동',
          },
          {
            id: 'busan_08_040',
            name: '상덕리',
          },
          {
            id: 'busan_08_041',
            name: '소덕리',
          },
          {
            id: 'busan_08_042',
            name: '신전리',
          },
          {
            id: 'busan_08_043',
            name: '엄궁동',
          },
          {
            id: 'busan_08_044',
            name: '엄궁동',
          },
          {
            id: 'busan_08_045',
            name: '울만리',
          },
          {
            id: 'busan_08_046',
            name: '제도리',
          },
          {
            id: 'busan_08_047',
            name: '조동리',
          },
          {
            id: 'busan_08_048',
            name: '주례1동',
          },
          {
            id: 'busan_08_049',
            name: '주례2동',
          },
          {
            id: 'busan_08_050',
            name: '주례동',
          },
          {
            id: 'busan_08_051',
            name: '주례동',
          },
          {
            id: 'busan_08_052',
            name: '중리',
          },
          {
            id: 'busan_08_053',
            name: '진목리',
          },
          {
            id: 'busan_08_054',
            name: '출두리',
          },
          {
            id: 'busan_08_055',
            name: '평강리',
          },
          {
            id: 'busan_08_056',
            name: '평성리',
          },
          {
            id: 'busan_08_057',
            name: '학장동',
          },
          {
            id: 'busan_08_058',
            name: '학장동',
          },
          {
            id: 'busan_08_059',
            name: '화명동',
          },
          {
            id: 'busan_08_060',
            name: '화명동',
          },
        ],
      },
      {
        id: 'busan_09',
        name: '사상구',
        subregions: [
          {
            id: 'busan_09_001',
            name: '감전동',
          },
          {
            id: 'busan_09_002',
            name: '괘법동',
          },
          {
            id: 'busan_09_003',
            name: '덕포동',
          },
          {
            id: 'busan_09_004',
            name: '모라동',
          },
          {
            id: 'busan_09_005',
            name: '삼락동',
          },
          {
            id: 'busan_09_006',
            name: '엄궁동',
          },
          {
            id: 'busan_09_007',
            name: '주례동',
          },
          {
            id: 'busan_09_008',
            name: '학장동',
          },
        ],
      },
      {
        id: 'busan_10',
        name: '사하구',
        subregions: [
          {
            id: 'busan_10_001',
            name: '감천1동',
          },
          {
            id: 'busan_10_002',
            name: '감천2동',
          },
          {
            id: 'busan_10_003',
            name: '감천동',
          },
          {
            id: 'busan_10_004',
            name: '감천동',
          },
          {
            id: 'busan_10_005',
            name: '괴정1동',
          },
          {
            id: 'busan_10_006',
            name: '괴정2동',
          },
          {
            id: 'busan_10_007',
            name: '괴정3동',
          },
          {
            id: 'busan_10_008',
            name: '괴정4동',
          },
          {
            id: 'busan_10_009',
            name: '괴정동',
          },
          {
            id: 'busan_10_010',
            name: '괴정동',
          },
          {
            id: 'busan_10_011',
            name: '구평동',
          },
          {
            id: 'busan_10_012',
            name: '구평동',
          },
          {
            id: 'busan_10_013',
            name: '다대동',
          },
          {
            id: 'busan_10_014',
            name: '다대동',
          },
          {
            id: 'busan_10_015',
            name: '당리동',
          },
          {
            id: 'busan_10_016',
            name: '당리동',
          },
          {
            id: 'busan_10_017',
            name: '신평동',
          },
          {
            id: 'busan_10_018',
            name: '신평동',
          },
          {
            id: 'busan_10_019',
            name: '장림1동',
          },
          {
            id: 'busan_10_020',
            name: '장림2동',
          },
          {
            id: 'busan_10_021',
            name: '장림동',
          },
          {
            id: 'busan_10_022',
            name: '장림동',
          },
          {
            id: 'busan_10_023',
            name: '하단동',
          },
          {
            id: 'busan_10_024',
            name: '하단동',
          },
        ],
      },
      {
        id: 'busan_11',
        name: '서구',
        subregions: [
          {
            id: 'busan_11_001',
            name: '감천동',
          },
          {
            id: 'busan_11_002',
            name: '괴정동',
          },
          {
            id: 'busan_11_003',
            name: '구평동',
          },
          {
            id: 'busan_11_004',
            name: '남부민1동',
          },
          {
            id: 'busan_11_005',
            name: '남부민2동',
          },
          {
            id: 'busan_11_006',
            name: '남부민3동',
          },
          {
            id: 'busan_11_007',
            name: '남부민동',
          },
          {
            id: 'busan_11_008',
            name: '남부민동',
          },
          {
            id: 'busan_11_009',
            name: '다대동',
          },
          {
            id: 'busan_11_010',
            name: '당리동',
          },
          {
            id: 'busan_11_011',
            name: '동대신동1가',
          },
          {
            id: 'busan_11_012',
            name: '동대신동1가',
          },
          {
            id: 'busan_11_013',
            name: '동대신동2가',
          },
          {
            id: 'busan_11_014',
            name: '동대신동2가',
          },
          {
            id: 'busan_11_015',
            name: '동대신동3가',
          },
          {
            id: 'busan_11_016',
            name: '동대신동3가',
          },
          {
            id: 'busan_11_017',
            name: '부민동1가',
          },
          {
            id: 'busan_11_018',
            name: '부민동1가',
          },
          {
            id: 'busan_11_019',
            name: '부민동2가',
          },
          {
            id: 'busan_11_020',
            name: '부민동2가',
          },
          {
            id: 'busan_11_021',
            name: '부민동3가',
          },
          {
            id: 'busan_11_022',
            name: '부민동3가',
          },
          {
            id: 'busan_11_023',
            name: '부용동1가',
          },
          {
            id: 'busan_11_024',
            name: '부용동1가',
          },
          {
            id: 'busan_11_025',
            name: '부용동2가',
          },
          {
            id: 'busan_11_026',
            name: '부용동2가',
          },
          {
            id: 'busan_11_027',
            name: '서대신동1가',
          },
          {
            id: 'busan_11_028',
            name: '서대신동1가',
          },
          {
            id: 'busan_11_029',
            name: '서대신동2가',
          },
          {
            id: 'busan_11_030',
            name: '서대신동2가',
          },
          {
            id: 'busan_11_031',
            name: '서대신동3가',
          },
          {
            id: 'busan_11_032',
            name: '서대신동3가',
          },
          {
            id: 'busan_11_033',
            name: '신평동',
          },
          {
            id: 'busan_11_034',
            name: '아미동1가',
          },
          {
            id: 'busan_11_035',
            name: '아미동1가',
          },
          {
            id: 'busan_11_036',
            name: '아미동2가',
          },
          {
            id: 'busan_11_037',
            name: '아미동2가',
          },
          {
            id: 'busan_11_038',
            name: '암남동',
          },
          {
            id: 'busan_11_039',
            name: '암남동',
          },
          {
            id: 'busan_11_040',
            name: '완월동1가',
          },
          {
            id: 'busan_11_041',
            name: '완월동2가',
          },
          {
            id: 'busan_11_042',
            name: '장림동',
          },
          {
            id: 'busan_11_043',
            name: '초장동',
          },
          {
            id: 'busan_11_044',
            name: '초장동',
          },
          {
            id: 'busan_11_045',
            name: '초장동1가',
          },
          {
            id: 'busan_11_046',
            name: '초장동2가',
          },
          {
            id: 'busan_11_047',
            name: '초장동3가',
          },
          {
            id: 'busan_11_048',
            name: '충무동1가',
          },
          {
            id: 'busan_11_049',
            name: '충무동1가',
          },
          {
            id: 'busan_11_050',
            name: '충무동2가',
          },
          {
            id: 'busan_11_051',
            name: '충무동2가',
          },
          {
            id: 'busan_11_052',
            name: '충무동3가',
          },
          {
            id: 'busan_11_053',
            name: '충무동3가',
          },
          {
            id: 'busan_11_054',
            name: '충무로4가',
          },
          {
            id: 'busan_11_055',
            name: '충무로5가',
          },
          {
            id: 'busan_11_056',
            name: '토성동1가',
          },
          {
            id: 'busan_11_057',
            name: '토성동1가',
          },
          {
            id: 'busan_11_058',
            name: '토성동2가',
          },
          {
            id: 'busan_11_059',
            name: '토성동2가',
          },
          {
            id: 'busan_11_060',
            name: '토성동3가',
          },
          {
            id: 'busan_11_061',
            name: '토성동3가',
          },
          {
            id: 'busan_11_062',
            name: '토성동4가',
          },
          {
            id: 'busan_11_063',
            name: '토성동4가',
          },
          {
            id: 'busan_11_064',
            name: '토성동5가',
          },
          {
            id: 'busan_11_065',
            name: '토성동5가',
          },
          {
            id: 'busan_11_066',
            name: '하단동',
          },
        ],
      },
      {
        id: 'busan_12',
        name: '수영구',
        subregions: [
          {
            id: 'busan_12_001',
            name: '광안동',
          },
          {
            id: 'busan_12_002',
            name: '남천동',
          },
          {
            id: 'busan_12_003',
            name: '망미동',
          },
          {
            id: 'busan_12_004',
            name: '민락동',
          },
          {
            id: 'busan_12_005',
            name: '수영동',
          },
        ],
      },
      {
        id: 'busan_13',
        name: '연제구',
        subregions: [
          {
            id: 'busan_13_001',
            name: '거제동',
          },
          {
            id: 'busan_13_002',
            name: '연산동',
          },
        ],
      },
      {
        id: 'busan_14',
        name: '영도구',
        subregions: [
          {
            id: 'busan_14_001',
            name: '남항동1가',
          },
          {
            id: 'busan_14_002',
            name: '남항동1가',
          },
          {
            id: 'busan_14_003',
            name: '남항동2가',
          },
          {
            id: 'busan_14_004',
            name: '남항동2가',
          },
          {
            id: 'busan_14_005',
            name: '남항동3가',
          },
          {
            id: 'busan_14_006',
            name: '남항동3가',
          },
          {
            id: 'busan_14_007',
            name: '대교동1가',
          },
          {
            id: 'busan_14_008',
            name: '대교동1가',
          },
          {
            id: 'busan_14_009',
            name: '대교동2가',
          },
          {
            id: 'busan_14_010',
            name: '대교동2가',
          },
          {
            id: 'busan_14_011',
            name: '대교로4가',
          },
          {
            id: 'busan_14_012',
            name: '대교로5가',
          },
          {
            id: 'busan_14_013',
            name: '대평동1가',
          },
          {
            id: 'busan_14_014',
            name: '대평동1가',
          },
          {
            id: 'busan_14_015',
            name: '대평동2가',
          },
          {
            id: 'busan_14_016',
            name: '대평동2가',
          },
          {
            id: 'busan_14_017',
            name: '동삼1동',
          },
          {
            id: 'busan_14_018',
            name: '동삼2동',
          },
          {
            id: 'busan_14_019',
            name: '동삼동',
          },
          {
            id: 'busan_14_020',
            name: '동삼동',
          },
          {
            id: 'busan_14_021',
            name: '봉래동1가',
          },
          {
            id: 'busan_14_022',
            name: '봉래동1가',
          },
          {
            id: 'busan_14_023',
            name: '봉래동2가',
          },
          {
            id: 'busan_14_024',
            name: '봉래동2가',
          },
          {
            id: 'busan_14_025',
            name: '봉래동3가',
          },
          {
            id: 'busan_14_026',
            name: '봉래동3가',
          },
          {
            id: 'busan_14_027',
            name: '봉래동4가',
          },
          {
            id: 'busan_14_028',
            name: '봉래동4가',
          },
          {
            id: 'busan_14_029',
            name: '봉래동5가',
          },
          {
            id: 'busan_14_030',
            name: '봉래동5가',
          },
          {
            id: 'busan_14_031',
            name: '신선동1가',
          },
          {
            id: 'busan_14_032',
            name: '신선동1가',
          },
          {
            id: 'busan_14_033',
            name: '신선동2가',
          },
          {
            id: 'busan_14_034',
            name: '신선동2가',
          },
          {
            id: 'busan_14_035',
            name: '신선동3가',
          },
          {
            id: 'busan_14_036',
            name: '신선동3가',
          },
          {
            id: 'busan_14_037',
            name: '영선동1가',
          },
          {
            id: 'busan_14_038',
            name: '영선동1가',
          },
          {
            id: 'busan_14_039',
            name: '영선동2가',
          },
          {
            id: 'busan_14_040',
            name: '영선동2가',
          },
          {
            id: 'busan_14_041',
            name: '영선동3가',
          },
          {
            id: 'busan_14_042',
            name: '영선동3가',
          },
          {
            id: 'busan_14_043',
            name: '영선동4가',
          },
          {
            id: 'busan_14_044',
            name: '영선동4가',
          },
          {
            id: 'busan_14_045',
            name: '청학1동',
          },
          {
            id: 'busan_14_046',
            name: '청학2동',
          },
          {
            id: 'busan_14_047',
            name: '청학동',
          },
          {
            id: 'busan_14_048',
            name: '청학동',
          },
        ],
      },
      {
        id: 'busan_15',
        name: '중구',
        subregions: [
          {
            id: 'busan_15_001',
            name: '광복동1가',
          },
          {
            id: 'busan_15_002',
            name: '광복동1가',
          },
          {
            id: 'busan_15_003',
            name: '광복동2가',
          },
          {
            id: 'busan_15_004',
            name: '광복동2가',
          },
          {
            id: 'busan_15_005',
            name: '광복동3가',
          },
          {
            id: 'busan_15_006',
            name: '광복동3가',
          },
          {
            id: 'busan_15_007',
            name: '남포동1가',
          },
          {
            id: 'busan_15_008',
            name: '남포동1가',
          },
          {
            id: 'busan_15_009',
            name: '남포동2가',
          },
          {
            id: 'busan_15_010',
            name: '남포동2가',
          },
          {
            id: 'busan_15_011',
            name: '남포동3가',
          },
          {
            id: 'busan_15_012',
            name: '남포동3가',
          },
          {
            id: 'busan_15_013',
            name: '남포동4가',
          },
          {
            id: 'busan_15_014',
            name: '남포동4가',
          },
          {
            id: 'busan_15_015',
            name: '남포동5가',
          },
          {
            id: 'busan_15_016',
            name: '남포동5가',
          },
          {
            id: 'busan_15_017',
            name: '남포동6가',
          },
          {
            id: 'busan_15_018',
            name: '남포동6가',
          },
          {
            id: 'busan_15_019',
            name: '대교로1가',
          },
          {
            id: 'busan_15_020',
            name: '대교로2가',
          },
          {
            id: 'busan_15_021',
            name: '대창동1가',
          },
          {
            id: 'busan_15_022',
            name: '대창동1가',
          },
          {
            id: 'busan_15_023',
            name: '대창동2가',
          },
          {
            id: 'busan_15_024',
            name: '대창동2가',
          },
          {
            id: 'busan_15_025',
            name: '대청동1가',
          },
          {
            id: 'busan_15_026',
            name: '대청동1가',
          },
          {
            id: 'busan_15_027',
            name: '대청동2가',
          },
          {
            id: 'busan_15_028',
            name: '대청동2가',
          },
          {
            id: 'busan_15_029',
            name: '대청동3가',
          },
          {
            id: 'busan_15_030',
            name: '대청동3가',
          },
          {
            id: 'busan_15_031',
            name: '대청동4가',
          },
          {
            id: 'busan_15_032',
            name: '대청동4가',
          },
          {
            id: 'busan_15_033',
            name: '동광동1가',
          },
          {
            id: 'busan_15_034',
            name: '동광동1가',
          },
          {
            id: 'busan_15_035',
            name: '동광동2가',
          },
          {
            id: 'busan_15_036',
            name: '동광동2가',
          },
          {
            id: 'busan_15_037',
            name: '동광동3가',
          },
          {
            id: 'busan_15_038',
            name: '동광동3가',
          },
          {
            id: 'busan_15_039',
            name: '동광동4가',
          },
          {
            id: 'busan_15_040',
            name: '동광동4가',
          },
          {
            id: 'busan_15_041',
            name: '동광동5가',
          },
          {
            id: 'busan_15_042',
            name: '동광동5가',
          },
          {
            id: 'busan_15_043',
            name: '보수1동',
          },
          {
            id: 'busan_15_044',
            name: '보수2동',
          },
          {
            id: 'busan_15_045',
            name: '보수동1가',
          },
          {
            id: 'busan_15_046',
            name: '보수동1가',
          },
          {
            id: 'busan_15_047',
            name: '보수동2가',
          },
          {
            id: 'busan_15_048',
            name: '보수동2가',
          },
          {
            id: 'busan_15_049',
            name: '보수동3가',
          },
          {
            id: 'busan_15_050',
            name: '보수동3가',
          },
          {
            id: 'busan_15_051',
            name: '복병동',
          },
          {
            id: 'busan_15_052',
            name: '부평동1가',
          },
          {
            id: 'busan_15_053',
            name: '부평동1가',
          },
          {
            id: 'busan_15_054',
            name: '부평동2가',
          },
          {
            id: 'busan_15_055',
            name: '부평동2가',
          },
          {
            id: 'busan_15_056',
            name: '부평동3가',
          },
          {
            id: 'busan_15_057',
            name: '부평동3가',
          },
          {
            id: 'busan_15_058',
            name: '부평동4가',
          },
          {
            id: 'busan_15_059',
            name: '부평동4가',
          },
          {
            id: 'busan_15_060',
            name: '신창동1가',
          },
          {
            id: 'busan_15_061',
            name: '신창동1가',
          },
          {
            id: 'busan_15_062',
            name: '신창동2가',
          },
          {
            id: 'busan_15_063',
            name: '신창동2가',
          },
          {
            id: 'busan_15_064',
            name: '신창동3가',
          },
          {
            id: 'busan_15_065',
            name: '신창동3가',
          },
          {
            id: 'busan_15_066',
            name: '신창동4가',
          },
          {
            id: 'busan_15_067',
            name: '신창동4가',
          },
          {
            id: 'busan_15_068',
            name: '영주1동',
          },
          {
            id: 'busan_15_069',
            name: '영주2동',
          },
          {
            id: 'busan_15_070',
            name: '영주동',
          },
          {
            id: 'busan_15_071',
            name: '영주동',
          },
          {
            id: 'busan_15_072',
            name: '중앙동1가',
          },
          {
            id: 'busan_15_073',
            name: '중앙동1가',
          },
          {
            id: 'busan_15_074',
            name: '중앙동2가',
          },
          {
            id: 'busan_15_075',
            name: '중앙동2가',
          },
          {
            id: 'busan_15_076',
            name: '중앙동3가',
          },
          {
            id: 'busan_15_077',
            name: '중앙동3가',
          },
          {
            id: 'busan_15_078',
            name: '중앙동4가',
          },
          {
            id: 'busan_15_079',
            name: '중앙동4가',
          },
          {
            id: 'busan_15_080',
            name: '중앙동5가',
          },
          {
            id: 'busan_15_081',
            name: '중앙동5가',
          },
          {
            id: 'busan_15_082',
            name: '중앙동6가',
          },
          {
            id: 'busan_15_083',
            name: '중앙동6가',
          },
          {
            id: 'busan_15_084',
            name: '중앙동7가',
          },
          {
            id: 'busan_15_085',
            name: '중앙동7가',
          },
          {
            id: 'busan_15_086',
            name: '창선동1가',
          },
          {
            id: 'busan_15_087',
            name: '창선동1가',
          },
          {
            id: 'busan_15_088',
            name: '창선동2가',
          },
          {
            id: 'busan_15_089',
            name: '창선동2가',
          },
          {
            id: 'busan_15_090',
            name: '충무로1가',
          },
          {
            id: 'busan_15_091',
            name: '충무로2가',
          },
          {
            id: 'busan_15_092',
            name: '충무로3가',
          },
        ],
      },
      {
        id: 'busan_16',
        name: '해운대구',
        subregions: [
          {
            id: 'busan_16_001',
            name: '반송1동',
          },
          {
            id: 'busan_16_002',
            name: '반송2동',
          },
          {
            id: 'busan_16_003',
            name: '반송3동',
          },
          {
            id: 'busan_16_004',
            name: '반송동',
          },
          {
            id: 'busan_16_005',
            name: '반송동',
          },
          {
            id: 'busan_16_006',
            name: '반여1동',
          },
          {
            id: 'busan_16_007',
            name: '반여2동',
          },
          {
            id: 'busan_16_008',
            name: '반여3동',
          },
          {
            id: 'busan_16_009',
            name: '반여동',
          },
          {
            id: 'busan_16_010',
            name: '반여동',
          },
          {
            id: 'busan_16_011',
            name: '석대동',
          },
          {
            id: 'busan_16_012',
            name: '석대동',
          },
          {
            id: 'busan_16_013',
            name: '송정동',
          },
          {
            id: 'busan_16_014',
            name: '송정동',
          },
          {
            id: 'busan_16_015',
            name: '우1동',
          },
          {
            id: 'busan_16_016',
            name: '우2동',
          },
          {
            id: 'busan_16_017',
            name: '우동',
          },
          {
            id: 'busan_16_018',
            name: '우동',
          },
          {
            id: 'busan_16_019',
            name: '재송동',
          },
          {
            id: 'busan_16_020',
            name: '재송동',
          },
          {
            id: 'busan_16_021',
            name: '좌동',
          },
          {
            id: 'busan_16_022',
            name: '좌동',
          },
          {
            id: 'busan_16_023',
            name: '중1동',
          },
          {
            id: 'busan_16_024',
            name: '중2동',
          },
          {
            id: 'busan_16_025',
            name: '중동',
          },
          {
            id: 'busan_16_026',
            name: '중동',
          },
        ],
      },
    ],
  },
  {
    id: 'daegu',
    name: '대구',
    subregions: [
      {
        id: 'daegu_01',
        name: '군위군',
        subregions: [
          {
            id: 'daegu_01_001',
            name: '군위읍',
          },
          {
            id: 'daegu_01_002',
            name: '부계면',
          },
          {
            id: 'daegu_01_003',
            name: '산성면',
          },
          {
            id: 'daegu_01_004',
            name: '삼국유사면',
          },
          {
            id: 'daegu_01_005',
            name: '소보면',
          },
          {
            id: 'daegu_01_006',
            name: '우보면',
          },
          {
            id: 'daegu_01_007',
            name: '의흥면',
          },
          {
            id: 'daegu_01_008',
            name: '효령면',
          },
        ],
      },
      {
        id: 'daegu_02',
        name: '남구',
        subregions: [
          {
            id: 'daegu_02_001',
            name: '대곡동',
          },
          {
            id: 'daegu_02_002',
            name: '대명10동',
          },
          {
            id: 'daegu_02_003',
            name: '대명11동',
          },
          {
            id: 'daegu_02_004',
            name: '대명1동',
          },
          {
            id: 'daegu_02_005',
            name: '대명2동',
          },
          {
            id: 'daegu_02_006',
            name: '대명3동',
          },
          {
            id: 'daegu_02_007',
            name: '대명4동',
          },
          {
            id: 'daegu_02_008',
            name: '대명5동',
          },
          {
            id: 'daegu_02_009',
            name: '대명6동',
          },
          {
            id: 'daegu_02_010',
            name: '대명7동',
          },
          {
            id: 'daegu_02_011',
            name: '대명8동',
          },
          {
            id: 'daegu_02_012',
            name: '대명9동',
          },
          {
            id: 'daegu_02_013',
            name: '대명동',
          },
          {
            id: 'daegu_02_014',
            name: '대명동',
          },
          {
            id: 'daegu_02_015',
            name: '대천동',
          },
          {
            id: 'daegu_02_016',
            name: '도원동',
          },
          {
            id: 'daegu_02_017',
            name: '본동',
          },
          {
            id: 'daegu_02_018',
            name: '봉덕1동',
          },
          {
            id: 'daegu_02_019',
            name: '봉덕2동',
          },
          {
            id: 'daegu_02_020',
            name: '봉덕3동',
          },
          {
            id: 'daegu_02_021',
            name: '봉덕동',
          },
          {
            id: 'daegu_02_022',
            name: '봉덕동',
          },
          {
            id: 'daegu_02_023',
            name: '상인동',
          },
          {
            id: 'daegu_02_024',
            name: '송현동',
          },
          {
            id: 'daegu_02_025',
            name: '월성동',
          },
          {
            id: 'daegu_02_026',
            name: '월암동',
          },
          {
            id: 'daegu_02_027',
            name: '유천동',
          },
          {
            id: 'daegu_02_028',
            name: '이천1동',
          },
          {
            id: 'daegu_02_029',
            name: '이천2동',
          },
          {
            id: 'daegu_02_030',
            name: '이천동',
          },
          {
            id: 'daegu_02_031',
            name: '이천동',
          },
          {
            id: 'daegu_02_032',
            name: '진천동',
          },
        ],
      },
      {
        id: 'daegu_03',
        name: '달서구',
        subregions: [
          {
            id: 'daegu_03_001',
            name: '갈산동',
          },
          {
            id: 'daegu_03_002',
            name: '갈산동',
          },
          {
            id: 'daegu_03_003',
            name: '감삼동',
          },
          {
            id: 'daegu_03_004',
            name: '감삼동',
          },
          {
            id: 'daegu_03_005',
            name: '대곡동',
          },
          {
            id: 'daegu_03_006',
            name: '대곡동',
          },
          {
            id: 'daegu_03_007',
            name: '대천동',
          },
          {
            id: 'daegu_03_008',
            name: '대천동',
          },
          {
            id: 'daegu_03_009',
            name: '도원동',
          },
          {
            id: 'daegu_03_010',
            name: '도원동',
          },
          {
            id: 'daegu_03_011',
            name: '두류1동',
          },
          {
            id: 'daegu_03_012',
            name: '두류2동',
          },
          {
            id: 'daegu_03_013',
            name: '두류3동',
          },
          {
            id: 'daegu_03_014',
            name: '두류동',
          },
          {
            id: 'daegu_03_015',
            name: '두류동',
          },
          {
            id: 'daegu_03_016',
            name: '본동',
          },
          {
            id: 'daegu_03_017',
            name: '본동',
          },
          {
            id: 'daegu_03_018',
            name: '본리동',
          },
          {
            id: 'daegu_03_019',
            name: '본리동',
          },
          {
            id: 'daegu_03_020',
            name: '상인동',
          },
          {
            id: 'daegu_03_021',
            name: '상인동',
          },
          {
            id: 'daegu_03_022',
            name: '성당1동',
          },
          {
            id: 'daegu_03_023',
            name: '성당2동',
          },
          {
            id: 'daegu_03_024',
            name: '성당동',
          },
          {
            id: 'daegu_03_025',
            name: '성당동',
          },
          {
            id: 'daegu_03_026',
            name: '성서1동',
          },
          {
            id: 'daegu_03_027',
            name: '성서2동',
          },
          {
            id: 'daegu_03_028',
            name: '성서3동',
          },
          {
            id: 'daegu_03_029',
            name: '송현1동',
          },
          {
            id: 'daegu_03_030',
            name: '송현2동',
          },
          {
            id: 'daegu_03_031',
            name: '송현동',
          },
          {
            id: 'daegu_03_032',
            name: '송현동',
          },
          {
            id: 'daegu_03_033',
            name: '신당동',
          },
          {
            id: 'daegu_03_034',
            name: '신당동',
          },
          {
            id: 'daegu_03_035',
            name: '용산동',
          },
          {
            id: 'daegu_03_036',
            name: '용산동',
          },
          {
            id: 'daegu_03_037',
            name: '월배1동',
          },
          {
            id: 'daegu_03_038',
            name: '월배2동',
          },
          {
            id: 'daegu_03_039',
            name: '월배3동',
          },
          {
            id: 'daegu_03_040',
            name: '월성동',
          },
          {
            id: 'daegu_03_041',
            name: '월성동',
          },
          {
            id: 'daegu_03_042',
            name: '월암동',
          },
          {
            id: 'daegu_03_043',
            name: '월암동',
          },
          {
            id: 'daegu_03_044',
            name: '유천동',
          },
          {
            id: 'daegu_03_045',
            name: '유천동',
          },
          {
            id: 'daegu_03_046',
            name: '이곡동',
          },
          {
            id: 'daegu_03_047',
            name: '이곡동',
          },
          {
            id: 'daegu_03_048',
            name: '장기동',
          },
          {
            id: 'daegu_03_049',
            name: '장기동',
          },
          {
            id: 'daegu_03_050',
            name: '장동',
          },
          {
            id: 'daegu_03_051',
            name: '장동',
          },
          {
            id: 'daegu_03_052',
            name: '죽전동',
          },
          {
            id: 'daegu_03_053',
            name: '죽전동',
          },
          {
            id: 'daegu_03_054',
            name: '진천동',
          },
          {
            id: 'daegu_03_055',
            name: '진천동',
          },
          {
            id: 'daegu_03_056',
            name: '파산동',
          },
          {
            id: 'daegu_03_057',
            name: '파산동',
          },
          {
            id: 'daegu_03_058',
            name: '파호동',
          },
          {
            id: 'daegu_03_059',
            name: '파호동',
          },
          {
            id: 'daegu_03_060',
            name: '호림동',
          },
          {
            id: 'daegu_03_061',
            name: '호림동',
          },
          {
            id: 'daegu_03_062',
            name: '호산동',
          },
        ],
      },
      {
        id: 'daegu_04',
        name: '달성군',
        subregions: [
          {
            id: 'daegu_04_001',
            name: '가창면',
          },
          {
            id: 'daegu_04_002',
            name: '구지면',
          },
          {
            id: 'daegu_04_003',
            name: '논공면',
          },
          {
            id: 'daegu_04_004',
            name: '논공읍',
          },
          {
            id: 'daegu_04_005',
            name: '다사면',
          },
          {
            id: 'daegu_04_006',
            name: '다사읍',
          },
          {
            id: 'daegu_04_007',
            name: '옥포면',
          },
          {
            id: 'daegu_04_008',
            name: '옥포읍',
          },
          {
            id: 'daegu_04_009',
            name: '유가면',
          },
          {
            id: 'daegu_04_010',
            name: '유가읍',
          },
          {
            id: 'daegu_04_011',
            name: '하빈면',
          },
          {
            id: 'daegu_04_012',
            name: '현풍면',
          },
          {
            id: 'daegu_04_013',
            name: '현풍읍',
          },
          {
            id: 'daegu_04_014',
            name: '화원읍',
          },
        ],
      },
      {
        id: 'daegu_05',
        name: '동구',
        subregions: [
          {
            id: 'daegu_05_001',
            name: '각산동',
          },
          {
            id: 'daegu_05_002',
            name: '각산동',
          },
          {
            id: 'daegu_05_003',
            name: '검사동',
          },
          {
            id: 'daegu_05_004',
            name: '검사동',
          },
          {
            id: 'daegu_05_005',
            name: '공산1동',
          },
          {
            id: 'daegu_05_006',
            name: '공산2동',
          },
          {
            id: 'daegu_05_007',
            name: '괴전동',
          },
          {
            id: 'daegu_05_008',
            name: '괴전동',
          },
          {
            id: 'daegu_05_009',
            name: '금강동',
          },
          {
            id: 'daegu_05_010',
            name: '금강동',
          },
          {
            id: 'daegu_05_011',
            name: '내곡동',
          },
          {
            id: 'daegu_05_012',
            name: '내곡동',
          },
          {
            id: 'daegu_05_013',
            name: '내동',
          },
          {
            id: 'daegu_05_014',
            name: '내동',
          },
          {
            id: 'daegu_05_015',
            name: '능성동',
          },
          {
            id: 'daegu_05_016',
            name: '능성동',
          },
          {
            id: 'daegu_05_017',
            name: '대림동',
          },
          {
            id: 'daegu_05_018',
            name: '대림동',
          },
          {
            id: 'daegu_05_019',
            name: '덕곡동',
          },
          {
            id: 'daegu_05_020',
            name: '덕곡동',
          },
          {
            id: 'daegu_05_021',
            name: '도동',
          },
          {
            id: 'daegu_05_022',
            name: '도동',
          },
          {
            id: 'daegu_05_023',
            name: '도학동',
          },
          {
            id: 'daegu_05_024',
            name: '도학동',
          },
          {
            id: 'daegu_05_025',
            name: '동내동',
          },
          {
            id: 'daegu_05_026',
            name: '동내동',
          },
          {
            id: 'daegu_05_027',
            name: '동호동',
          },
          {
            id: 'daegu_05_028',
            name: '동호동',
          },
          {
            id: 'daegu_05_029',
            name: '둔산동',
          },
          {
            id: 'daegu_05_030',
            name: '둔산동',
          },
          {
            id: 'daegu_05_031',
            name: '매여동',
          },
          {
            id: 'daegu_05_032',
            name: '매여동',
          },
          {
            id: 'daegu_05_033',
            name: '미곡동',
          },
          {
            id: 'daegu_05_034',
            name: '미곡동',
          },
          {
            id: 'daegu_05_035',
            name: '미대동',
          },
          {
            id: 'daegu_05_036',
            name: '미대동',
          },
          {
            id: 'daegu_05_037',
            name: '방촌동',
          },
          {
            id: 'daegu_05_038',
            name: '방촌동',
          },
          {
            id: 'daegu_05_039',
            name: '백안동',
          },
          {
            id: 'daegu_05_040',
            name: '백안동',
          },
          {
            id: 'daegu_05_041',
            name: '봉무동',
          },
          {
            id: 'daegu_05_042',
            name: '봉무동',
          },
          {
            id: 'daegu_05_043',
            name: '부동',
          },
          {
            id: 'daegu_05_044',
            name: '부동',
          },
          {
            id: 'daegu_05_045',
            name: '불로동',
          },
          {
            id: 'daegu_05_046',
            name: '불로동',
          },
          {
            id: 'daegu_05_047',
            name: '사복동',
          },
          {
            id: 'daegu_05_048',
            name: '사복동',
          },
          {
            id: 'daegu_05_049',
            name: '상매동',
          },
          {
            id: 'daegu_05_050',
            name: '상매동',
          },
          {
            id: 'daegu_05_051',
            name: '서호동',
          },
          {
            id: 'daegu_05_052',
            name: '서호동',
          },
          {
            id: 'daegu_05_053',
            name: '송정동',
          },
          {
            id: 'daegu_05_054',
            name: '송정동',
          },
          {
            id: 'daegu_05_055',
            name: '숙천동',
          },
          {
            id: 'daegu_05_056',
            name: '숙천동',
          },
          {
            id: 'daegu_05_057',
            name: '신기동',
          },
          {
            id: 'daegu_05_058',
            name: '신기동',
          },
          {
            id: 'daegu_05_059',
            name: '신무동',
          },
          {
            id: 'daegu_05_060',
            name: '신무동',
          },
          {
            id: 'daegu_05_061',
            name: '신서동',
          },
          {
            id: 'daegu_05_062',
            name: '신서동',
          },
          {
            id: 'daegu_05_063',
            name: '신암1동',
          },
          {
            id: 'daegu_05_064',
            name: '신암2동',
          },
          {
            id: 'daegu_05_065',
            name: '신암3동',
          },
          {
            id: 'daegu_05_066',
            name: '신암4동',
          },
          {
            id: 'daegu_05_067',
            name: '신암동',
          },
          {
            id: 'daegu_05_068',
            name: '신암동',
          },
          {
            id: 'daegu_05_069',
            name: '신용동',
          },
          {
            id: 'daegu_05_070',
            name: '신용동',
          },
          {
            id: 'daegu_05_071',
            name: '신천1동',
          },
          {
            id: 'daegu_05_072',
            name: '신천2동',
          },
          {
            id: 'daegu_05_073',
            name: '신천3동',
          },
          {
            id: 'daegu_05_074',
            name: '신천4동',
          },
          {
            id: 'daegu_05_075',
            name: '신천동',
          },
          {
            id: 'daegu_05_076',
            name: '신천동',
          },
          {
            id: 'daegu_05_077',
            name: '신평동',
          },
          {
            id: 'daegu_05_078',
            name: '신평동',
          },
          {
            id: 'daegu_05_079',
            name: '안심1동',
          },
          {
            id: 'daegu_05_080',
            name: '안심2동',
          },
          {
            id: 'daegu_05_081',
            name: '안심3동',
          },
          {
            id: 'daegu_05_082',
            name: '안심4동',
          },
          {
            id: 'daegu_05_083',
            name: '안심동',
          },
          {
            id: 'daegu_05_084',
            name: '연경동',
          },
          {
            id: 'daegu_05_085',
            name: '용계동',
          },
          {
            id: 'daegu_05_086',
            name: '용계동',
          },
          {
            id: 'daegu_05_087',
            name: '용수동',
          },
          {
            id: 'daegu_05_088',
            name: '용수동',
          },
          {
            id: 'daegu_05_089',
            name: '율암동',
          },
          {
            id: 'daegu_05_090',
            name: '율암동',
          },
          {
            id: 'daegu_05_091',
            name: '율하동',
          },
          {
            id: 'daegu_05_092',
            name: '율하동',
          },
          {
            id: 'daegu_05_093',
            name: '입석동',
          },
          {
            id: 'daegu_05_094',
            name: '입석동',
          },
          {
            id: 'daegu_05_095',
            name: '중대동',
          },
          {
            id: 'daegu_05_096',
            name: '중대동',
          },
          {
            id: 'daegu_05_097',
            name: '지묘동',
          },
          {
            id: 'daegu_05_098',
            name: '지묘동',
          },
          {
            id: 'daegu_05_099',
            name: '지저동',
          },
          {
            id: 'daegu_05_100',
            name: '지저동',
          },
          {
            id: 'daegu_05_101',
            name: '진인동',
          },
          {
            id: 'daegu_05_102',
            name: '진인동',
          },
          {
            id: 'daegu_05_103',
            name: '평광동',
          },
          {
            id: 'daegu_05_104',
            name: '평광동',
          },
          {
            id: 'daegu_05_105',
            name: '효목1동',
          },
          {
            id: 'daegu_05_106',
            name: '효목2동',
          },
          {
            id: 'daegu_05_107',
            name: '효목동',
          },
          {
            id: 'daegu_05_108',
            name: '효목동',
          },
        ],
      },
      {
        id: 'daegu_06',
        name: '북구',
        subregions: [
          {
            id: 'daegu_06_001',
            name: '검단동',
          },
          {
            id: 'daegu_06_002',
            name: '검단동',
          },
          {
            id: 'daegu_06_003',
            name: '고성동',
          },
          {
            id: 'daegu_06_004',
            name: '고성동1가',
          },
          {
            id: 'daegu_06_005',
            name: '고성동1가',
          },
          {
            id: 'daegu_06_006',
            name: '고성동2가',
          },
          {
            id: 'daegu_06_007',
            name: '고성동2가',
          },
          {
            id: 'daegu_06_008',
            name: '고성동3가',
          },
          {
            id: 'daegu_06_009',
            name: '고성동3가',
          },
          {
            id: 'daegu_06_010',
            name: '관음동',
          },
          {
            id: 'daegu_06_011',
            name: '관음동',
          },
          {
            id: 'daegu_06_012',
            name: '구암동',
          },
          {
            id: 'daegu_06_013',
            name: '구암동',
          },
          {
            id: 'daegu_06_014',
            name: '국우동',
          },
          {
            id: 'daegu_06_015',
            name: '국우동',
          },
          {
            id: 'daegu_06_016',
            name: '금호동',
          },
          {
            id: 'daegu_06_017',
            name: '금호동',
          },
          {
            id: 'daegu_06_018',
            name: '노곡동',
          },
          {
            id: 'daegu_06_019',
            name: '노곡동',
          },
          {
            id: 'daegu_06_020',
            name: '노원3가1동',
          },
          {
            id: 'daegu_06_021',
            name: '노원3가2동',
          },
          {
            id: 'daegu_06_022',
            name: '노원동1가',
          },
          {
            id: 'daegu_06_023',
            name: '노원동1가',
          },
          {
            id: 'daegu_06_024',
            name: '노원동2가',
          },
          {
            id: 'daegu_06_025',
            name: '노원동2가',
          },
          {
            id: 'daegu_06_026',
            name: '노원동3가',
          },
          {
            id: 'daegu_06_027',
            name: '노원동3가',
          },
          {
            id: 'daegu_06_028',
            name: '대현1동',
          },
          {
            id: 'daegu_06_029',
            name: '대현2동',
          },
          {
            id: 'daegu_06_030',
            name: '대현3동',
          },
          {
            id: 'daegu_06_031',
            name: '대현동',
          },
          {
            id: 'daegu_06_032',
            name: '대현동',
          },
          {
            id: 'daegu_06_033',
            name: '도남동',
          },
          {
            id: 'daegu_06_034',
            name: '도남동',
          },
          {
            id: 'daegu_06_035',
            name: '동변동',
          },
          {
            id: 'daegu_06_036',
            name: '동변동',
          },
          {
            id: 'daegu_06_037',
            name: '동천동',
          },
          {
            id: 'daegu_06_038',
            name: '동천동',
          },
          {
            id: 'daegu_06_039',
            name: '동호동',
          },
          {
            id: 'daegu_06_040',
            name: '동호동',
          },
          {
            id: 'daegu_06_041',
            name: '매천동',
          },
          {
            id: 'daegu_06_042',
            name: '매천동',
          },
          {
            id: 'daegu_06_043',
            name: '무태동',
          },
          {
            id: 'daegu_06_044',
            name: '복현동',
          },
          {
            id: 'daegu_06_045',
            name: '복현동',
          },
          {
            id: 'daegu_06_046',
            name: '사수동',
          },
          {
            id: 'daegu_06_047',
            name: '사수동',
          },
          {
            id: 'daegu_06_048',
            name: '산격1동',
          },
          {
            id: 'daegu_06_049',
            name: '산격2동',
          },
          {
            id: 'daegu_06_050',
            name: '산격3동',
          },
          {
            id: 'daegu_06_051',
            name: '산격동',
          },
          {
            id: 'daegu_06_052',
            name: '산격동',
          },
          {
            id: 'daegu_06_053',
            name: '서변동',
          },
          {
            id: 'daegu_06_054',
            name: '서변동',
          },
          {
            id: 'daegu_06_055',
            name: '연경동',
          },
          {
            id: 'daegu_06_056',
            name: '연경동',
          },
          {
            id: 'daegu_06_057',
            name: '읍내동',
          },
          {
            id: 'daegu_06_058',
            name: '읍내동',
          },
          {
            id: 'daegu_06_059',
            name: '조야동',
          },
          {
            id: 'daegu_06_060',
            name: '조야동',
          },
          {
            id: 'daegu_06_061',
            name: '칠곡1동',
          },
          {
            id: 'daegu_06_062',
            name: '칠곡2동',
          },
          {
            id: 'daegu_06_063',
            name: '칠곡3동',
          },
          {
            id: 'daegu_06_064',
            name: '칠성1가동',
          },
          {
            id: 'daegu_06_065',
            name: '칠성2가1동',
          },
          {
            id: 'daegu_06_066',
            name: '칠성2가2동',
          },
          {
            id: 'daegu_06_067',
            name: '칠성동1가',
          },
          {
            id: 'daegu_06_068',
            name: '칠성동1가',
          },
          {
            id: 'daegu_06_069',
            name: '칠성동2가',
          },
          {
            id: 'daegu_06_070',
            name: '칠성동2가',
          },
          {
            id: 'daegu_06_071',
            name: '침산1동',
          },
          {
            id: 'daegu_06_072',
            name: '침산2동',
          },
          {
            id: 'daegu_06_073',
            name: '침산3동',
          },
          {
            id: 'daegu_06_074',
            name: '침산동',
          },
          {
            id: 'daegu_06_075',
            name: '침산동',
          },
          {
            id: 'daegu_06_076',
            name: '태전동',
          },
          {
            id: 'daegu_06_077',
            name: '태전동',
          },
          {
            id: 'daegu_06_078',
            name: '팔달동',
          },
          {
            id: 'daegu_06_079',
            name: '팔달동',
          },
          {
            id: 'daegu_06_080',
            name: '학정동',
          },
          {
            id: 'daegu_06_081',
            name: '학정동',
          },
        ],
      },
      {
        id: 'daegu_07',
        name: '서구',
        subregions: [
          {
            id: 'daegu_07_001',
            name: '갈산동',
          },
          {
            id: 'daegu_07_002',
            name: '감삼동',
          },
          {
            id: 'daegu_07_003',
            name: '내당1동',
          },
          {
            id: 'daegu_07_004',
            name: '내당2동',
          },
          {
            id: 'daegu_07_005',
            name: '내당3동',
          },
          {
            id: 'daegu_07_006',
            name: '내당4동',
          },
          {
            id: 'daegu_07_007',
            name: '내당동',
          },
          {
            id: 'daegu_07_008',
            name: '내당동',
          },
          {
            id: 'daegu_07_009',
            name: '본리동',
          },
          {
            id: 'daegu_07_010',
            name: '비산1동',
          },
          {
            id: 'daegu_07_011',
            name: '비산2동',
          },
          {
            id: 'daegu_07_012',
            name: '비산3동',
          },
          {
            id: 'daegu_07_013',
            name: '비산4동',
          },
          {
            id: 'daegu_07_014',
            name: '비산5동',
          },
          {
            id: 'daegu_07_015',
            name: '비산6동',
          },
          {
            id: 'daegu_07_016',
            name: '비산7동',
          },
          {
            id: 'daegu_07_017',
            name: '비산동',
          },
          {
            id: 'daegu_07_018',
            name: '비산동',
          },
          {
            id: 'daegu_07_019',
            name: '상리동',
          },
          {
            id: 'daegu_07_020',
            name: '상리동',
          },
          {
            id: 'daegu_07_021',
            name: '성당동',
          },
          {
            id: 'daegu_07_022',
            name: '신당동',
          },
          {
            id: 'daegu_07_023',
            name: '용산동',
          },
          {
            id: 'daegu_07_024',
            name: '원대3가동',
          },
          {
            id: 'daegu_07_025',
            name: '원대동1가',
          },
          {
            id: 'daegu_07_026',
            name: '원대동1가',
          },
          {
            id: 'daegu_07_027',
            name: '원대동2가',
          },
          {
            id: 'daegu_07_028',
            name: '원대동2가',
          },
          {
            id: 'daegu_07_029',
            name: '원대동3가',
          },
          {
            id: 'daegu_07_030',
            name: '원대동3가',
          },
          {
            id: 'daegu_07_031',
            name: '이곡동',
          },
          {
            id: 'daegu_07_032',
            name: '이현동',
          },
          {
            id: 'daegu_07_033',
            name: '이현동',
          },
          {
            id: 'daegu_07_034',
            name: '장기동',
          },
          {
            id: 'daegu_07_035',
            name: '장동',
          },
          {
            id: 'daegu_07_036',
            name: '죽전동',
          },
          {
            id: 'daegu_07_037',
            name: '중리동',
          },
          {
            id: 'daegu_07_038',
            name: '중리동',
          },
          {
            id: 'daegu_07_039',
            name: '파산동',
          },
          {
            id: 'daegu_07_040',
            name: '파호동',
          },
          {
            id: 'daegu_07_041',
            name: '평리1동',
          },
          {
            id: 'daegu_07_042',
            name: '평리2동',
          },
          {
            id: 'daegu_07_043',
            name: '평리3동',
          },
          {
            id: 'daegu_07_044',
            name: '평리4동',
          },
          {
            id: 'daegu_07_045',
            name: '평리5동',
          },
          {
            id: 'daegu_07_046',
            name: '평리동',
          },
          {
            id: 'daegu_07_047',
            name: '평리동',
          },
          {
            id: 'daegu_07_048',
            name: '호림동',
          },
        ],
      },
      {
        id: 'daegu_08',
        name: '수성구',
        subregions: [
          {
            id: 'daegu_08_001',
            name: '가천동',
          },
          {
            id: 'daegu_08_002',
            name: '가천동',
          },
          {
            id: 'daegu_08_003',
            name: '고모동',
          },
          {
            id: 'daegu_08_004',
            name: '고모동',
          },
          {
            id: 'daegu_08_005',
            name: '고산1동',
          },
          {
            id: 'daegu_08_006',
            name: '고산2동',
          },
          {
            id: 'daegu_08_007',
            name: '내환동',
          },
          {
            id: 'daegu_08_008',
            name: '내환동',
          },
          {
            id: 'daegu_08_009',
            name: '노변동',
          },
          {
            id: 'daegu_08_010',
            name: '노변동',
          },
          {
            id: 'daegu_08_011',
            name: '대흥동',
          },
          {
            id: 'daegu_08_012',
            name: '두산동',
          },
          {
            id: 'daegu_08_013',
            name: '두산동',
          },
          {
            id: 'daegu_08_014',
            name: '만촌1동',
          },
          {
            id: 'daegu_08_015',
            name: '만촌2동',
          },
          {
            id: 'daegu_08_016',
            name: '만촌동',
          },
          {
            id: 'daegu_08_017',
            name: '만촌동',
          },
          {
            id: 'daegu_08_018',
            name: '매호동',
          },
          {
            id: 'daegu_08_019',
            name: '매호동',
          },
          {
            id: 'daegu_08_020',
            name: '범물동',
          },
          {
            id: 'daegu_08_021',
            name: '범물동',
          },
          {
            id: 'daegu_08_022',
            name: '범어1동',
          },
          {
            id: 'daegu_08_023',
            name: '범어2동',
          },
          {
            id: 'daegu_08_024',
            name: '범어3동',
          },
          {
            id: 'daegu_08_025',
            name: '범어4동',
          },
          {
            id: 'daegu_08_026',
            name: '범어동',
          },
          {
            id: 'daegu_08_027',
            name: '범어동',
          },
          {
            id: 'daegu_08_028',
            name: '사월동',
          },
          {
            id: 'daegu_08_029',
            name: '사월동',
          },
          {
            id: 'daegu_08_030',
            name: '삼덕동',
          },
          {
            id: 'daegu_08_031',
            name: '삼덕동',
          },
          {
            id: 'daegu_08_032',
            name: '상동',
          },
          {
            id: 'daegu_08_033',
            name: '상동',
          },
          {
            id: 'daegu_08_034',
            name: '성동',
          },
          {
            id: 'daegu_08_035',
            name: '성동',
          },
          {
            id: 'daegu_08_036',
            name: '수성1가동',
          },
          {
            id: 'daegu_08_037',
            name: '수성4가동',
          },
          {
            id: 'daegu_08_038',
            name: '수성동1가',
          },
          {
            id: 'daegu_08_039',
            name: '수성동1가',
          },
          {
            id: 'daegu_08_040',
            name: '수성동2가',
          },
          {
            id: 'daegu_08_041',
            name: '수성동2가',
          },
          {
            id: 'daegu_08_042',
            name: '수성동3가',
          },
          {
            id: 'daegu_08_043',
            name: '수성동3가',
          },
          {
            id: 'daegu_08_044',
            name: '수성동4가',
          },
          {
            id: 'daegu_08_045',
            name: '수성동4가',
          },
          {
            id: 'daegu_08_046',
            name: '시지동',
          },
          {
            id: 'daegu_08_047',
            name: '시지동',
          },
          {
            id: 'daegu_08_048',
            name: '신매동',
          },
          {
            id: 'daegu_08_049',
            name: '신매동',
          },
          {
            id: 'daegu_08_050',
            name: '연호동',
          },
          {
            id: 'daegu_08_051',
            name: '연호동',
          },
          {
            id: 'daegu_08_052',
            name: '욱수동',
          },
          {
            id: 'daegu_08_053',
            name: '욱수동',
          },
          {
            id: 'daegu_08_054',
            name: '이천동',
          },
          {
            id: 'daegu_08_055',
            name: '이천동',
          },
          {
            id: 'daegu_08_056',
            name: '중동',
          },
          {
            id: 'daegu_08_057',
            name: '중동',
          },
          {
            id: 'daegu_08_058',
            name: '지산동',
          },
          {
            id: 'daegu_08_059',
            name: '지산동',
          },
          {
            id: 'daegu_08_060',
            name: '파동',
          },
          {
            id: 'daegu_08_061',
            name: '파동',
          },
          {
            id: 'daegu_08_062',
            name: '황금동',
          },
          {
            id: 'daegu_08_063',
            name: '황금동',
          },
        ],
      },
      {
        id: 'daegu_09',
        name: '중구',
        subregions: [
          {
            id: 'daegu_09_001',
            name: '계산동1가',
          },
          {
            id: 'daegu_09_002',
            name: '계산동1가',
          },
          {
            id: 'daegu_09_003',
            name: '계산동2가',
          },
          {
            id: 'daegu_09_004',
            name: '계산동2가',
          },
          {
            id: 'daegu_09_005',
            name: '공평동',
          },
          {
            id: 'daegu_09_006',
            name: '공평동',
          },
          {
            id: 'daegu_09_007',
            name: '교동',
          },
          {
            id: 'daegu_09_008',
            name: '교동',
          },
          {
            id: 'daegu_09_009',
            name: '남산1동',
          },
          {
            id: 'daegu_09_010',
            name: '남산2동',
          },
          {
            id: 'daegu_09_011',
            name: '남산3동',
          },
          {
            id: 'daegu_09_012',
            name: '남산4동',
          },
          {
            id: 'daegu_09_013',
            name: '남산동',
          },
          {
            id: 'daegu_09_014',
            name: '남산동',
          },
          {
            id: 'daegu_09_015',
            name: '남성동',
          },
          {
            id: 'daegu_09_016',
            name: '남성로',
          },
          {
            id: 'daegu_09_017',
            name: '남성로',
          },
          {
            id: 'daegu_09_018',
            name: '남일동',
          },
          {
            id: 'daegu_09_019',
            name: '남일동',
          },
          {
            id: 'daegu_09_020',
            name: '달성동',
          },
          {
            id: 'daegu_09_021',
            name: '달성동',
          },
          {
            id: 'daegu_09_022',
            name: '대봉1동',
          },
          {
            id: 'daegu_09_023',
            name: '대봉2동',
          },
          {
            id: 'daegu_09_024',
            name: '대봉동',
          },
          {
            id: 'daegu_09_025',
            name: '대봉동',
          },
          {
            id: 'daegu_09_026',
            name: '대신1동',
          },
          {
            id: 'daegu_09_027',
            name: '대신2동',
          },
          {
            id: 'daegu_09_028',
            name: '대신동',
          },
          {
            id: 'daegu_09_029',
            name: '대신동',
          },
          {
            id: 'daegu_09_030',
            name: '대안동',
          },
          {
            id: 'daegu_09_031',
            name: '대안동',
          },
          {
            id: 'daegu_09_032',
            name: '덕산동',
          },
          {
            id: 'daegu_09_033',
            name: '덕산동',
          },
          {
            id: 'daegu_09_034',
            name: '도원동',
          },
          {
            id: 'daegu_09_035',
            name: '도원동',
          },
          {
            id: 'daegu_09_036',
            name: '동문동',
          },
          {
            id: 'daegu_09_037',
            name: '동문동',
          },
          {
            id: 'daegu_09_038',
            name: '동산동',
          },
          {
            id: 'daegu_09_039',
            name: '동산동',
          },
          {
            id: 'daegu_09_040',
            name: '동성동',
          },
          {
            id: 'daegu_09_041',
            name: '동성로1가',
          },
          {
            id: 'daegu_09_042',
            name: '동성로1가',
          },
          {
            id: 'daegu_09_043',
            name: '동성로2가',
          },
          {
            id: 'daegu_09_044',
            name: '동성로2가',
          },
          {
            id: 'daegu_09_045',
            name: '동성로3가',
          },
          {
            id: 'daegu_09_046',
            name: '동성로3가',
          },
          {
            id: 'daegu_09_047',
            name: '동인3가동',
          },
          {
            id: 'daegu_09_048',
            name: '동인4가동',
          },
          {
            id: 'daegu_09_049',
            name: '동인동1가',
          },
          {
            id: 'daegu_09_050',
            name: '동인동1가',
          },
          {
            id: 'daegu_09_051',
            name: '동인동2가',
          },
          {
            id: 'daegu_09_052',
            name: '동인동2가',
          },
          {
            id: 'daegu_09_053',
            name: '동인동3가',
          },
          {
            id: 'daegu_09_054',
            name: '동인동3가',
          },
          {
            id: 'daegu_09_055',
            name: '동인동4가',
          },
          {
            id: 'daegu_09_056',
            name: '동인동4가',
          },
          {
            id: 'daegu_09_057',
            name: '동일동',
          },
          {
            id: 'daegu_09_058',
            name: '동일동',
          },
          {
            id: 'daegu_09_059',
            name: '문화동',
          },
          {
            id: 'daegu_09_060',
            name: '문화동',
          },
          {
            id: 'daegu_09_061',
            name: '봉산동',
          },
          {
            id: 'daegu_09_062',
            name: '봉산동',
          },
          {
            id: 'daegu_09_063',
            name: '북내동',
          },
          {
            id: 'daegu_09_064',
            name: '북내동',
          },
          {
            id: 'daegu_09_065',
            name: '북성동',
          },
          {
            id: 'daegu_09_066',
            name: '북성로1가',
          },
          {
            id: 'daegu_09_067',
            name: '북성로1가',
          },
          {
            id: 'daegu_09_068',
            name: '북성로2가',
          },
          {
            id: 'daegu_09_069',
            name: '북성로2가',
          },
          {
            id: 'daegu_09_070',
            name: '사일동',
          },
          {
            id: 'daegu_09_071',
            name: '사일동',
          },
          {
            id: 'daegu_09_072',
            name: '삼덕3가동',
          },
          {
            id: 'daegu_09_073',
            name: '삼덕동1가',
          },
          {
            id: 'daegu_09_074',
            name: '삼덕동1가',
          },
          {
            id: 'daegu_09_075',
            name: '삼덕동2가',
          },
          {
            id: 'daegu_09_076',
            name: '삼덕동2가',
          },
          {
            id: 'daegu_09_077',
            name: '삼덕동3가',
          },
          {
            id: 'daegu_09_078',
            name: '삼덕동3가',
          },
          {
            id: 'daegu_09_079',
            name: '상덕동',
          },
          {
            id: 'daegu_09_080',
            name: '상덕동',
          },
          {
            id: 'daegu_09_081',
            name: '상서동',
          },
          {
            id: 'daegu_09_082',
            name: '상서동',
          },
          {
            id: 'daegu_09_083',
            name: '서내동',
          },
          {
            id: 'daegu_09_084',
            name: '서내동',
          },
          {
            id: 'daegu_09_085',
            name: '서문로1가',
          },
          {
            id: 'daegu_09_086',
            name: '서문로1가',
          },
          {
            id: 'daegu_09_087',
            name: '서문로2가',
          },
          {
            id: 'daegu_09_088',
            name: '서문로2가',
          },
          {
            id: 'daegu_09_089',
            name: '서성동',
          },
          {
            id: 'daegu_09_090',
            name: '서성로1가',
          },
          {
            id: 'daegu_09_091',
            name: '서성로1가',
          },
          {
            id: 'daegu_09_092',
            name: '서성로2가',
          },
          {
            id: 'daegu_09_093',
            name: '서성로2가',
          },
          {
            id: 'daegu_09_094',
            name: '서야동',
          },
          {
            id: 'daegu_09_095',
            name: '서야동',
          },
          {
            id: 'daegu_09_096',
            name: '수동',
          },
          {
            id: 'daegu_09_097',
            name: '수동',
          },
          {
            id: 'daegu_09_098',
            name: '수창동',
          },
          {
            id: 'daegu_09_099',
            name: '수창동',
          },
          {
            id: 'daegu_09_100',
            name: '시장북로',
          },
          {
            id: 'daegu_09_101',
            name: '시장북로',
          },
          {
            id: 'daegu_09_102',
            name: '완전동',
          },
          {
            id: 'daegu_09_103',
            name: '완전동',
          },
          {
            id: 'daegu_09_104',
            name: '용덕동',
          },
          {
            id: 'daegu_09_105',
            name: '용덕동',
          },
          {
            id: 'daegu_09_106',
            name: '인교동',
          },
          {
            id: 'daegu_09_107',
            name: '인교동',
          },
          {
            id: 'daegu_09_108',
            name: '장관동',
          },
          {
            id: 'daegu_09_109',
            name: '장관동',
          },
          {
            id: 'daegu_09_110',
            name: '전동',
          },
          {
            id: 'daegu_09_111',
            name: '전동',
          },
          {
            id: 'daegu_09_112',
            name: '종로1가',
          },
          {
            id: 'daegu_09_113',
            name: '종로1가',
          },
          {
            id: 'daegu_09_114',
            name: '종로2가',
          },
          {
            id: 'daegu_09_115',
            name: '종로2가',
          },
          {
            id: 'daegu_09_116',
            name: '태평로1가',
          },
          {
            id: 'daegu_09_117',
            name: '태평로1가',
          },
          {
            id: 'daegu_09_118',
            name: '태평로2가',
          },
          {
            id: 'daegu_09_119',
            name: '태평로2가',
          },
          {
            id: 'daegu_09_120',
            name: '태평로3가',
          },
          {
            id: 'daegu_09_121',
            name: '태평로3가',
          },
          {
            id: 'daegu_09_122',
            name: '포정동',
          },
          {
            id: 'daegu_09_123',
            name: '포정동',
          },
          {
            id: 'daegu_09_124',
            name: '하서동',
          },
          {
            id: 'daegu_09_125',
            name: '하서동',
          },
          {
            id: 'daegu_09_126',
            name: '향촌동',
          },
          {
            id: 'daegu_09_127',
            name: '향촌동',
          },
          {
            id: 'daegu_09_128',
            name: '화전동',
          },
          {
            id: 'daegu_09_129',
            name: '화전동',
          },
        ],
      },
    ],
  },
  {
    id: 'gwangju',
    name: '광주',
    subregions: [
      {
        id: 'gwangju_01',
        name: '광산구',
        subregions: [
          {
            id: 'gwangju_01_001',
            name: '고룡동',
          },
          {
            id: 'gwangju_01_002',
            name: '고룡동',
          },
          {
            id: 'gwangju_01_003',
            name: '광산동',
          },
          {
            id: 'gwangju_01_004',
            name: '광산동',
          },
          {
            id: 'gwangju_01_005',
            name: '구소동',
          },
          {
            id: 'gwangju_01_006',
            name: '구소동',
          },
          {
            id: 'gwangju_01_007',
            name: '금호동',
          },
          {
            id: 'gwangju_01_008',
            name: '금호동',
          },
          {
            id: 'gwangju_01_009',
            name: '남산동',
          },
          {
            id: 'gwangju_01_010',
            name: '남산동',
          },
          {
            id: 'gwangju_01_011',
            name: '내산동',
          },
          {
            id: 'gwangju_01_012',
            name: '내산동',
          },
          {
            id: 'gwangju_01_013',
            name: '대산동',
          },
          {
            id: 'gwangju_01_014',
            name: '대산동',
          },
          {
            id: 'gwangju_01_015',
            name: '대지동',
          },
          {
            id: 'gwangju_01_016',
            name: '대지동',
          },
          {
            id: 'gwangju_01_017',
            name: '덕림동',
          },
          {
            id: 'gwangju_01_018',
            name: '덕림동',
          },
          {
            id: 'gwangju_01_019',
            name: '도금동',
          },
          {
            id: 'gwangju_01_020',
            name: '도금동',
          },
          {
            id: 'gwangju_01_021',
            name: '도덕동',
          },
          {
            id: 'gwangju_01_022',
            name: '도덕동',
          },
          {
            id: 'gwangju_01_023',
            name: '도산동',
          },
          {
            id: 'gwangju_01_024',
            name: '도산동',
          },
          {
            id: 'gwangju_01_025',
            name: '도천동',
          },
          {
            id: 'gwangju_01_026',
            name: '도천동',
          },
          {
            id: 'gwangju_01_027',
            name: '도촌동(道村)',
          },
          {
            id: 'gwangju_01_028',
            name: '도촌동(陶村)',
          },
          {
            id: 'gwangju_01_029',
            name: '도호동',
          },
          {
            id: 'gwangju_01_030',
            name: '도호동',
          },
          {
            id: 'gwangju_01_031',
            name: '동림동',
          },
          {
            id: 'gwangju_01_032',
            name: '동림동',
          },
          {
            id: 'gwangju_01_033',
            name: '동산동',
          },
          {
            id: 'gwangju_01_034',
            name: '동산동',
          },
          {
            id: 'gwangju_01_035',
            name: '동호동',
          },
          {
            id: 'gwangju_01_036',
            name: '동호동',
          },
          {
            id: 'gwangju_01_037',
            name: '두정동',
          },
          {
            id: 'gwangju_01_038',
            name: '두정동',
          },
          {
            id: 'gwangju_01_039',
            name: '등임동',
          },
          {
            id: 'gwangju_01_040',
            name: '등임동',
          },
          {
            id: 'gwangju_01_041',
            name: '마륵동',
          },
          {
            id: 'gwangju_01_042',
            name: '마륵동',
          },
          {
            id: 'gwangju_01_043',
            name: '매월동',
          },
          {
            id: 'gwangju_01_044',
            name: '매월동',
          },
          {
            id: 'gwangju_01_045',
            name: '명도동',
          },
          {
            id: 'gwangju_01_046',
            name: '명도동',
          },
          {
            id: 'gwangju_01_047',
            name: '명화동',
          },
          {
            id: 'gwangju_01_048',
            name: '명화동',
          },
          {
            id: 'gwangju_01_049',
            name: '박호동',
          },
          {
            id: 'gwangju_01_050',
            name: '박호동',
          },
          {
            id: 'gwangju_01_051',
            name: '벽진동',
          },
          {
            id: 'gwangju_01_052',
            name: '벽진동',
          },
          {
            id: 'gwangju_01_053',
            name: '복룡동',
          },
          {
            id: 'gwangju_01_054',
            name: '복룡동',
          },
          {
            id: 'gwangju_01_055',
            name: '본덕동',
          },
          {
            id: 'gwangju_01_056',
            name: '본덕동',
          },
          {
            id: 'gwangju_01_057',
            name: '북산동',
          },
          {
            id: 'gwangju_01_058',
            name: '북산동',
          },
          {
            id: 'gwangju_01_059',
            name: '비아동',
          },
          {
            id: 'gwangju_01_060',
            name: '비아동',
          },
          {
            id: 'gwangju_01_061',
            name: '사호동',
          },
          {
            id: 'gwangju_01_062',
            name: '사호동',
          },
          {
            id: 'gwangju_01_063',
            name: '산막동',
          },
          {
            id: 'gwangju_01_064',
            name: '산막동',
          },
          {
            id: 'gwangju_01_065',
            name: '산수동',
          },
          {
            id: 'gwangju_01_066',
            name: '산수동',
          },
          {
            id: 'gwangju_01_067',
            name: '산월동',
          },
          {
            id: 'gwangju_01_068',
            name: '산월동',
          },
          {
            id: 'gwangju_01_069',
            name: '산정동',
          },
          {
            id: 'gwangju_01_070',
            name: '산정동',
          },
          {
            id: 'gwangju_01_071',
            name: '삼거동',
          },
          {
            id: 'gwangju_01_072',
            name: '삼거동',
          },
          {
            id: 'gwangju_01_073',
            name: '삼도동',
          },
          {
            id: 'gwangju_01_074',
            name: '삼도동',
          },
          {
            id: 'gwangju_01_075',
            name: '서봉동',
          },
          {
            id: 'gwangju_01_076',
            name: '서봉동',
          },
          {
            id: 'gwangju_01_077',
            name: '서창동',
          },
          {
            id: 'gwangju_01_078',
            name: '서창동',
          },
          {
            id: 'gwangju_01_079',
            name: '석정동',
          },
          {
            id: 'gwangju_01_080',
            name: '석정동',
          },
          {
            id: 'gwangju_01_081',
            name: '선동',
          },
          {
            id: 'gwangju_01_082',
            name: '선동',
          },
          {
            id: 'gwangju_01_083',
            name: '선암동',
          },
          {
            id: 'gwangju_01_084',
            name: '선암동',
          },
          {
            id: 'gwangju_01_085',
            name: '세하동',
          },
          {
            id: 'gwangju_01_086',
            name: '세하동',
          },
          {
            id: 'gwangju_01_087',
            name: '소촌동',
          },
          {
            id: 'gwangju_01_088',
            name: '소촌동',
          },
          {
            id: 'gwangju_01_089',
            name: '송대동',
          },
          {
            id: 'gwangju_01_090',
            name: '송대동',
          },
          {
            id: 'gwangju_01_091',
            name: '송산동',
          },
          {
            id: 'gwangju_01_092',
            name: '송산동',
          },
          {
            id: 'gwangju_01_093',
            name: '송정동',
          },
          {
            id: 'gwangju_01_094',
            name: '송정동',
          },
          {
            id: 'gwangju_01_095',
            name: '송촌동',
          },
          {
            id: 'gwangju_01_096',
            name: '송촌동',
          },
          {
            id: 'gwangju_01_097',
            name: '송치동',
          },
          {
            id: 'gwangju_01_098',
            name: '송치동',
          },
          {
            id: 'gwangju_01_099',
            name: '송학동',
          },
          {
            id: 'gwangju_01_100',
            name: '송학동',
          },
          {
            id: 'gwangju_01_101',
            name: '수완동',
          },
          {
            id: 'gwangju_01_102',
            name: '수완동',
          },
          {
            id: 'gwangju_01_103',
            name: '승촌동',
          },
          {
            id: 'gwangju_01_104',
            name: '승촌동',
          },
          {
            id: 'gwangju_01_105',
            name: '신가동',
          },
          {
            id: 'gwangju_01_106',
            name: '신가동',
          },
          {
            id: 'gwangju_01_107',
            name: '신동',
          },
          {
            id: 'gwangju_01_108',
            name: '신동',
          },
          {
            id: 'gwangju_01_109',
            name: '신룡동',
          },
          {
            id: 'gwangju_01_110',
            name: '신룡동',
          },
          {
            id: 'gwangju_01_111',
            name: '신장동',
          },
          {
            id: 'gwangju_01_112',
            name: '신장동',
          },
          {
            id: 'gwangju_01_113',
            name: '신창동',
          },
          {
            id: 'gwangju_01_114',
            name: '신창동',
          },
          {
            id: 'gwangju_01_115',
            name: '신촌동',
          },
          {
            id: 'gwangju_01_116',
            name: '신촌동',
          },
          {
            id: 'gwangju_01_117',
            name: '신흥동',
          },
          {
            id: 'gwangju_01_118',
            name: '쌍암동',
          },
          {
            id: 'gwangju_01_119',
            name: '쌍암동',
          },
          {
            id: 'gwangju_01_120',
            name: '안청동',
          },
          {
            id: 'gwangju_01_121',
            name: '안청동',
          },
          {
            id: 'gwangju_01_122',
            name: '압촌동',
          },
          {
            id: 'gwangju_01_123',
            name: '압촌동',
          },
          {
            id: 'gwangju_01_124',
            name: '양과동',
          },
          {
            id: 'gwangju_01_125',
            name: '양과동',
          },
          {
            id: 'gwangju_01_126',
            name: '양동',
          },
          {
            id: 'gwangju_01_127',
            name: '양동',
          },
          {
            id: 'gwangju_01_128',
            name: '양산동',
          },
          {
            id: 'gwangju_01_129',
            name: '양산동',
          },
          {
            id: 'gwangju_01_130',
            name: '양촌동',
          },
          {
            id: 'gwangju_01_131',
            name: '양촌동',
          },
          {
            id: 'gwangju_01_132',
            name: '연산동',
          },
          {
            id: 'gwangju_01_133',
            name: '연산동',
          },
          {
            id: 'gwangju_01_134',
            name: '오산동',
          },
          {
            id: 'gwangju_01_135',
            name: '오산동',
          },
          {
            id: 'gwangju_01_136',
            name: '오선동',
          },
          {
            id: 'gwangju_01_137',
            name: '오선동',
          },
          {
            id: 'gwangju_01_138',
            name: '오운동',
          },
          {
            id: 'gwangju_01_139',
            name: '오운동',
          },
          {
            id: 'gwangju_01_140',
            name: '옥동',
          },
          {
            id: 'gwangju_01_141',
            name: '옥동',
          },
          {
            id: 'gwangju_01_142',
            name: '왕동',
          },
          {
            id: 'gwangju_01_143',
            name: '왕동',
          },
          {
            id: 'gwangju_01_144',
            name: '요기동',
          },
          {
            id: 'gwangju_01_145',
            name: '요기동',
          },
          {
            id: 'gwangju_01_146',
            name: '용곡동',
          },
          {
            id: 'gwangju_01_147',
            name: '용곡동',
          },
          {
            id: 'gwangju_01_148',
            name: '용동',
          },
          {
            id: 'gwangju_01_149',
            name: '용동',
          },
          {
            id: 'gwangju_01_150',
            name: '용두동',
          },
          {
            id: 'gwangju_01_151',
            name: '용두동',
          },
          {
            id: 'gwangju_01_152',
            name: '용봉동',
          },
          {
            id: 'gwangju_01_153',
            name: '용봉동',
          },
          {
            id: 'gwangju_01_154',
            name: '용운동',
          },
          {
            id: 'gwangju_01_155',
            name: '우산동',
          },
          {
            id: 'gwangju_01_156',
            name: '우산동',
          },
          {
            id: 'gwangju_01_157',
            name: '운남동',
          },
          {
            id: 'gwangju_01_158',
            name: '운남동',
          },
          {
            id: 'gwangju_01_159',
            name: '운수동',
          },
          {
            id: 'gwangju_01_160',
            name: '운수동',
          },
          {
            id: 'gwangju_01_161',
            name: '원동',
          },
          {
            id: 'gwangju_01_162',
            name: '원산동',
          },
          {
            id: 'gwangju_01_163',
            name: '원산동',
          },
          {
            id: 'gwangju_01_164',
            name: '월계동',
          },
          {
            id: 'gwangju_01_165',
            name: '월계동',
          },
          {
            id: 'gwangju_01_166',
            name: '월곡동',
          },
          {
            id: 'gwangju_01_167',
            name: '월곡동',
          },
          {
            id: 'gwangju_01_168',
            name: '월성동',
          },
          {
            id: 'gwangju_01_169',
            name: '월성동',
          },
          {
            id: 'gwangju_01_170',
            name: '월전동',
          },
          {
            id: 'gwangju_01_171',
            name: '월전동',
          },
          {
            id: 'gwangju_01_172',
            name: '유계동',
          },
          {
            id: 'gwangju_01_173',
            name: '유계동',
          },
          {
            id: 'gwangju_01_174',
            name: '이장동',
          },
          {
            id: 'gwangju_01_175',
            name: '이장동',
          },
          {
            id: 'gwangju_01_176',
            name: '임곡동',
          },
          {
            id: 'gwangju_01_177',
            name: '임곡동',
          },
          {
            id: 'gwangju_01_178',
            name: '장덕동',
          },
          {
            id: 'gwangju_01_179',
            name: '장덕동',
          },
          {
            id: 'gwangju_01_180',
            name: '장록동',
          },
          {
            id: 'gwangju_01_181',
            name: '장록동',
          },
          {
            id: 'gwangju_01_182',
            name: '장수동',
          },
          {
            id: 'gwangju_01_183',
            name: '장수동',
          },
          {
            id: 'gwangju_01_184',
            name: '중앙동',
          },
          {
            id: 'gwangju_01_185',
            name: '지산동',
          },
          {
            id: 'gwangju_01_186',
            name: '지산동',
          },
          {
            id: 'gwangju_01_187',
            name: '지석동',
          },
          {
            id: 'gwangju_01_188',
            name: '지석동',
          },
          {
            id: 'gwangju_01_189',
            name: '지정동',
          },
          {
            id: 'gwangju_01_190',
            name: '지정동',
          },
          {
            id: 'gwangju_01_191',
            name: '지죽동',
          },
          {
            id: 'gwangju_01_192',
            name: '지죽동',
          },
          {
            id: 'gwangju_01_193',
            name: '지평동',
          },
          {
            id: 'gwangju_01_194',
            name: '지평동',
          },
          {
            id: 'gwangju_01_195',
            name: '진곡동',
          },
          {
            id: 'gwangju_01_196',
            name: '진곡동',
          },
          {
            id: 'gwangju_01_197',
            name: '칠석동',
          },
          {
            id: 'gwangju_01_198',
            name: '칠석동',
          },
          {
            id: 'gwangju_01_199',
            name: '풍암동',
          },
          {
            id: 'gwangju_01_200',
            name: '풍암동',
          },
          {
            id: 'gwangju_01_201',
            name: '하남동',
          },
          {
            id: 'gwangju_01_202',
            name: '하남동',
          },
          {
            id: 'gwangju_01_203',
            name: '하산동',
          },
          {
            id: 'gwangju_01_204',
            name: '하산동',
          },
          {
            id: 'gwangju_01_205',
            name: '호남동',
          },
          {
            id: 'gwangju_01_206',
            name: '화장동',
          },
          {
            id: 'gwangju_01_207',
            name: '화장동',
          },
          {
            id: 'gwangju_01_208',
            name: '황룡동',
          },
          {
            id: 'gwangju_01_209',
            name: '황룡동',
          },
          {
            id: 'gwangju_01_210',
            name: '흑석동',
          },
          {
            id: 'gwangju_01_211',
            name: '흑석동',
          },
        ],
      },
      {
        id: 'gwangju_02',
        name: '남구',
        subregions: [
          {
            id: 'gwangju_02_001',
            name: '구동',
          },
          {
            id: 'gwangju_02_002',
            name: '구소동',
          },
          {
            id: 'gwangju_02_003',
            name: '노대동',
          },
          {
            id: 'gwangju_02_004',
            name: '대지동',
          },
          {
            id: 'gwangju_02_005',
            name: '덕남동',
          },
          {
            id: 'gwangju_02_006',
            name: '도금동',
          },
          {
            id: 'gwangju_02_007',
            name: '방림동',
          },
          {
            id: 'gwangju_02_008',
            name: '백운동',
          },
          {
            id: 'gwangju_02_009',
            name: '봉선동',
          },
          {
            id: 'gwangju_02_010',
            name: '사동',
          },
          {
            id: 'gwangju_02_011',
            name: '서동',
          },
          {
            id: 'gwangju_02_012',
            name: '석정동',
          },
          {
            id: 'gwangju_02_013',
            name: '송하동',
          },
          {
            id: 'gwangju_02_014',
            name: '승촌동',
          },
          {
            id: 'gwangju_02_015',
            name: '신장동',
          },
          {
            id: 'gwangju_02_016',
            name: '압촌동',
          },
          {
            id: 'gwangju_02_017',
            name: '양과동',
          },
          {
            id: 'gwangju_02_018',
            name: '양림동',
          },
          {
            id: 'gwangju_02_019',
            name: '양촌동',
          },
          {
            id: 'gwangju_02_020',
            name: '원산동',
          },
          {
            id: 'gwangju_02_021',
            name: '월산동',
          },
          {
            id: 'gwangju_02_022',
            name: '월성동',
          },
          {
            id: 'gwangju_02_023',
            name: '이장동',
          },
          {
            id: 'gwangju_02_024',
            name: '임암동',
          },
          {
            id: 'gwangju_02_025',
            name: '주월동',
          },
          {
            id: 'gwangju_02_026',
            name: '지석동',
          },
          {
            id: 'gwangju_02_027',
            name: '진월동',
          },
          {
            id: 'gwangju_02_028',
            name: '칠석동',
          },
          {
            id: 'gwangju_02_029',
            name: '행암동',
          },
          {
            id: 'gwangju_02_030',
            name: '화장동',
          },
        ],
      },
      {
        id: 'gwangju_03',
        name: '동구',
        subregions: [
          {
            id: 'gwangju_03_001',
            name: '계림1동',
          },
          {
            id: 'gwangju_03_002',
            name: '계림2동',
          },
          {
            id: 'gwangju_03_003',
            name: '계림3동',
          },
          {
            id: 'gwangju_03_004',
            name: '계림동',
          },
          {
            id: 'gwangju_03_005',
            name: '계림동',
          },
          {
            id: 'gwangju_03_006',
            name: '광산동',
          },
          {
            id: 'gwangju_03_007',
            name: '광산동',
          },
          {
            id: 'gwangju_03_008',
            name: '궁동',
          },
          {
            id: 'gwangju_03_009',
            name: '궁동',
          },
          {
            id: 'gwangju_03_010',
            name: '금남로1가',
          },
          {
            id: 'gwangju_03_011',
            name: '금남로1가',
          },
          {
            id: 'gwangju_03_012',
            name: '금남로2가',
          },
          {
            id: 'gwangju_03_013',
            name: '금남로2가',
          },
          {
            id: 'gwangju_03_014',
            name: '금남로3가',
          },
          {
            id: 'gwangju_03_015',
            name: '금남로3가',
          },
          {
            id: 'gwangju_03_016',
            name: '금남로4가',
          },
          {
            id: 'gwangju_03_017',
            name: '금남로4가',
          },
          {
            id: 'gwangju_03_018',
            name: '금남로5가',
          },
          {
            id: 'gwangju_03_019',
            name: '금남로5가',
          },
          {
            id: 'gwangju_03_020',
            name: '금동',
          },
          {
            id: 'gwangju_03_021',
            name: '금동',
          },
          {
            id: 'gwangju_03_022',
            name: '남금동',
          },
          {
            id: 'gwangju_03_023',
            name: '남동',
          },
          {
            id: 'gwangju_03_024',
            name: '남동',
          },
          {
            id: 'gwangju_03_025',
            name: '내남동',
          },
          {
            id: 'gwangju_03_026',
            name: '내남동',
          },
          {
            id: 'gwangju_03_027',
            name: '대금동',
          },
          {
            id: 'gwangju_03_028',
            name: '대의동',
          },
          {
            id: 'gwangju_03_029',
            name: '대의동',
          },
          {
            id: 'gwangju_03_030',
            name: '대인동',
          },
          {
            id: 'gwangju_03_031',
            name: '대인동',
          },
          {
            id: 'gwangju_03_032',
            name: '동명1동',
          },
          {
            id: 'gwangju_03_033',
            name: '동명2동',
          },
          {
            id: 'gwangju_03_034',
            name: '동명동',
          },
          {
            id: 'gwangju_03_035',
            name: '동명동',
          },
          {
            id: 'gwangju_03_036',
            name: '불로동',
          },
          {
            id: 'gwangju_03_037',
            name: '불로동',
          },
          {
            id: 'gwangju_03_038',
            name: '산수1동',
          },
          {
            id: 'gwangju_03_039',
            name: '산수2동',
          },
          {
            id: 'gwangju_03_040',
            name: '산수3동',
          },
          {
            id: 'gwangju_03_041',
            name: '산수동',
          },
          {
            id: 'gwangju_03_042',
            name: '산수동',
          },
          {
            id: 'gwangju_03_043',
            name: '삼성동',
          },
          {
            id: 'gwangju_03_044',
            name: '서석동',
          },
          {
            id: 'gwangju_03_045',
            name: '서석동',
          },
          {
            id: 'gwangju_03_046',
            name: '선교동',
          },
          {
            id: 'gwangju_03_047',
            name: '선교동',
          },
          {
            id: 'gwangju_03_048',
            name: '소태동',
          },
          {
            id: 'gwangju_03_049',
            name: '소태동',
          },
          {
            id: 'gwangju_03_050',
            name: '수기동',
          },
          {
            id: 'gwangju_03_051',
            name: '수기동',
          },
          {
            id: 'gwangju_03_052',
            name: '용산동',
          },
          {
            id: 'gwangju_03_053',
            name: '용산동',
          },
          {
            id: 'gwangju_03_054',
            name: '용연동',
          },
          {
            id: 'gwangju_03_055',
            name: '용연동',
          },
          {
            id: 'gwangju_03_056',
            name: '운림동',
          },
          {
            id: 'gwangju_03_057',
            name: '운림동',
          },
          {
            id: 'gwangju_03_058',
            name: '월남동',
          },
          {
            id: 'gwangju_03_059',
            name: '월남동',
          },
          {
            id: 'gwangju_03_060',
            name: '장동',
          },
          {
            id: 'gwangju_03_061',
            name: '장동',
          },
          {
            id: 'gwangju_03_062',
            name: '지산1동',
          },
          {
            id: 'gwangju_03_063',
            name: '지산2동',
          },
          {
            id: 'gwangju_03_064',
            name: '지산동',
          },
          {
            id: 'gwangju_03_065',
            name: '지산동',
          },
          {
            id: 'gwangju_03_066',
            name: '지원동',
          },
          {
            id: 'gwangju_03_067',
            name: '충금동',
          },
          {
            id: 'gwangju_03_068',
            name: '충수동',
          },
          {
            id: 'gwangju_03_069',
            name: '충장로1가',
          },
          {
            id: 'gwangju_03_070',
            name: '충장로1가',
          },
          {
            id: 'gwangju_03_071',
            name: '충장로2가',
          },
          {
            id: 'gwangju_03_072',
            name: '충장로2가',
          },
          {
            id: 'gwangju_03_073',
            name: '충장로3가',
          },
          {
            id: 'gwangju_03_074',
            name: '충장로3가',
          },
          {
            id: 'gwangju_03_075',
            name: '충장로4가',
          },
          {
            id: 'gwangju_03_076',
            name: '충장로4가',
          },
          {
            id: 'gwangju_03_077',
            name: '충장로5가',
          },
          {
            id: 'gwangju_03_078',
            name: '충장로5가',
          },
          {
            id: 'gwangju_03_079',
            name: '학1동',
          },
          {
            id: 'gwangju_03_080',
            name: '학2동',
          },
          {
            id: 'gwangju_03_081',
            name: '학3동',
          },
          {
            id: 'gwangju_03_082',
            name: '학동',
          },
          {
            id: 'gwangju_03_083',
            name: '학동',
          },
          {
            id: 'gwangju_03_084',
            name: '학운동',
          },
          {
            id: 'gwangju_03_085',
            name: '호남동',
          },
          {
            id: 'gwangju_03_086',
            name: '호남동',
          },
          {
            id: 'gwangju_03_087',
            name: '황금동',
          },
          {
            id: 'gwangju_03_088',
            name: '황금동',
          },
        ],
      },
      {
        id: 'gwangju_04',
        name: '북구',
        subregions: [
          {
            id: 'gwangju_04_001',
            name: '각화동',
          },
          {
            id: 'gwangju_04_002',
            name: '각화동',
          },
          {
            id: 'gwangju_04_003',
            name: '금곡동',
          },
          {
            id: 'gwangju_04_004',
            name: '금곡동',
          },
          {
            id: 'gwangju_04_005',
            name: '누문동',
          },
          {
            id: 'gwangju_04_006',
            name: '누문동',
          },
          {
            id: 'gwangju_04_007',
            name: '대촌동',
          },
          {
            id: 'gwangju_04_008',
            name: '대촌동',
          },
          {
            id: 'gwangju_04_009',
            name: '덕의동',
          },
          {
            id: 'gwangju_04_010',
            name: '덕의동',
          },
          {
            id: 'gwangju_04_011',
            name: '동림동',
          },
          {
            id: 'gwangju_04_012',
            name: '동림동',
          },
          {
            id: 'gwangju_04_013',
            name: '동운1동',
          },
          {
            id: 'gwangju_04_014',
            name: '동운2동',
          },
          {
            id: 'gwangju_04_015',
            name: '두암동',
          },
          {
            id: 'gwangju_04_016',
            name: '두암동',
          },
          {
            id: 'gwangju_04_017',
            name: '망월동',
          },
          {
            id: 'gwangju_04_018',
            name: '망월동',
          },
          {
            id: 'gwangju_04_019',
            name: '매곡동',
          },
          {
            id: 'gwangju_04_020',
            name: '매곡동',
          },
          {
            id: 'gwangju_04_021',
            name: '문화동',
          },
          {
            id: 'gwangju_04_022',
            name: '문흥동',
          },
          {
            id: 'gwangju_04_023',
            name: '문흥동',
          },
          {
            id: 'gwangju_04_024',
            name: '본촌동',
          },
          {
            id: 'gwangju_04_025',
            name: '본촌동',
          },
          {
            id: 'gwangju_04_026',
            name: '북동',
          },
          {
            id: 'gwangju_04_027',
            name: '북동',
          },
          {
            id: 'gwangju_04_028',
            name: '삼각동',
          },
          {
            id: 'gwangju_04_029',
            name: '삼각동',
          },
          {
            id: 'gwangju_04_030',
            name: '삼소동',
          },
          {
            id: 'gwangju_04_031',
            name: '생룡동',
          },
          {
            id: 'gwangju_04_032',
            name: '생용동',
          },
          {
            id: 'gwangju_04_033',
            name: '서산동',
          },
          {
            id: 'gwangju_04_034',
            name: '수곡동',
          },
          {
            id: 'gwangju_04_035',
            name: '수곡동',
          },
          {
            id: 'gwangju_04_036',
            name: '신안동',
          },
          {
            id: 'gwangju_04_037',
            name: '신안동',
          },
          {
            id: 'gwangju_04_038',
            name: '신용동',
          },
          {
            id: 'gwangju_04_039',
            name: '신용동',
          },
          {
            id: 'gwangju_04_040',
            name: '양산동',
          },
          {
            id: 'gwangju_04_041',
            name: '양산동',
          },
          {
            id: 'gwangju_04_042',
            name: '연제동',
          },
          {
            id: 'gwangju_04_043',
            name: '연제동',
          },
          {
            id: 'gwangju_04_044',
            name: '오룡동',
          },
          {
            id: 'gwangju_04_045',
            name: '오룡동',
          },
          {
            id: 'gwangju_04_046',
            name: '오치동',
          },
          {
            id: 'gwangju_04_047',
            name: '오치동',
          },
          {
            id: 'gwangju_04_048',
            name: '용강동',
          },
          {
            id: 'gwangju_04_049',
            name: '용강동',
          },
          {
            id: 'gwangju_04_050',
            name: '용두동',
          },
          {
            id: 'gwangju_04_051',
            name: '용두동',
          },
          {
            id: 'gwangju_04_052',
            name: '용봉동',
          },
          {
            id: 'gwangju_04_053',
            name: '용봉동',
          },
          {
            id: 'gwangju_04_054',
            name: '용전동',
          },
          {
            id: 'gwangju_04_055',
            name: '용전동',
          },
          {
            id: 'gwangju_04_056',
            name: '우산동',
          },
          {
            id: 'gwangju_04_057',
            name: '우산동',
          },
          {
            id: 'gwangju_04_058',
            name: '우치동',
          },
          {
            id: 'gwangju_04_059',
            name: '운암동',
          },
          {
            id: 'gwangju_04_060',
            name: '운암동',
          },
          {
            id: 'gwangju_04_061',
            name: '운정동',
          },
          {
            id: 'gwangju_04_062',
            name: '운정동',
          },
          {
            id: 'gwangju_04_063',
            name: '월출동',
          },
          {
            id: 'gwangju_04_064',
            name: '월출동',
          },
          {
            id: 'gwangju_04_065',
            name: '유동',
          },
          {
            id: 'gwangju_04_066',
            name: '유동',
          },
          {
            id: 'gwangju_04_067',
            name: '일곡동',
          },
          {
            id: 'gwangju_04_068',
            name: '일곡동',
          },
          {
            id: 'gwangju_04_069',
            name: '임동',
          },
          {
            id: 'gwangju_04_070',
            name: '임동',
          },
          {
            id: 'gwangju_04_071',
            name: '장등동',
          },
          {
            id: 'gwangju_04_072',
            name: '장등동',
          },
          {
            id: 'gwangju_04_073',
            name: '장운동',
          },
          {
            id: 'gwangju_04_074',
            name: '중흥1동',
          },
          {
            id: 'gwangju_04_075',
            name: '중흥2동',
          },
          {
            id: 'gwangju_04_076',
            name: '중흥동',
          },
          {
            id: 'gwangju_04_077',
            name: '중흥동',
          },
          {
            id: 'gwangju_04_078',
            name: '증흥3동',
          },
          {
            id: 'gwangju_04_079',
            name: '지야동',
          },
          {
            id: 'gwangju_04_080',
            name: '지야동',
          },
          {
            id: 'gwangju_04_081',
            name: '청옥동',
          },
          {
            id: 'gwangju_04_082',
            name: '청풍동',
          },
          {
            id: 'gwangju_04_083',
            name: '청풍동',
          },
          {
            id: 'gwangju_04_084',
            name: '충효동',
          },
          {
            id: 'gwangju_04_085',
            name: '충효동',
          },
          {
            id: 'gwangju_04_086',
            name: '태령동',
          },
          {
            id: 'gwangju_04_087',
            name: '태령동',
          },
          {
            id: 'gwangju_04_088',
            name: '풍향1동',
          },
          {
            id: 'gwangju_04_089',
            name: '풍향2동',
          },
          {
            id: 'gwangju_04_090',
            name: '풍향동',
          },
          {
            id: 'gwangju_04_091',
            name: '풍향동',
          },
          {
            id: 'gwangju_04_092',
            name: '화암동',
          },
          {
            id: 'gwangju_04_093',
            name: '화암동',
          },
          {
            id: 'gwangju_04_094',
            name: '효령동',
          },
          {
            id: 'gwangju_04_095',
            name: '효령동',
          },
        ],
      },
      {
        id: 'gwangju_05',
        name: '서구',
        subregions: [
          {
            id: 'gwangju_05_001',
            name: '광천동',
          },
          {
            id: 'gwangju_05_002',
            name: '광천동',
          },
          {
            id: 'gwangju_05_003',
            name: '구동',
          },
          {
            id: 'gwangju_05_004',
            name: '구동',
          },
          {
            id: 'gwangju_05_005',
            name: '금호동',
          },
          {
            id: 'gwangju_05_006',
            name: '내방동',
          },
          {
            id: 'gwangju_05_007',
            name: '내방동',
          },
          {
            id: 'gwangju_05_008',
            name: '노대동',
          },
          {
            id: 'gwangju_05_009',
            name: '노대동',
          },
          {
            id: 'gwangju_05_010',
            name: '농성1동',
          },
          {
            id: 'gwangju_05_011',
            name: '농성2동',
          },
          {
            id: 'gwangju_05_012',
            name: '농성동',
          },
          {
            id: 'gwangju_05_013',
            name: '농성동',
          },
          {
            id: 'gwangju_05_014',
            name: '덕남동',
          },
          {
            id: 'gwangju_05_015',
            name: '덕남동',
          },
          {
            id: 'gwangju_05_016',
            name: '덕흥동',
          },
          {
            id: 'gwangju_05_017',
            name: '덕흥동',
          },
          {
            id: 'gwangju_05_018',
            name: '동천동',
          },
          {
            id: 'gwangju_05_019',
            name: '마륵동',
          },
          {
            id: 'gwangju_05_020',
            name: '매월동',
          },
          {
            id: 'gwangju_05_021',
            name: '방림1동',
          },
          {
            id: 'gwangju_05_022',
            name: '방림2동',
          },
          {
            id: 'gwangju_05_023',
            name: '방림동',
          },
          {
            id: 'gwangju_05_024',
            name: '방림동',
          },
          {
            id: 'gwangju_05_025',
            name: '백운1동',
          },
          {
            id: 'gwangju_05_026',
            name: '백운2동',
          },
          {
            id: 'gwangju_05_027',
            name: '백운동',
          },
          {
            id: 'gwangju_05_028',
            name: '백운동',
          },
          {
            id: 'gwangju_05_029',
            name: '벽진동',
          },
          {
            id: 'gwangju_05_030',
            name: '봉선동',
          },
          {
            id: 'gwangju_05_031',
            name: '봉선동',
          },
          {
            id: 'gwangju_05_032',
            name: '사구동',
          },
          {
            id: 'gwangju_05_033',
            name: '사동',
          },
          {
            id: 'gwangju_05_034',
            name: '사동',
          },
          {
            id: 'gwangju_05_035',
            name: '서1동',
          },
          {
            id: 'gwangju_05_036',
            name: '서2동',
          },
          {
            id: 'gwangju_05_037',
            name: '서동',
          },
          {
            id: 'gwangju_05_038',
            name: '서동',
          },
          {
            id: 'gwangju_05_039',
            name: '서창동',
          },
          {
            id: 'gwangju_05_040',
            name: '세하동',
          },
          {
            id: 'gwangju_05_041',
            name: '송암동',
          },
          {
            id: 'gwangju_05_042',
            name: '송하동',
          },
          {
            id: 'gwangju_05_043',
            name: '송하동',
          },
          {
            id: 'gwangju_05_044',
            name: '쌍촌동',
          },
          {
            id: 'gwangju_05_045',
            name: '쌍촌동',
          },
          {
            id: 'gwangju_05_046',
            name: '양1동',
          },
          {
            id: 'gwangju_05_047',
            name: '양2동',
          },
          {
            id: 'gwangju_05_048',
            name: '양3동',
          },
          {
            id: 'gwangju_05_049',
            name: '양동',
          },
          {
            id: 'gwangju_05_050',
            name: '양동',
          },
          {
            id: 'gwangju_05_051',
            name: '양림동',
          },
          {
            id: 'gwangju_05_052',
            name: '양림동',
          },
          {
            id: 'gwangju_05_053',
            name: '용두동',
          },
          {
            id: 'gwangju_05_054',
            name: '월산1동',
          },
          {
            id: 'gwangju_05_055',
            name: '월산2동',
          },
          {
            id: 'gwangju_05_056',
            name: '월산3동',
          },
          {
            id: 'gwangju_05_057',
            name: '월산4동',
          },
          {
            id: 'gwangju_05_058',
            name: '월산5동',
          },
          {
            id: 'gwangju_05_059',
            name: '월산동',
          },
          {
            id: 'gwangju_05_060',
            name: '월산동',
          },
          {
            id: 'gwangju_05_061',
            name: '유덕동',
          },
          {
            id: 'gwangju_05_062',
            name: '유촌동',
          },
          {
            id: 'gwangju_05_063',
            name: '유촌동',
          },
          {
            id: 'gwangju_05_064',
            name: '임암동',
          },
          {
            id: 'gwangju_05_065',
            name: '임암동',
          },
          {
            id: 'gwangju_05_066',
            name: '주월1동',
          },
          {
            id: 'gwangju_05_067',
            name: '주월2동',
          },
          {
            id: 'gwangju_05_068',
            name: '주월동',
          },
          {
            id: 'gwangju_05_069',
            name: '주월동',
          },
          {
            id: 'gwangju_05_070',
            name: '진월동',
          },
          {
            id: 'gwangju_05_071',
            name: '진월동',
          },
          {
            id: 'gwangju_05_072',
            name: '치평동',
          },
          {
            id: 'gwangju_05_073',
            name: '치평동',
          },
          {
            id: 'gwangju_05_074',
            name: '풍암동',
          },
          {
            id: 'gwangju_05_075',
            name: '행암동',
          },
          {
            id: 'gwangju_05_076',
            name: '행암동',
          },
          {
            id: 'gwangju_05_077',
            name: '화내동',
          },
          {
            id: 'gwangju_05_078',
            name: '화정1동',
          },
          {
            id: 'gwangju_05_079',
            name: '화정2동',
          },
          {
            id: 'gwangju_05_080',
            name: '화정동',
          },
          {
            id: 'gwangju_05_081',
            name: '화정동',
          },
          {
            id: 'gwangju_05_082',
            name: '효덕동',
          },
        ],
      },
    ],
  },
  {
    id: 'daejeon',
    name: '대전',
    subregions: [
      {
        id: 'daejeon_01',
        name: '대덕구',
        subregions: [
          {
            id: 'daejeon_01_001',
            name: '갈전동',
          },
          {
            id: 'daejeon_01_002',
            name: '갈전동',
          },
          {
            id: 'daejeon_01_003',
            name: '대화동',
          },
          {
            id: 'daejeon_01_004',
            name: '대화동',
          },
          {
            id: 'daejeon_01_005',
            name: '덕암동',
          },
          {
            id: 'daejeon_01_006',
            name: '덕암동',
          },
          {
            id: 'daejeon_01_007',
            name: '목상동',
          },
          {
            id: 'daejeon_01_008',
            name: '목상동',
          },
          {
            id: 'daejeon_01_009',
            name: '문평동',
          },
          {
            id: 'daejeon_01_010',
            name: '문평동',
          },
          {
            id: 'daejeon_01_011',
            name: '미호동',
          },
          {
            id: 'daejeon_01_012',
            name: '미호동',
          },
          {
            id: 'daejeon_01_013',
            name: '법동',
          },
          {
            id: 'daejeon_01_014',
            name: '법동',
          },
          {
            id: 'daejeon_01_015',
            name: '부수동',
          },
          {
            id: 'daejeon_01_016',
            name: '부수동',
          },
          {
            id: 'daejeon_01_017',
            name: '비래동',
          },
          {
            id: 'daejeon_01_018',
            name: '비래동',
          },
          {
            id: 'daejeon_01_019',
            name: '삼정동',
          },
          {
            id: 'daejeon_01_020',
            name: '삼정동',
          },
          {
            id: 'daejeon_01_021',
            name: '상서동',
          },
          {
            id: 'daejeon_01_022',
            name: '상서동',
          },
          {
            id: 'daejeon_01_023',
            name: '석봉동',
          },
          {
            id: 'daejeon_01_024',
            name: '석봉동',
          },
          {
            id: 'daejeon_01_025',
            name: '송촌동',
          },
          {
            id: 'daejeon_01_026',
            name: '송촌동',
          },
          {
            id: 'daejeon_01_027',
            name: '신대동',
          },
          {
            id: 'daejeon_01_028',
            name: '신대동',
          },
          {
            id: 'daejeon_01_029',
            name: '신일동',
          },
          {
            id: 'daejeon_01_030',
            name: '신일동',
          },
          {
            id: 'daejeon_01_031',
            name: '신탄진동',
          },
          {
            id: 'daejeon_01_032',
            name: '신탄진동',
          },
          {
            id: 'daejeon_01_033',
            name: '연축동',
          },
          {
            id: 'daejeon_01_034',
            name: '연축동',
          },
          {
            id: 'daejeon_01_035',
            name: '오정동',
          },
          {
            id: 'daejeon_01_036',
            name: '오정동',
          },
          {
            id: 'daejeon_01_037',
            name: '와동',
          },
          {
            id: 'daejeon_01_038',
            name: '와동',
          },
          {
            id: 'daejeon_01_039',
            name: '용호동',
          },
          {
            id: 'daejeon_01_040',
            name: '용호동',
          },
          {
            id: 'daejeon_01_041',
            name: '읍내동',
          },
          {
            id: 'daejeon_01_042',
            name: '읍내동',
          },
          {
            id: 'daejeon_01_043',
            name: '이현동',
          },
          {
            id: 'daejeon_01_044',
            name: '이현동',
          },
          {
            id: 'daejeon_01_045',
            name: '장동',
          },
          {
            id: 'daejeon_01_046',
            name: '장동',
          },
          {
            id: 'daejeon_01_047',
            name: '중리동',
          },
          {
            id: 'daejeon_01_048',
            name: '중리동',
          },
          {
            id: 'daejeon_01_049',
            name: '평촌동',
          },
          {
            id: 'daejeon_01_050',
            name: '평촌동',
          },
          {
            id: 'daejeon_01_051',
            name: '황호동',
          },
          {
            id: 'daejeon_01_052',
            name: '황호동',
          },
          {
            id: 'daejeon_01_053',
            name: '회덕1동',
          },
          {
            id: 'daejeon_01_054',
            name: '회덕2동',
          },
        ],
      },
      {
        id: 'daejeon_02',
        name: '동구',
        subregions: [
          {
            id: 'daejeon_02_001',
            name: '가양1동',
          },
          {
            id: 'daejeon_02_002',
            name: '가양2동',
          },
          {
            id: 'daejeon_02_003',
            name: '가양동',
          },
          {
            id: 'daejeon_02_004',
            name: '가양동',
          },
          {
            id: 'daejeon_02_005',
            name: '가오동',
          },
          {
            id: 'daejeon_02_006',
            name: '가오동',
          },
          {
            id: 'daejeon_02_007',
            name: '구도동',
          },
          {
            id: 'daejeon_02_008',
            name: '구도동',
          },
          {
            id: 'daejeon_02_009',
            name: '낭월동',
          },
          {
            id: 'daejeon_02_010',
            name: '낭월동',
          },
          {
            id: 'daejeon_02_011',
            name: '내탑동',
          },
          {
            id: 'daejeon_02_012',
            name: '내탑동',
          },
          {
            id: 'daejeon_02_013',
            name: '대동',
          },
          {
            id: 'daejeon_02_014',
            name: '대동',
          },
          {
            id: 'daejeon_02_015',
            name: '대동1동',
          },
          {
            id: 'daejeon_02_016',
            name: '대동2동',
          },
          {
            id: 'daejeon_02_017',
            name: '대별동',
          },
          {
            id: 'daejeon_02_018',
            name: '대별동',
          },
          {
            id: 'daejeon_02_019',
            name: '대성동',
          },
          {
            id: 'daejeon_02_020',
            name: '대성동',
          },
          {
            id: 'daejeon_02_021',
            name: '마산동',
          },
          {
            id: 'daejeon_02_022',
            name: '마산동',
          },
          {
            id: 'daejeon_02_023',
            name: '비룡동',
          },
          {
            id: 'daejeon_02_024',
            name: '비룡동',
          },
          {
            id: 'daejeon_02_025',
            name: '사성동',
          },
          {
            id: 'daejeon_02_026',
            name: '사성동',
          },
          {
            id: 'daejeon_02_027',
            name: '산내동',
          },
          {
            id: 'daejeon_02_028',
            name: '삼괴동',
          },
          {
            id: 'daejeon_02_029',
            name: '삼괴동',
          },
          {
            id: 'daejeon_02_030',
            name: '삼성1동',
          },
          {
            id: 'daejeon_02_031',
            name: '삼성2동',
          },
          {
            id: 'daejeon_02_032',
            name: '삼성동',
          },
          {
            id: 'daejeon_02_033',
            name: '삼성동',
          },
          {
            id: 'daejeon_02_034',
            name: '삼정동',
          },
          {
            id: 'daejeon_02_035',
            name: '삼정동',
          },
          {
            id: 'daejeon_02_036',
            name: '상소동',
          },
          {
            id: 'daejeon_02_037',
            name: '상소동',
          },
          {
            id: 'daejeon_02_038',
            name: '성남1동',
          },
          {
            id: 'daejeon_02_039',
            name: '성남2동',
          },
          {
            id: 'daejeon_02_040',
            name: '성남동',
          },
          {
            id: 'daejeon_02_041',
            name: '성남동',
          },
          {
            id: 'daejeon_02_042',
            name: '세천동',
          },
          {
            id: 'daejeon_02_043',
            name: '세천동',
          },
          {
            id: 'daejeon_02_044',
            name: '소제동',
          },
          {
            id: 'daejeon_02_045',
            name: '소제동',
          },
          {
            id: 'daejeon_02_046',
            name: '소호동',
          },
          {
            id: 'daejeon_02_047',
            name: '소호동',
          },
          {
            id: 'daejeon_02_048',
            name: '신상동',
          },
          {
            id: 'daejeon_02_049',
            name: '신상동',
          },
          {
            id: 'daejeon_02_050',
            name: '신안동',
          },
          {
            id: 'daejeon_02_051',
            name: '신안동',
          },
          {
            id: 'daejeon_02_052',
            name: '신촌동',
          },
          {
            id: 'daejeon_02_053',
            name: '신촌동',
          },
          {
            id: 'daejeon_02_054',
            name: '신하동',
          },
          {
            id: 'daejeon_02_055',
            name: '신하동',
          },
          {
            id: 'daejeon_02_056',
            name: '신흥동',
          },
          {
            id: 'daejeon_02_057',
            name: '신흥동',
          },
          {
            id: 'daejeon_02_058',
            name: '오동',
          },
          {
            id: 'daejeon_02_059',
            name: '오동',
          },
          {
            id: 'daejeon_02_060',
            name: '용계동',
          },
          {
            id: 'daejeon_02_061',
            name: '용계동',
          },
          {
            id: 'daejeon_02_062',
            name: '용운동',
          },
          {
            id: 'daejeon_02_063',
            name: '용운동',
          },
          {
            id: 'daejeon_02_064',
            name: '용전동',
          },
          {
            id: 'daejeon_02_065',
            name: '용전동',
          },
          {
            id: 'daejeon_02_066',
            name: '원동',
          },
          {
            id: 'daejeon_02_067',
            name: '원동',
          },
          {
            id: 'daejeon_02_068',
            name: '이사동',
          },
          {
            id: 'daejeon_02_069',
            name: '이사동',
          },
          {
            id: 'daejeon_02_070',
            name: '인동',
          },
          {
            id: 'daejeon_02_071',
            name: '인동',
          },
          {
            id: 'daejeon_02_072',
            name: '자양동',
          },
          {
            id: 'daejeon_02_073',
            name: '자양동',
          },
          {
            id: 'daejeon_02_074',
            name: '장척동',
          },
          {
            id: 'daejeon_02_075',
            name: '장척동',
          },
          {
            id: 'daejeon_02_076',
            name: '정동',
          },
          {
            id: 'daejeon_02_077',
            name: '정동',
          },
          {
            id: 'daejeon_02_078',
            name: '주산동',
          },
          {
            id: 'daejeon_02_079',
            name: '주산동',
          },
          {
            id: 'daejeon_02_080',
            name: '주촌동',
          },
          {
            id: 'daejeon_02_081',
            name: '주촌동',
          },
          {
            id: 'daejeon_02_082',
            name: '중동',
          },
          {
            id: 'daejeon_02_083',
            name: '중동',
          },
          {
            id: 'daejeon_02_084',
            name: '직동',
          },
          {
            id: 'daejeon_02_085',
            name: '직동',
          },
          {
            id: 'daejeon_02_086',
            name: '천동',
          },
          {
            id: 'daejeon_02_087',
            name: '천동',
          },
          {
            id: 'daejeon_02_088',
            name: '추동',
          },
          {
            id: 'daejeon_02_089',
            name: '추동',
          },
          {
            id: 'daejeon_02_090',
            name: '판암동',
          },
          {
            id: 'daejeon_02_091',
            name: '판암동',
          },
          {
            id: 'daejeon_02_092',
            name: '하소동',
          },
          {
            id: 'daejeon_02_093',
            name: '하소동',
          },
          {
            id: 'daejeon_02_094',
            name: '홍도동',
          },
          {
            id: 'daejeon_02_095',
            name: '홍도동',
          },
          {
            id: 'daejeon_02_096',
            name: '효동',
          },
          {
            id: 'daejeon_02_097',
            name: '효동',
          },
          {
            id: 'daejeon_02_098',
            name: '효평동',
          },
          {
            id: 'daejeon_02_099',
            name: '효평동',
          },
        ],
      },
      {
        id: 'daejeon_03',
        name: '서구',
        subregions: [
          {
            id: 'daejeon_03_001',
            name: '가수원동',
          },
          {
            id: 'daejeon_03_002',
            name: '가수원동',
          },
          {
            id: 'daejeon_03_003',
            name: '가장동',
          },
          {
            id: 'daejeon_03_004',
            name: '가장동',
          },
          {
            id: 'daejeon_03_005',
            name: '갈마동',
          },
          {
            id: 'daejeon_03_006',
            name: '갈마동',
          },
          {
            id: 'daejeon_03_007',
            name: '관저동',
          },
          {
            id: 'daejeon_03_008',
            name: '관저동',
          },
          {
            id: 'daejeon_03_009',
            name: '괴곡동',
          },
          {
            id: 'daejeon_03_010',
            name: '괴곡동',
          },
          {
            id: 'daejeon_03_011',
            name: '괴정동',
          },
          {
            id: 'daejeon_03_012',
            name: '괴정동',
          },
          {
            id: 'daejeon_03_013',
            name: '기성동',
          },
          {
            id: 'daejeon_03_014',
            name: '내동',
          },
          {
            id: 'daejeon_03_015',
            name: '내동',
          },
          {
            id: 'daejeon_03_016',
            name: '도마1동',
          },
          {
            id: 'daejeon_03_017',
            name: '도마2동',
          },
          {
            id: 'daejeon_03_018',
            name: '도마동',
          },
          {
            id: 'daejeon_03_019',
            name: '도마동',
          },
          {
            id: 'daejeon_03_020',
            name: '도안동',
          },
          {
            id: 'daejeon_03_021',
            name: '도안동',
          },
          {
            id: 'daejeon_03_022',
            name: '둔산동',
          },
          {
            id: 'daejeon_03_023',
            name: '둔산동',
          },
          {
            id: 'daejeon_03_024',
            name: '만년동',
          },
          {
            id: 'daejeon_03_025',
            name: '만년동',
          },
          {
            id: 'daejeon_03_026',
            name: '매노동',
          },
          {
            id: 'daejeon_03_027',
            name: '매노동',
          },
          {
            id: 'daejeon_03_028',
            name: '변동',
          },
          {
            id: 'daejeon_03_029',
            name: '변동',
          },
          {
            id: 'daejeon_03_030',
            name: '복수동',
          },
          {
            id: 'daejeon_03_031',
            name: '복수동',
          },
          {
            id: 'daejeon_03_032',
            name: '봉곡동',
          },
          {
            id: 'daejeon_03_033',
            name: '봉곡동',
          },
          {
            id: 'daejeon_03_034',
            name: '산직동',
          },
          {
            id: 'daejeon_03_035',
            name: '산직동',
          },
          {
            id: 'daejeon_03_036',
            name: '삼천동',
          },
          {
            id: 'daejeon_03_037',
            name: '삼천동',
          },
          {
            id: 'daejeon_03_038',
            name: '오동',
          },
          {
            id: 'daejeon_03_039',
            name: '오동',
          },
          {
            id: 'daejeon_03_040',
            name: '용문동',
          },
          {
            id: 'daejeon_03_041',
            name: '용문동',
          },
          {
            id: 'daejeon_03_042',
            name: '용촌동',
          },
          {
            id: 'daejeon_03_043',
            name: '용촌동',
          },
          {
            id: 'daejeon_03_044',
            name: '우명동',
          },
          {
            id: 'daejeon_03_045',
            name: '우명동',
          },
          {
            id: 'daejeon_03_046',
            name: '원정동',
          },
          {
            id: 'daejeon_03_047',
            name: '원정동',
          },
          {
            id: 'daejeon_03_048',
            name: '월평동',
          },
          {
            id: 'daejeon_03_049',
            name: '월평동',
          },
          {
            id: 'daejeon_03_050',
            name: '장안동',
          },
          {
            id: 'daejeon_03_051',
            name: '장안동',
          },
          {
            id: 'daejeon_03_052',
            name: '정림동',
          },
          {
            id: 'daejeon_03_053',
            name: '정림동',
          },
          {
            id: 'daejeon_03_054',
            name: '탄방동',
          },
          {
            id: 'daejeon_03_055',
            name: '탄방동',
          },
          {
            id: 'daejeon_03_056',
            name: '평촌동',
          },
          {
            id: 'daejeon_03_057',
            name: '평촌동',
          },
          {
            id: 'daejeon_03_058',
            name: '흑석동',
          },
          {
            id: 'daejeon_03_059',
            name: '흑석동',
          },
        ],
      },
      {
        id: 'daejeon_04',
        name: '유성구',
        subregions: [
          {
            id: 'daejeon_04_001',
            name: '가정동',
          },
          {
            id: 'daejeon_04_002',
            name: '가정동',
          },
          {
            id: 'daejeon_04_003',
            name: '갑동',
          },
          {
            id: 'daejeon_04_004',
            name: '갑동',
          },
          {
            id: 'daejeon_04_005',
            name: '계산동',
          },
          {
            id: 'daejeon_04_006',
            name: '계산동',
          },
          {
            id: 'daejeon_04_007',
            name: '관평동',
          },
          {
            id: 'daejeon_04_008',
            name: '관평동',
          },
          {
            id: 'daejeon_04_009',
            name: '교촌동',
          },
          {
            id: 'daejeon_04_010',
            name: '교촌동',
          },
          {
            id: 'daejeon_04_011',
            name: '구룡동',
          },
          {
            id: 'daejeon_04_012',
            name: '구룡동',
          },
          {
            id: 'daejeon_04_013',
            name: '구성동',
          },
          {
            id: 'daejeon_04_014',
            name: '구성동',
          },
          {
            id: 'daejeon_04_015',
            name: '구암동',
          },
          {
            id: 'daejeon_04_016',
            name: '구암동',
          },
          {
            id: 'daejeon_04_017',
            name: '구즉동',
          },
          {
            id: 'daejeon_04_018',
            name: '궁동',
          },
          {
            id: 'daejeon_04_019',
            name: '궁동',
          },
          {
            id: 'daejeon_04_020',
            name: '금고동',
          },
          {
            id: 'daejeon_04_021',
            name: '금고동',
          },
          {
            id: 'daejeon_04_022',
            name: '금탄동',
          },
          {
            id: 'daejeon_04_023',
            name: '금탄동',
          },
          {
            id: 'daejeon_04_024',
            name: '노은동',
          },
          {
            id: 'daejeon_04_025',
            name: '노은동',
          },
          {
            id: 'daejeon_04_026',
            name: '대동',
          },
          {
            id: 'daejeon_04_027',
            name: '대동',
          },
          {
            id: 'daejeon_04_028',
            name: '대정동',
          },
          {
            id: 'daejeon_04_029',
            name: '대정동',
          },
          {
            id: 'daejeon_04_030',
            name: '덕명동',
          },
          {
            id: 'daejeon_04_031',
            name: '덕명동',
          },
          {
            id: 'daejeon_04_032',
            name: '덕진동',
          },
          {
            id: 'daejeon_04_033',
            name: '덕진동',
          },
          {
            id: 'daejeon_04_034',
            name: '도룡동',
          },
          {
            id: 'daejeon_04_035',
            name: '도룡동',
          },
          {
            id: 'daejeon_04_036',
            name: '둔곡동',
          },
          {
            id: 'daejeon_04_037',
            name: '둔곡동',
          },
          {
            id: 'daejeon_04_038',
            name: '문지동',
          },
          {
            id: 'daejeon_04_039',
            name: '문지동',
          },
          {
            id: 'daejeon_04_040',
            name: '반석동',
          },
          {
            id: 'daejeon_04_041',
            name: '반석동',
          },
          {
            id: 'daejeon_04_042',
            name: '방동',
          },
          {
            id: 'daejeon_04_043',
            name: '방동',
          },
          {
            id: 'daejeon_04_044',
            name: '방현동',
          },
          {
            id: 'daejeon_04_045',
            name: '방현동',
          },
          {
            id: 'daejeon_04_046',
            name: '복용동',
          },
          {
            id: 'daejeon_04_047',
            name: '복용동',
          },
          {
            id: 'daejeon_04_048',
            name: '봉명동',
          },
          {
            id: 'daejeon_04_049',
            name: '봉명동',
          },
          {
            id: 'daejeon_04_050',
            name: '봉산동',
          },
          {
            id: 'daejeon_04_051',
            name: '봉산동',
          },
          {
            id: 'daejeon_04_052',
            name: '상대동',
          },
          {
            id: 'daejeon_04_053',
            name: '상대동',
          },
          {
            id: 'daejeon_04_054',
            name: '성북동',
          },
          {
            id: 'daejeon_04_055',
            name: '성북동',
          },
          {
            id: 'daejeon_04_056',
            name: '세동',
          },
          {
            id: 'daejeon_04_057',
            name: '세동',
          },
          {
            id: 'daejeon_04_058',
            name: '송강동',
          },
          {
            id: 'daejeon_04_059',
            name: '송강동',
          },
          {
            id: 'daejeon_04_060',
            name: '송정동',
          },
          {
            id: 'daejeon_04_061',
            name: '송정동',
          },
          {
            id: 'daejeon_04_062',
            name: '수남동',
          },
          {
            id: 'daejeon_04_063',
            name: '수남동',
          },
          {
            id: 'daejeon_04_064',
            name: '신동',
          },
          {
            id: 'daejeon_04_065',
            name: '신동',
          },
          {
            id: 'daejeon_04_066',
            name: '신봉동',
          },
          {
            id: 'daejeon_04_067',
            name: '신봉동',
          },
          {
            id: 'daejeon_04_068',
            name: '신성동',
          },
          {
            id: 'daejeon_04_069',
            name: '신성동',
          },
          {
            id: 'daejeon_04_070',
            name: '안산동',
          },
          {
            id: 'daejeon_04_071',
            name: '안산동',
          },
          {
            id: 'daejeon_04_072',
            name: '어은동',
          },
          {
            id: 'daejeon_04_073',
            name: '어은동',
          },
          {
            id: 'daejeon_04_074',
            name: '온천1동',
          },
          {
            id: 'daejeon_04_075',
            name: '온천2동',
          },
          {
            id: 'daejeon_04_076',
            name: '외삼동',
          },
          {
            id: 'daejeon_04_077',
            name: '외삼동',
          },
          {
            id: 'daejeon_04_078',
            name: '용계동',
          },
          {
            id: 'daejeon_04_079',
            name: '용계동',
          },
          {
            id: 'daejeon_04_080',
            name: '용산동',
          },
          {
            id: 'daejeon_04_081',
            name: '용산동',
          },
          {
            id: 'daejeon_04_082',
            name: '원내동',
          },
          {
            id: 'daejeon_04_083',
            name: '원내동',
          },
          {
            id: 'daejeon_04_084',
            name: '원신흥동',
          },
          {
            id: 'daejeon_04_085',
            name: '원신흥동',
          },
          {
            id: 'daejeon_04_086',
            name: '원촌동',
          },
          {
            id: 'daejeon_04_087',
            name: '원촌동',
          },
          {
            id: 'daejeon_04_088',
            name: '자운동',
          },
          {
            id: 'daejeon_04_089',
            name: '자운동',
          },
          {
            id: 'daejeon_04_090',
            name: '장대동',
          },
          {
            id: 'daejeon_04_091',
            name: '장대동',
          },
          {
            id: 'daejeon_04_092',
            name: '장동',
          },
          {
            id: 'daejeon_04_093',
            name: '장동',
          },
          {
            id: 'daejeon_04_094',
            name: '전민동',
          },
          {
            id: 'daejeon_04_095',
            name: '전민동',
          },
          {
            id: 'daejeon_04_096',
            name: '죽동',
          },
          {
            id: 'daejeon_04_097',
            name: '죽동',
          },
          {
            id: 'daejeon_04_098',
            name: '지족동',
          },
          {
            id: 'daejeon_04_099',
            name: '지족동',
          },
          {
            id: 'daejeon_04_100',
            name: '진잠동',
          },
          {
            id: 'daejeon_04_101',
            name: '추목동',
          },
          {
            id: 'daejeon_04_102',
            name: '추목동',
          },
          {
            id: 'daejeon_04_103',
            name: '탄동',
          },
          {
            id: 'daejeon_04_104',
            name: '탑립동',
          },
          {
            id: 'daejeon_04_105',
            name: '탑립동',
          },
          {
            id: 'daejeon_04_106',
            name: '하기동',
          },
          {
            id: 'daejeon_04_107',
            name: '하기동',
          },
          {
            id: 'daejeon_04_108',
            name: '학하동',
          },
          {
            id: 'daejeon_04_109',
            name: '학하동',
          },
          {
            id: 'daejeon_04_110',
            name: '화암동',
          },
          {
            id: 'daejeon_04_111',
            name: '화암동',
          },
        ],
      },
      {
        id: 'daejeon_05',
        name: '중구',
        subregions: [
          {
            id: 'daejeon_05_001',
            name: '구완동',
          },
          {
            id: 'daejeon_05_002',
            name: '구완동',
          },
          {
            id: 'daejeon_05_003',
            name: '금동',
          },
          {
            id: 'daejeon_05_004',
            name: '금동',
          },
          {
            id: 'daejeon_05_005',
            name: '대사동',
          },
          {
            id: 'daejeon_05_006',
            name: '대사동',
          },
          {
            id: 'daejeon_05_007',
            name: '대흥1동',
          },
          {
            id: 'daejeon_05_008',
            name: '대흥2동',
          },
          {
            id: 'daejeon_05_009',
            name: '대흥3동',
          },
          {
            id: 'daejeon_05_010',
            name: '대흥동',
          },
          {
            id: 'daejeon_05_011',
            name: '대흥동',
          },
          {
            id: 'daejeon_05_012',
            name: '목달동',
          },
          {
            id: 'daejeon_05_013',
            name: '목달동',
          },
          {
            id: 'daejeon_05_014',
            name: '목동',
          },
          {
            id: 'daejeon_05_015',
            name: '목동',
          },
          {
            id: 'daejeon_05_016',
            name: '무수동',
          },
          {
            id: 'daejeon_05_017',
            name: '무수동',
          },
          {
            id: 'daejeon_05_018',
            name: '문창1동',
          },
          {
            id: 'daejeon_05_019',
            name: '문창2동',
          },
          {
            id: 'daejeon_05_020',
            name: '문창동',
          },
          {
            id: 'daejeon_05_021',
            name: '문창동',
          },
          {
            id: 'daejeon_05_022',
            name: '문화1동',
          },
          {
            id: 'daejeon_05_023',
            name: '문화2동',
          },
          {
            id: 'daejeon_05_024',
            name: '문화동',
          },
          {
            id: 'daejeon_05_025',
            name: '문화동',
          },
          {
            id: 'daejeon_05_026',
            name: '부사동',
          },
          {
            id: 'daejeon_05_027',
            name: '부사동',
          },
          {
            id: 'daejeon_05_028',
            name: '사정동',
          },
          {
            id: 'daejeon_05_029',
            name: '사정동',
          },
          {
            id: 'daejeon_05_030',
            name: '산서동',
          },
          {
            id: 'daejeon_05_031',
            name: '산성동',
          },
          {
            id: 'daejeon_05_032',
            name: '산성동',
          },
          {
            id: 'daejeon_05_033',
            name: '석교동',
          },
          {
            id: 'daejeon_05_034',
            name: '석교동',
          },
          {
            id: 'daejeon_05_035',
            name: '선화1동',
          },
          {
            id: 'daejeon_05_036',
            name: '선화2동',
          },
          {
            id: 'daejeon_05_037',
            name: '선화3동',
          },
          {
            id: 'daejeon_05_038',
            name: '선화동',
          },
          {
            id: 'daejeon_05_039',
            name: '선화동',
          },
          {
            id: 'daejeon_05_040',
            name: '안영동',
          },
          {
            id: 'daejeon_05_041',
            name: '안영동',
          },
          {
            id: 'daejeon_05_042',
            name: '어남동',
          },
          {
            id: 'daejeon_05_043',
            name: '어남동',
          },
          {
            id: 'daejeon_05_044',
            name: '오류동',
          },
          {
            id: 'daejeon_05_045',
            name: '오류동',
          },
          {
            id: 'daejeon_05_046',
            name: '옥계동',
          },
          {
            id: 'daejeon_05_047',
            name: '옥계동',
          },
          {
            id: 'daejeon_05_048',
            name: '용두1동',
          },
          {
            id: 'daejeon_05_049',
            name: '용두2동',
          },
          {
            id: 'daejeon_05_050',
            name: '용두동',
          },
          {
            id: 'daejeon_05_051',
            name: '용두동',
          },
          {
            id: 'daejeon_05_052',
            name: '유천1동',
          },
          {
            id: 'daejeon_05_053',
            name: '유천2동',
          },
          {
            id: 'daejeon_05_054',
            name: '유천동',
          },
          {
            id: 'daejeon_05_055',
            name: '유천동',
          },
          {
            id: 'daejeon_05_056',
            name: '은행동',
          },
          {
            id: 'daejeon_05_057',
            name: '은행동',
          },
          {
            id: 'daejeon_05_058',
            name: '정생동',
          },
          {
            id: 'daejeon_05_059',
            name: '정생동',
          },
          {
            id: 'daejeon_05_060',
            name: '중촌동',
          },
          {
            id: 'daejeon_05_061',
            name: '중촌동',
          },
          {
            id: 'daejeon_05_062',
            name: '침산동',
          },
          {
            id: 'daejeon_05_063',
            name: '침산동',
          },
          {
            id: 'daejeon_05_064',
            name: '태평1동',
          },
          {
            id: 'daejeon_05_065',
            name: '태평2동',
          },
          {
            id: 'daejeon_05_066',
            name: '태평동',
          },
          {
            id: 'daejeon_05_067',
            name: '태평동',
          },
          {
            id: 'daejeon_05_068',
            name: '호동',
          },
          {
            id: 'daejeon_05_069',
            name: '호동',
          },
        ],
      },
    ],
  },
  {
    id: 'ulsan',
    name: '울산',
    subregions: [
      {
        id: 'ulsan_01',
        name: '남구',
        subregions: [
          {
            id: 'ulsan_01_001',
            name: '고사동',
          },
          {
            id: 'ulsan_01_002',
            name: '남화동',
          },
          {
            id: 'ulsan_01_003',
            name: '달동',
          },
          {
            id: 'ulsan_01_004',
            name: '두왕동',
          },
          {
            id: 'ulsan_01_005',
            name: '매암동',
          },
          {
            id: 'ulsan_01_006',
            name: '무거동',
          },
          {
            id: 'ulsan_01_007',
            name: '부곡동',
          },
          {
            id: 'ulsan_01_008',
            name: '삼산동',
          },
          {
            id: 'ulsan_01_009',
            name: '상개동',
          },
          {
            id: 'ulsan_01_010',
            name: '선암동',
          },
          {
            id: 'ulsan_01_011',
            name: '성암동',
          },
          {
            id: 'ulsan_01_012',
            name: '신정동',
          },
          {
            id: 'ulsan_01_013',
            name: '야음동',
          },
          {
            id: 'ulsan_01_014',
            name: '여천동',
          },
          {
            id: 'ulsan_01_015',
            name: '옥동',
          },
          {
            id: 'ulsan_01_016',
            name: '용연동',
          },
          {
            id: 'ulsan_01_017',
            name: '용잠동',
          },
          {
            id: 'ulsan_01_018',
            name: '장생포동',
          },
          {
            id: 'ulsan_01_019',
            name: '황성동',
          },
        ],
      },
      {
        id: 'ulsan_02',
        name: '동구',
        subregions: [
          {
            id: 'ulsan_02_001',
            name: '동부동',
          },
          {
            id: 'ulsan_02_002',
            name: '미포동',
          },
          {
            id: 'ulsan_02_003',
            name: '방어동',
          },
          {
            id: 'ulsan_02_004',
            name: '서부동',
          },
          {
            id: 'ulsan_02_005',
            name: '염포동',
          },
          {
            id: 'ulsan_02_006',
            name: '일산동',
          },
          {
            id: 'ulsan_02_007',
            name: '전하동',
          },
          {
            id: 'ulsan_02_008',
            name: '주전동',
          },
          {
            id: 'ulsan_02_009',
            name: '화정동',
          },
        ],
      },
      {
        id: 'ulsan_03',
        name: '북구',
        subregions: [
          {
            id: 'ulsan_03_001',
            name: '가대동',
          },
          {
            id: 'ulsan_03_002',
            name: '구유동',
          },
          {
            id: 'ulsan_03_003',
            name: '달천동',
          },
          {
            id: 'ulsan_03_004',
            name: '당사동',
          },
          {
            id: 'ulsan_03_005',
            name: '대안동',
          },
          {
            id: 'ulsan_03_006',
            name: '매곡동',
          },
          {
            id: 'ulsan_03_007',
            name: '명촌동',
          },
          {
            id: 'ulsan_03_008',
            name: '무룡동',
          },
          {
            id: 'ulsan_03_009',
            name: '산하동',
          },
          {
            id: 'ulsan_03_010',
            name: '상안동',
          },
          {
            id: 'ulsan_03_011',
            name: '송정동',
          },
          {
            id: 'ulsan_03_012',
            name: '시례동',
          },
          {
            id: 'ulsan_03_013',
            name: '신명동',
          },
          {
            id: 'ulsan_03_014',
            name: '신천동',
          },
          {
            id: 'ulsan_03_015',
            name: '신현동',
          },
          {
            id: 'ulsan_03_016',
            name: '양정동',
          },
          {
            id: 'ulsan_03_017',
            name: '어물동',
          },
          {
            id: 'ulsan_03_018',
            name: '연암동',
          },
          {
            id: 'ulsan_03_019',
            name: '염포동',
          },
          {
            id: 'ulsan_03_020',
            name: '정자동',
          },
          {
            id: 'ulsan_03_021',
            name: '중산동',
          },
          {
            id: 'ulsan_03_022',
            name: '진장동',
          },
          {
            id: 'ulsan_03_023',
            name: '창평동',
          },
          {
            id: 'ulsan_03_024',
            name: '천곡동',
          },
          {
            id: 'ulsan_03_025',
            name: '호계동',
          },
          {
            id: 'ulsan_03_026',
            name: '화봉동',
          },
          {
            id: 'ulsan_03_027',
            name: '효문동',
          },
        ],
      },
      {
        id: 'ulsan_04',
        name: '울주군',
        subregions: [
          {
            id: 'ulsan_04_001',
            name: '두동면',
          },
          {
            id: 'ulsan_04_002',
            name: '두서면',
          },
          {
            id: 'ulsan_04_003',
            name: '범서면',
          },
          {
            id: 'ulsan_04_004',
            name: '범서읍',
          },
          {
            id: 'ulsan_04_005',
            name: '삼남면',
          },
          {
            id: 'ulsan_04_006',
            name: '삼남읍',
          },
          {
            id: 'ulsan_04_007',
            name: '삼동면',
          },
          {
            id: 'ulsan_04_008',
            name: '상북면',
          },
          {
            id: 'ulsan_04_009',
            name: '서생면',
          },
          {
            id: 'ulsan_04_010',
            name: '언양읍',
          },
          {
            id: 'ulsan_04_011',
            name: '온산읍',
          },
          {
            id: 'ulsan_04_012',
            name: '온양면',
          },
          {
            id: 'ulsan_04_013',
            name: '온양읍',
          },
          {
            id: 'ulsan_04_014',
            name: '웅촌면',
          },
          {
            id: 'ulsan_04_015',
            name: '청량면',
          },
          {
            id: 'ulsan_04_016',
            name: '청량읍',
          },
        ],
      },
      {
        id: 'ulsan_05',
        name: '중구',
        subregions: [
          {
            id: 'ulsan_05_001',
            name: '교동',
          },
          {
            id: 'ulsan_05_002',
            name: '남외동',
          },
          {
            id: 'ulsan_05_003',
            name: '다운동',
          },
          {
            id: 'ulsan_05_004',
            name: '동동',
          },
          {
            id: 'ulsan_05_005',
            name: '반구동',
          },
          {
            id: 'ulsan_05_006',
            name: '복산동',
          },
          {
            id: 'ulsan_05_007',
            name: '북정동',
          },
          {
            id: 'ulsan_05_008',
            name: '서동',
          },
          {
            id: 'ulsan_05_009',
            name: '성남동',
          },
          {
            id: 'ulsan_05_010',
            name: '성안동',
          },
          {
            id: 'ulsan_05_011',
            name: '약사동',
          },
          {
            id: 'ulsan_05_012',
            name: '옥교동',
          },
          {
            id: 'ulsan_05_013',
            name: '우정동',
          },
          {
            id: 'ulsan_05_014',
            name: '유곡동',
          },
          {
            id: 'ulsan_05_015',
            name: '장현동',
          },
          {
            id: 'ulsan_05_016',
            name: '태화동',
          },
          {
            id: 'ulsan_05_017',
            name: '학산동',
          },
          {
            id: 'ulsan_05_018',
            name: '학성동',
          },
        ],
      },
    ],
  },
  {
    id: 'jeonbuk',
    name: '전북',
    subregions: [
      {
        id: 'jeonbuk_01',
        name: '고창군',
        subregions: [
          {
            id: 'jeonbuk_01_001',
            name: '고수면',
          },
          {
            id: 'jeonbuk_01_002',
            name: '고창읍',
          },
          {
            id: 'jeonbuk_01_003',
            name: '공음면',
          },
          {
            id: 'jeonbuk_01_004',
            name: '대산면',
          },
          {
            id: 'jeonbuk_01_005',
            name: '무장면',
          },
          {
            id: 'jeonbuk_01_006',
            name: '부안면',
          },
          {
            id: 'jeonbuk_01_007',
            name: '상하면',
          },
          {
            id: 'jeonbuk_01_008',
            name: '성내면',
          },
          {
            id: 'jeonbuk_01_009',
            name: '성송면',
          },
          {
            id: 'jeonbuk_01_010',
            name: '신림면',
          },
          {
            id: 'jeonbuk_01_011',
            name: '심원면',
          },
          {
            id: 'jeonbuk_01_012',
            name: '아산면',
          },
          {
            id: 'jeonbuk_01_013',
            name: '해리면',
          },
          {
            id: 'jeonbuk_01_014',
            name: '흥덕면',
          },
        ],
      },
      {
        id: 'jeonbuk_02',
        name: '군산시',
        subregions: [
          {
            id: 'jeonbuk_02_001',
            name: '개복동',
          },
          {
            id: 'jeonbuk_02_002',
            name: '개사동',
          },
          {
            id: 'jeonbuk_02_003',
            name: '개정동',
          },
          {
            id: 'jeonbuk_02_004',
            name: '개정면',
          },
          {
            id: 'jeonbuk_02_005',
            name: '경암동',
          },
          {
            id: 'jeonbuk_02_006',
            name: '경장동',
          },
          {
            id: 'jeonbuk_02_007',
            name: '구암동',
          },
          {
            id: 'jeonbuk_02_008',
            name: '금광동',
          },
          {
            id: 'jeonbuk_02_009',
            name: '금동',
          },
          {
            id: 'jeonbuk_02_010',
            name: '금암동',
          },
          {
            id: 'jeonbuk_02_011',
            name: '나운동',
          },
          {
            id: 'jeonbuk_02_012',
            name: '나포면',
          },
          {
            id: 'jeonbuk_02_013',
            name: '내초동',
          },
          {
            id: 'jeonbuk_02_014',
            name: '내흥동',
          },
          {
            id: 'jeonbuk_02_015',
            name: '대명동',
          },
          {
            id: 'jeonbuk_02_016',
            name: '대야면',
          },
          {
            id: 'jeonbuk_02_017',
            name: '동흥남동',
          },
          {
            id: 'jeonbuk_02_018',
            name: '둔율동',
          },
          {
            id: 'jeonbuk_02_019',
            name: '명산동',
          },
          {
            id: 'jeonbuk_02_020',
            name: '문화동',
          },
          {
            id: 'jeonbuk_02_021',
            name: '미룡동',
          },
          {
            id: 'jeonbuk_02_022',
            name: '미원동',
          },
          {
            id: 'jeonbuk_02_023',
            name: '미장동',
          },
          {
            id: 'jeonbuk_02_024',
            name: '비응도동',
          },
          {
            id: 'jeonbuk_02_025',
            name: '사정동',
          },
          {
            id: 'jeonbuk_02_026',
            name: '산북동',
          },
          {
            id: 'jeonbuk_02_027',
            name: '삼학동',
          },
          {
            id: 'jeonbuk_02_028',
            name: '서수면',
          },
          {
            id: 'jeonbuk_02_029',
            name: '서흥남동',
          },
          {
            id: 'jeonbuk_02_030',
            name: '선양동',
          },
          {
            id: 'jeonbuk_02_031',
            name: '성산면',
          },
          {
            id: 'jeonbuk_02_032',
            name: '소룡동',
          },
          {
            id: 'jeonbuk_02_033',
            name: '송창동',
          },
          {
            id: 'jeonbuk_02_034',
            name: '송풍동',
          },
          {
            id: 'jeonbuk_02_035',
            name: '수송동',
          },
          {
            id: 'jeonbuk_02_036',
            name: '신관동',
          },
          {
            id: 'jeonbuk_02_037',
            name: '신영동',
          },
          {
            id: 'jeonbuk_02_038',
            name: '신창동',
          },
          {
            id: 'jeonbuk_02_039',
            name: '신풍동',
          },
          {
            id: 'jeonbuk_02_040',
            name: '신흥동',
          },
          {
            id: 'jeonbuk_02_041',
            name: '영동',
          },
          {
            id: 'jeonbuk_02_042',
            name: '영화동',
          },
          {
            id: 'jeonbuk_02_043',
            name: '오룡동',
          },
          {
            id: 'jeonbuk_02_044',
            name: '오식도동',
          },
          {
            id: 'jeonbuk_02_045',
            name: '옥구읍',
          },
          {
            id: 'jeonbuk_02_046',
            name: '옥도면',
          },
          {
            id: 'jeonbuk_02_047',
            name: '옥산면',
          },
          {
            id: 'jeonbuk_02_048',
            name: '옥서면',
          },
          {
            id: 'jeonbuk_02_049',
            name: '월명동',
          },
          {
            id: 'jeonbuk_02_050',
            name: '임피면',
          },
          {
            id: 'jeonbuk_02_051',
            name: '장미동',
          },
          {
            id: 'jeonbuk_02_052',
            name: '장재동',
          },
          {
            id: 'jeonbuk_02_053',
            name: '조촌동',
          },
          {
            id: 'jeonbuk_02_054',
            name: '죽성동',
          },
          {
            id: 'jeonbuk_02_055',
            name: '중동',
          },
          {
            id: 'jeonbuk_02_056',
            name: '중앙로1가',
          },
          {
            id: 'jeonbuk_02_057',
            name: '중앙로2가',
          },
          {
            id: 'jeonbuk_02_058',
            name: '중앙로3가',
          },
          {
            id: 'jeonbuk_02_059',
            name: '지곡동',
          },
          {
            id: 'jeonbuk_02_060',
            name: '창성동',
          },
          {
            id: 'jeonbuk_02_061',
            name: '평화동',
          },
          {
            id: 'jeonbuk_02_062',
            name: '해망동',
          },
          {
            id: 'jeonbuk_02_063',
            name: '회현면',
          },
        ],
      },
      {
        id: 'jeonbuk_03',
        name: '김제시',
        subregions: [
          {
            id: 'jeonbuk_03_001',
            name: '갈공동',
          },
          {
            id: 'jeonbuk_03_002',
            name: '검산동',
          },
          {
            id: 'jeonbuk_03_003',
            name: '공덕면',
          },
          {
            id: 'jeonbuk_03_004',
            name: '광활면',
          },
          {
            id: 'jeonbuk_03_005',
            name: '교동',
          },
          {
            id: 'jeonbuk_03_006',
            name: '금구면',
          },
          {
            id: 'jeonbuk_03_007',
            name: '금산면',
          },
          {
            id: 'jeonbuk_03_008',
            name: '난봉동',
          },
          {
            id: 'jeonbuk_03_009',
            name: '도장동',
          },
          {
            id: 'jeonbuk_03_010',
            name: '만경읍',
          },
          {
            id: 'jeonbuk_03_011',
            name: '명덕동',
          },
          {
            id: 'jeonbuk_03_012',
            name: '백구면',
          },
          {
            id: 'jeonbuk_03_013',
            name: '백산면',
          },
          {
            id: 'jeonbuk_03_014',
            name: '백학동',
          },
          {
            id: 'jeonbuk_03_015',
            name: '복죽동',
          },
          {
            id: 'jeonbuk_03_016',
            name: '봉남면',
          },
          {
            id: 'jeonbuk_03_017',
            name: '부량면',
          },
          {
            id: 'jeonbuk_03_018',
            name: '상동동',
          },
          {
            id: 'jeonbuk_03_019',
            name: '서암동',
          },
          {
            id: 'jeonbuk_03_020',
            name: '서정동',
          },
          {
            id: 'jeonbuk_03_021',
            name: '성덕면',
          },
          {
            id: 'jeonbuk_03_022',
            name: '순동',
          },
          {
            id: 'jeonbuk_03_023',
            name: '신곡동',
          },
          {
            id: 'jeonbuk_03_024',
            name: '신덕동',
          },
          {
            id: 'jeonbuk_03_025',
            name: '신월동',
          },
          {
            id: 'jeonbuk_03_026',
            name: '신풍동',
          },
          {
            id: 'jeonbuk_03_027',
            name: '양전동',
          },
          {
            id: 'jeonbuk_03_028',
            name: '연정동',
          },
          {
            id: 'jeonbuk_03_029',
            name: '오정동',
          },
          {
            id: 'jeonbuk_03_030',
            name: '옥산동',
          },
          {
            id: 'jeonbuk_03_031',
            name: '요촌동',
          },
          {
            id: 'jeonbuk_03_032',
            name: '용동',
          },
          {
            id: 'jeonbuk_03_033',
            name: '용지면',
          },
          {
            id: 'jeonbuk_03_034',
            name: '월봉동',
          },
          {
            id: 'jeonbuk_03_035',
            name: '월성동',
          },
          {
            id: 'jeonbuk_03_036',
            name: '입석동',
          },
          {
            id: 'jeonbuk_03_037',
            name: '장화동',
          },
          {
            id: 'jeonbuk_03_038',
            name: '제월동',
          },
          {
            id: 'jeonbuk_03_039',
            name: '죽산면',
          },
          {
            id: 'jeonbuk_03_040',
            name: '진봉면',
          },
          {
            id: 'jeonbuk_03_041',
            name: '청하면',
          },
          {
            id: 'jeonbuk_03_042',
            name: '하동',
          },
          {
            id: 'jeonbuk_03_043',
            name: '황산동',
          },
          {
            id: 'jeonbuk_03_044',
            name: '황산면',
          },
          {
            id: 'jeonbuk_03_045',
            name: '흥사동',
          },
        ],
      },
      {
        id: 'jeonbuk_04',
        name: '남원시',
        subregions: [
          {
            id: 'jeonbuk_04_001',
            name: '갈치동',
          },
          {
            id: 'jeonbuk_04_002',
            name: '고죽동',
          },
          {
            id: 'jeonbuk_04_003',
            name: '광치동',
          },
          {
            id: 'jeonbuk_04_004',
            name: '금동',
          },
          {
            id: 'jeonbuk_04_005',
            name: '금지면',
          },
          {
            id: 'jeonbuk_04_006',
            name: '내척동',
          },
          {
            id: 'jeonbuk_04_007',
            name: '노암동',
          },
          {
            id: 'jeonbuk_04_008',
            name: '대강면',
          },
          {
            id: 'jeonbuk_04_009',
            name: '대산면',
          },
          {
            id: 'jeonbuk_04_010',
            name: '덕과면',
          },
          {
            id: 'jeonbuk_04_011',
            name: '도통동',
          },
          {
            id: 'jeonbuk_04_012',
            name: '동충동',
          },
          {
            id: 'jeonbuk_04_013',
            name: '보절면',
          },
          {
            id: 'jeonbuk_04_014',
            name: '사매면',
          },
          {
            id: 'jeonbuk_04_015',
            name: '산곡동',
          },
          {
            id: 'jeonbuk_04_016',
            name: '산내면',
          },
          {
            id: 'jeonbuk_04_017',
            name: '산동면',
          },
          {
            id: 'jeonbuk_04_018',
            name: '송동면',
          },
          {
            id: 'jeonbuk_04_019',
            name: '수지면',
          },
          {
            id: 'jeonbuk_04_020',
            name: '식정동',
          },
          {
            id: 'jeonbuk_04_021',
            name: '신정동',
          },
          {
            id: 'jeonbuk_04_022',
            name: '신촌동',
          },
          {
            id: 'jeonbuk_04_023',
            name: '쌍교동',
          },
          {
            id: 'jeonbuk_04_024',
            name: '아영면',
          },
          {
            id: 'jeonbuk_04_025',
            name: '어현동',
          },
          {
            id: 'jeonbuk_04_026',
            name: '왕정동',
          },
          {
            id: 'jeonbuk_04_027',
            name: '용정동',
          },
          {
            id: 'jeonbuk_04_028',
            name: '운봉읍',
          },
          {
            id: 'jeonbuk_04_029',
            name: '월락동',
          },
          {
            id: 'jeonbuk_04_030',
            name: '이백면',
          },
          {
            id: 'jeonbuk_04_031',
            name: '인월면',
          },
          {
            id: 'jeonbuk_04_032',
            name: '조산동',
          },
          {
            id: 'jeonbuk_04_033',
            name: '주생면',
          },
          {
            id: 'jeonbuk_04_034',
            name: '주천면',
          },
          {
            id: 'jeonbuk_04_035',
            name: '죽항동',
          },
          {
            id: 'jeonbuk_04_036',
            name: '천거동',
          },
          {
            id: 'jeonbuk_04_037',
            name: '하정동',
          },
          {
            id: 'jeonbuk_04_038',
            name: '향교동',
          },
          {
            id: 'jeonbuk_04_039',
            name: '화정동',
          },
        ],
      },
      {
        id: 'jeonbuk_05',
        name: '무주군',
        subregions: [
          {
            id: 'jeonbuk_05_001',
            name: '무주읍',
          },
          {
            id: 'jeonbuk_05_002',
            name: '무풍면',
          },
          {
            id: 'jeonbuk_05_003',
            name: '부남면',
          },
          {
            id: 'jeonbuk_05_004',
            name: '설천면',
          },
          {
            id: 'jeonbuk_05_005',
            name: '안성면',
          },
          {
            id: 'jeonbuk_05_006',
            name: '적상면',
          },
        ],
      },
      {
        id: 'jeonbuk_06',
        name: '부안군',
        subregions: [
          {
            id: 'jeonbuk_06_001',
            name: '계화면',
          },
          {
            id: 'jeonbuk_06_002',
            name: '동진면',
          },
          {
            id: 'jeonbuk_06_003',
            name: '백산면',
          },
          {
            id: 'jeonbuk_06_004',
            name: '변산면',
          },
          {
            id: 'jeonbuk_06_005',
            name: '보안면',
          },
          {
            id: 'jeonbuk_06_006',
            name: '부안읍',
          },
          {
            id: 'jeonbuk_06_007',
            name: '상서면',
          },
          {
            id: 'jeonbuk_06_008',
            name: '위도면',
          },
          {
            id: 'jeonbuk_06_009',
            name: '주산면',
          },
          {
            id: 'jeonbuk_06_010',
            name: '줄포면',
          },
          {
            id: 'jeonbuk_06_011',
            name: '진서면',
          },
          {
            id: 'jeonbuk_06_012',
            name: '하서면',
          },
          {
            id: 'jeonbuk_06_013',
            name: '행안면',
          },
        ],
      },
      {
        id: 'jeonbuk_07',
        name: '순창군',
        subregions: [
          {
            id: 'jeonbuk_07_001',
            name: '구림면',
          },
          {
            id: 'jeonbuk_07_002',
            name: '금과면',
          },
          {
            id: 'jeonbuk_07_003',
            name: '동계면',
          },
          {
            id: 'jeonbuk_07_004',
            name: '복흥면',
          },
          {
            id: 'jeonbuk_07_005',
            name: '순창읍',
          },
          {
            id: 'jeonbuk_07_006',
            name: '쌍치면',
          },
          {
            id: 'jeonbuk_07_007',
            name: '유등면',
          },
          {
            id: 'jeonbuk_07_008',
            name: '인계면',
          },
          {
            id: 'jeonbuk_07_009',
            name: '적성면',
          },
          {
            id: 'jeonbuk_07_010',
            name: '팔덕면',
          },
          {
            id: 'jeonbuk_07_011',
            name: '풍산면',
          },
        ],
      },
      {
        id: 'jeonbuk_08',
        name: '완주군',
        subregions: [
          {
            id: 'jeonbuk_08_001',
            name: '경천면',
          },
          {
            id: 'jeonbuk_08_002',
            name: '고산면',
          },
          {
            id: 'jeonbuk_08_003',
            name: '구이면',
          },
          {
            id: 'jeonbuk_08_004',
            name: '동상면',
          },
          {
            id: 'jeonbuk_08_005',
            name: '봉동읍',
          },
          {
            id: 'jeonbuk_08_006',
            name: '비봉면',
          },
          {
            id: 'jeonbuk_08_007',
            name: '삼례읍',
          },
          {
            id: 'jeonbuk_08_008',
            name: '상관면',
          },
          {
            id: 'jeonbuk_08_009',
            name: '소양면',
          },
          {
            id: 'jeonbuk_08_010',
            name: '용진읍',
          },
          {
            id: 'jeonbuk_08_011',
            name: '운주면',
          },
          {
            id: 'jeonbuk_08_012',
            name: '이서면',
          },
          {
            id: 'jeonbuk_08_013',
            name: '화산면',
          },
        ],
      },
      {
        id: 'jeonbuk_09',
        name: '익산시',
        subregions: [
          {
            id: 'jeonbuk_09_001',
            name: '갈산동',
          },
          {
            id: 'jeonbuk_09_002',
            name: '금강동',
          },
          {
            id: 'jeonbuk_09_003',
            name: '금마면',
          },
          {
            id: 'jeonbuk_09_004',
            name: '남중동',
          },
          {
            id: 'jeonbuk_09_005',
            name: '낭산면',
          },
          {
            id: 'jeonbuk_09_006',
            name: '덕기동',
          },
          {
            id: 'jeonbuk_09_007',
            name: '동산동',
          },
          {
            id: 'jeonbuk_09_008',
            name: '마동',
          },
          {
            id: 'jeonbuk_09_009',
            name: '만석동',
          },
          {
            id: 'jeonbuk_09_010',
            name: '망성면',
          },
          {
            id: 'jeonbuk_09_011',
            name: '모현동1가',
          },
          {
            id: 'jeonbuk_09_012',
            name: '모현동2가',
          },
          {
            id: 'jeonbuk_09_013',
            name: '목천동',
          },
          {
            id: 'jeonbuk_09_014',
            name: '부송동',
          },
          {
            id: 'jeonbuk_09_015',
            name: '삼기면',
          },
          {
            id: 'jeonbuk_09_016',
            name: '석암동',
          },
          {
            id: 'jeonbuk_09_017',
            name: '석왕동',
          },
          {
            id: 'jeonbuk_09_018',
            name: '석탄동',
          },
          {
            id: 'jeonbuk_09_019',
            name: '성당면',
          },
          {
            id: 'jeonbuk_09_020',
            name: '송학동',
          },
          {
            id: 'jeonbuk_09_021',
            name: '신동',
          },
          {
            id: 'jeonbuk_09_022',
            name: '신용동',
          },
          {
            id: 'jeonbuk_09_023',
            name: '신흥동',
          },
          {
            id: 'jeonbuk_09_024',
            name: '어양동',
          },
          {
            id: 'jeonbuk_09_025',
            name: '여산면',
          },
          {
            id: 'jeonbuk_09_026',
            name: '영등동',
          },
          {
            id: 'jeonbuk_09_027',
            name: '오산면',
          },
          {
            id: 'jeonbuk_09_028',
            name: '왕궁면',
          },
          {
            id: 'jeonbuk_09_029',
            name: '용동면',
          },
          {
            id: 'jeonbuk_09_030',
            name: '용안면',
          },
          {
            id: 'jeonbuk_09_031',
            name: '용제동',
          },
          {
            id: 'jeonbuk_09_032',
            name: '웅포면',
          },
          {
            id: 'jeonbuk_09_033',
            name: '월성동',
          },
          {
            id: 'jeonbuk_09_034',
            name: '은기동',
          },
          {
            id: 'jeonbuk_09_035',
            name: '인화동1가',
          },
          {
            id: 'jeonbuk_09_036',
            name: '인화동2가',
          },
          {
            id: 'jeonbuk_09_037',
            name: '임상동',
          },
          {
            id: 'jeonbuk_09_038',
            name: '정족동',
          },
          {
            id: 'jeonbuk_09_039',
            name: '주현동',
          },
          {
            id: 'jeonbuk_09_040',
            name: '중앙동1가',
          },
          {
            id: 'jeonbuk_09_041',
            name: '중앙동2가',
          },
          {
            id: 'jeonbuk_09_042',
            name: '중앙동3가',
          },
          {
            id: 'jeonbuk_09_043',
            name: '창인동1가',
          },
          {
            id: 'jeonbuk_09_044',
            name: '창인동2가',
          },
          {
            id: 'jeonbuk_09_045',
            name: '춘포면',
          },
          {
            id: 'jeonbuk_09_046',
            name: '팔봉동',
          },
          {
            id: 'jeonbuk_09_047',
            name: '평화동',
          },
          {
            id: 'jeonbuk_09_048',
            name: '함라면',
          },
          {
            id: 'jeonbuk_09_049',
            name: '함열읍',
          },
          {
            id: 'jeonbuk_09_050',
            name: '현영동',
          },
          {
            id: 'jeonbuk_09_051',
            name: '황등면',
          },
        ],
      },
      {
        id: 'jeonbuk_10',
        name: '임실군',
        subregions: [
          {
            id: 'jeonbuk_10_001',
            name: '강진면',
          },
          {
            id: 'jeonbuk_10_002',
            name: '관촌면',
          },
          {
            id: 'jeonbuk_10_003',
            name: '덕치면',
          },
          {
            id: 'jeonbuk_10_004',
            name: '삼계면',
          },
          {
            id: 'jeonbuk_10_005',
            name: '성수면',
          },
          {
            id: 'jeonbuk_10_006',
            name: '신덕면',
          },
          {
            id: 'jeonbuk_10_007',
            name: '신평면',
          },
          {
            id: 'jeonbuk_10_008',
            name: '오수면',
          },
          {
            id: 'jeonbuk_10_009',
            name: '운암면',
          },
          {
            id: 'jeonbuk_10_010',
            name: '임실읍',
          },
          {
            id: 'jeonbuk_10_011',
            name: '지사면',
          },
          {
            id: 'jeonbuk_10_012',
            name: '청웅면',
          },
        ],
      },
      {
        id: 'jeonbuk_11',
        name: '장수군',
        subregions: [
          {
            id: 'jeonbuk_11_001',
            name: '계남면',
          },
          {
            id: 'jeonbuk_11_002',
            name: '계북면',
          },
          {
            id: 'jeonbuk_11_003',
            name: '번암면',
          },
          {
            id: 'jeonbuk_11_004',
            name: '산서면',
          },
          {
            id: 'jeonbuk_11_005',
            name: '장계면',
          },
          {
            id: 'jeonbuk_11_006',
            name: '장수읍',
          },
          {
            id: 'jeonbuk_11_007',
            name: '천천면',
          },
        ],
      },
      {
        id: 'jeonbuk_12',
        name: '전주시덕진구',
        subregions: [
          {
            id: 'jeonbuk_12_001',
            name: '강흥동',
          },
          {
            id: 'jeonbuk_12_002',
            name: '고랑동',
          },
          {
            id: 'jeonbuk_12_003',
            name: '금상동',
          },
          {
            id: 'jeonbuk_12_004',
            name: '금암동',
          },
          {
            id: 'jeonbuk_12_005',
            name: '남정동',
          },
          {
            id: 'jeonbuk_12_006',
            name: '덕진동1가',
          },
          {
            id: 'jeonbuk_12_007',
            name: '덕진동2가',
          },
          {
            id: 'jeonbuk_12_008',
            name: '도덕동',
          },
          {
            id: 'jeonbuk_12_009',
            name: '도도동',
          },
          {
            id: 'jeonbuk_12_010',
            name: '만성동',
          },
          {
            id: 'jeonbuk_12_011',
            name: '반월동',
          },
          {
            id: 'jeonbuk_12_012',
            name: '산정동',
          },
          {
            id: 'jeonbuk_12_013',
            name: '성덕동',
          },
          {
            id: 'jeonbuk_12_014',
            name: '송천동1가',
          },
          {
            id: 'jeonbuk_12_015',
            name: '송천동2가',
          },
          {
            id: 'jeonbuk_12_016',
            name: '여의동',
          },
          {
            id: 'jeonbuk_12_017',
            name: '여의동2가',
          },
          {
            id: 'jeonbuk_12_018',
            name: '용정동',
          },
          {
            id: 'jeonbuk_12_019',
            name: '우아동1가',
          },
          {
            id: 'jeonbuk_12_020',
            name: '우아동2가',
          },
          {
            id: 'jeonbuk_12_021',
            name: '우아동3가',
          },
          {
            id: 'jeonbuk_12_022',
            name: '원동',
          },
          {
            id: 'jeonbuk_12_023',
            name: '인후동1가',
          },
          {
            id: 'jeonbuk_12_024',
            name: '인후동2가',
          },
          {
            id: 'jeonbuk_12_025',
            name: '장동',
          },
          {
            id: 'jeonbuk_12_026',
            name: '전미동1가',
          },
          {
            id: 'jeonbuk_12_027',
            name: '전미동2가',
          },
          {
            id: 'jeonbuk_12_028',
            name: '중동',
          },
          {
            id: 'jeonbuk_12_029',
            name: '진북동',
          },
          {
            id: 'jeonbuk_12_030',
            name: '팔복동1가',
          },
          {
            id: 'jeonbuk_12_031',
            name: '팔복동2가',
          },
          {
            id: 'jeonbuk_12_032',
            name: '팔복동3가',
          },
          {
            id: 'jeonbuk_12_033',
            name: '팔복동4가',
          },
          {
            id: 'jeonbuk_12_034',
            name: '호성동1가',
          },
          {
            id: 'jeonbuk_12_035',
            name: '호성동2가',
          },
          {
            id: 'jeonbuk_12_036',
            name: '호성동3가',
          },
          {
            id: 'jeonbuk_12_037',
            name: '화전동',
          },
        ],
      },
      {
        id: 'jeonbuk_13',
        name: '전주시완산구',
        subregions: [
          {
            id: 'jeonbuk_13_001',
            name: '경원동1가',
          },
          {
            id: 'jeonbuk_13_002',
            name: '경원동2가',
          },
          {
            id: 'jeonbuk_13_003',
            name: '경원동3가',
          },
          {
            id: 'jeonbuk_13_004',
            name: '고사동',
          },
          {
            id: 'jeonbuk_13_005',
            name: '교동',
          },
          {
            id: 'jeonbuk_13_006',
            name: '남노송동',
          },
          {
            id: 'jeonbuk_13_007',
            name: '다가동1가',
          },
          {
            id: 'jeonbuk_13_008',
            name: '다가동2가',
          },
          {
            id: 'jeonbuk_13_009',
            name: '다가동3가',
          },
          {
            id: 'jeonbuk_13_010',
            name: '다가동4가',
          },
          {
            id: 'jeonbuk_13_011',
            name: '대성동',
          },
          {
            id: 'jeonbuk_13_012',
            name: '동서학동',
          },
          {
            id: 'jeonbuk_13_013',
            name: '동완산동',
          },
          {
            id: 'jeonbuk_13_014',
            name: '삼천동1가',
          },
          {
            id: 'jeonbuk_13_015',
            name: '삼천동2가',
          },
          {
            id: 'jeonbuk_13_016',
            name: '삼천동3가',
          },
          {
            id: 'jeonbuk_13_017',
            name: '상림동',
          },
          {
            id: 'jeonbuk_13_018',
            name: '색장동',
          },
          {
            id: 'jeonbuk_13_019',
            name: '서노송동',
          },
          {
            id: 'jeonbuk_13_020',
            name: '서서학동',
          },
          {
            id: 'jeonbuk_13_021',
            name: '서신동',
          },
          {
            id: 'jeonbuk_13_022',
            name: '서완산동1가',
          },
          {
            id: 'jeonbuk_13_023',
            name: '서완산동2가',
          },
          {
            id: 'jeonbuk_13_024',
            name: '석구동',
          },
          {
            id: 'jeonbuk_13_025',
            name: '용복동',
          },
          {
            id: 'jeonbuk_13_026',
            name: '원당동',
          },
          {
            id: 'jeonbuk_13_027',
            name: '전동',
          },
          {
            id: 'jeonbuk_13_028',
            name: '전동3가',
          },
          {
            id: 'jeonbuk_13_029',
            name: '중노송동',
          },
          {
            id: 'jeonbuk_13_030',
            name: '중앙동1가',
          },
          {
            id: 'jeonbuk_13_031',
            name: '중앙동2가',
          },
          {
            id: 'jeonbuk_13_032',
            name: '중앙동3가',
          },
          {
            id: 'jeonbuk_13_033',
            name: '중앙동4가',
          },
          {
            id: 'jeonbuk_13_034',
            name: '중인동',
          },
          {
            id: 'jeonbuk_13_035',
            name: '중화산동1가',
          },
          {
            id: 'jeonbuk_13_036',
            name: '중화산동2가',
          },
          {
            id: 'jeonbuk_13_037',
            name: '태평동',
          },
          {
            id: 'jeonbuk_13_038',
            name: '평화동1가',
          },
          {
            id: 'jeonbuk_13_039',
            name: '평화동2가',
          },
          {
            id: 'jeonbuk_13_040',
            name: '평화동3가',
          },
          {
            id: 'jeonbuk_13_041',
            name: '풍남동1가',
          },
          {
            id: 'jeonbuk_13_042',
            name: '풍남동2가',
          },
          {
            id: 'jeonbuk_13_043',
            name: '풍남동3가',
          },
          {
            id: 'jeonbuk_13_044',
            name: '효자동1가',
          },
          {
            id: 'jeonbuk_13_045',
            name: '효자동2가',
          },
          {
            id: 'jeonbuk_13_046',
            name: '효자동3가',
          },
        ],
      },
      {
        id: 'jeonbuk_14',
        name: '정읍시',
        subregions: [
          {
            id: 'jeonbuk_14_001',
            name: '감곡면',
          },
          {
            id: 'jeonbuk_14_002',
            name: '고부면',
          },
          {
            id: 'jeonbuk_14_003',
            name: '공평동',
          },
          {
            id: 'jeonbuk_14_004',
            name: '과교동',
          },
          {
            id: 'jeonbuk_14_005',
            name: '교암동',
          },
          {
            id: 'jeonbuk_14_006',
            name: '구룡동',
          },
          {
            id: 'jeonbuk_14_007',
            name: '금붕동',
          },
          {
            id: 'jeonbuk_14_008',
            name: '내장동',
          },
          {
            id: 'jeonbuk_14_009',
            name: '농소동',
          },
          {
            id: 'jeonbuk_14_010',
            name: '덕천면',
          },
          {
            id: 'jeonbuk_14_011',
            name: '망제동',
          },
          {
            id: 'jeonbuk_14_012',
            name: '부전동',
          },
          {
            id: 'jeonbuk_14_013',
            name: '북면',
          },
          {
            id: 'jeonbuk_14_014',
            name: '산내면',
          },
          {
            id: 'jeonbuk_14_015',
            name: '산외면',
          },
          {
            id: 'jeonbuk_14_016',
            name: '삼산동',
          },
          {
            id: 'jeonbuk_14_017',
            name: '상동',
          },
          {
            id: 'jeonbuk_14_018',
            name: '상평동',
          },
          {
            id: 'jeonbuk_14_019',
            name: '소성면',
          },
          {
            id: 'jeonbuk_14_020',
            name: '송산동',
          },
          {
            id: 'jeonbuk_14_021',
            name: '수성동',
          },
          {
            id: 'jeonbuk_14_022',
            name: '시기동',
          },
          {
            id: 'jeonbuk_14_023',
            name: '신월동',
          },
          {
            id: 'jeonbuk_14_024',
            name: '신정동',
          },
          {
            id: 'jeonbuk_14_025',
            name: '신태인읍',
          },
          {
            id: 'jeonbuk_14_026',
            name: '쌍암동',
          },
          {
            id: 'jeonbuk_14_027',
            name: '연지동',
          },
          {
            id: 'jeonbuk_14_028',
            name: '영원면',
          },
          {
            id: 'jeonbuk_14_029',
            name: '영파동',
          },
          {
            id: 'jeonbuk_14_030',
            name: '옹동면',
          },
          {
            id: 'jeonbuk_14_031',
            name: '용계동',
          },
          {
            id: 'jeonbuk_14_032',
            name: '용산동',
          },
          {
            id: 'jeonbuk_14_033',
            name: '이평면',
          },
          {
            id: 'jeonbuk_14_034',
            name: '입암면',
          },
          {
            id: 'jeonbuk_14_035',
            name: '장명동',
          },
          {
            id: 'jeonbuk_14_036',
            name: '정우면',
          },
          {
            id: 'jeonbuk_14_037',
            name: '진산동',
          },
          {
            id: 'jeonbuk_14_038',
            name: '칠보면',
          },
          {
            id: 'jeonbuk_14_039',
            name: '태인면',
          },
          {
            id: 'jeonbuk_14_040',
            name: '하모동',
          },
          {
            id: 'jeonbuk_14_041',
            name: '하북동',
          },
          {
            id: 'jeonbuk_14_042',
            name: '흑암동',
          },
        ],
      },
      {
        id: 'jeonbuk_15',
        name: '진안군',
        subregions: [
          {
            id: 'jeonbuk_15_001',
            name: '동향면',
          },
          {
            id: 'jeonbuk_15_002',
            name: '마령면',
          },
          {
            id: 'jeonbuk_15_003',
            name: '백운면',
          },
          {
            id: 'jeonbuk_15_004',
            name: '부귀면',
          },
          {
            id: 'jeonbuk_15_005',
            name: '상전면',
          },
          {
            id: 'jeonbuk_15_006',
            name: '성수면',
          },
          {
            id: 'jeonbuk_15_007',
            name: '안천면',
          },
          {
            id: 'jeonbuk_15_008',
            name: '용담면',
          },
          {
            id: 'jeonbuk_15_009',
            name: '정천면',
          },
          {
            id: 'jeonbuk_15_010',
            name: '주천면',
          },
          {
            id: 'jeonbuk_15_011',
            name: '진안읍',
          },
        ],
      },
    ],
  },
  {
    id: 'gangwon',
    name: '강원',
    subregions: [
      {
        id: 'gangwon_01',
        name: '강릉시',
        subregions: [
          {
            id: 'gangwon_01_001',
            name: '강동면',
          },
          {
            id: 'gangwon_01_002',
            name: '강동면',
          },
          {
            id: 'gangwon_01_003',
            name: '강문동',
          },
          {
            id: 'gangwon_01_004',
            name: '강문동',
          },
          {
            id: 'gangwon_01_005',
            name: '견소동',
          },
          {
            id: 'gangwon_01_006',
            name: '견소동',
          },
          {
            id: 'gangwon_01_007',
            name: '교1동',
          },
          {
            id: 'gangwon_01_008',
            name: '교2동',
          },
          {
            id: 'gangwon_01_009',
            name: '교동',
          },
          {
            id: 'gangwon_01_010',
            name: '교동',
          },
          {
            id: 'gangwon_01_011',
            name: '구정면',
          },
          {
            id: 'gangwon_01_012',
            name: '구정면',
          },
          {
            id: 'gangwon_01_013',
            name: '금학동',
          },
          {
            id: 'gangwon_01_014',
            name: '금학동',
          },
          {
            id: 'gangwon_01_015',
            name: '난곡동',
          },
          {
            id: 'gangwon_01_016',
            name: '난곡동',
          },
          {
            id: 'gangwon_01_017',
            name: '남문동',
          },
          {
            id: 'gangwon_01_018',
            name: '남문동',
          },
          {
            id: 'gangwon_01_019',
            name: '남항진동',
          },
          {
            id: 'gangwon_01_020',
            name: '남항진동',
          },
          {
            id: 'gangwon_01_021',
            name: '내곡동',
          },
          {
            id: 'gangwon_01_022',
            name: '내곡동',
          },
          {
            id: 'gangwon_01_023',
            name: '노암동',
          },
          {
            id: 'gangwon_01_024',
            name: '노암동',
          },
          {
            id: 'gangwon_01_025',
            name: '담산동',
          },
          {
            id: 'gangwon_01_026',
            name: '담산동',
          },
          {
            id: 'gangwon_01_027',
            name: '대전동',
          },
          {
            id: 'gangwon_01_028',
            name: '대전동',
          },
          {
            id: 'gangwon_01_029',
            name: '두산동',
          },
          {
            id: 'gangwon_01_030',
            name: '두산동',
          },
          {
            id: 'gangwon_01_031',
            name: '명주동',
          },
          {
            id: 'gangwon_01_032',
            name: '명주동',
          },
          {
            id: 'gangwon_01_033',
            name: '박월동',
          },
          {
            id: 'gangwon_01_034',
            name: '박월동',
          },
          {
            id: 'gangwon_01_035',
            name: '병산동',
          },
          {
            id: 'gangwon_01_036',
            name: '병산동',
          },
          {
            id: 'gangwon_01_037',
            name: '사천면',
          },
          {
            id: 'gangwon_01_038',
            name: '사천면',
          },
          {
            id: 'gangwon_01_039',
            name: '성남동',
          },
          {
            id: 'gangwon_01_040',
            name: '성남동',
          },
          {
            id: 'gangwon_01_041',
            name: '성내동',
          },
          {
            id: 'gangwon_01_042',
            name: '성내동',
          },
          {
            id: 'gangwon_01_043',
            name: '성산면',
          },
          {
            id: 'gangwon_01_044',
            name: '성산면',
          },
          {
            id: 'gangwon_01_045',
            name: '송정동',
          },
          {
            id: 'gangwon_01_046',
            name: '송정동',
          },
          {
            id: 'gangwon_01_047',
            name: '신석동',
          },
          {
            id: 'gangwon_01_048',
            name: '신석동',
          },
          {
            id: 'gangwon_01_049',
            name: '안현동',
          },
          {
            id: 'gangwon_01_050',
            name: '안현동',
          },
          {
            id: 'gangwon_01_051',
            name: '연곡면',
          },
          {
            id: 'gangwon_01_052',
            name: '연곡면',
          },
          {
            id: 'gangwon_01_053',
            name: '옥계면',
          },
          {
            id: 'gangwon_01_054',
            name: '옥계면',
          },
          {
            id: 'gangwon_01_055',
            name: '옥천동',
          },
          {
            id: 'gangwon_01_056',
            name: '옥천동',
          },
          {
            id: 'gangwon_01_057',
            name: '왕산면',
          },
          {
            id: 'gangwon_01_058',
            name: '왕산면',
          },
          {
            id: 'gangwon_01_059',
            name: '용강동',
          },
          {
            id: 'gangwon_01_060',
            name: '용강동',
          },
          {
            id: 'gangwon_01_061',
            name: '운산동',
          },
          {
            id: 'gangwon_01_062',
            name: '운산동',
          },
          {
            id: 'gangwon_01_063',
            name: '운정동',
          },
          {
            id: 'gangwon_01_064',
            name: '운정동',
          },
          {
            id: 'gangwon_01_065',
            name: '월호평동',
          },
          {
            id: 'gangwon_01_066',
            name: '월호평동',
          },
          {
            id: 'gangwon_01_067',
            name: '유산동',
          },
          {
            id: 'gangwon_01_068',
            name: '유산동',
          },
          {
            id: 'gangwon_01_069',
            name: '유천동',
          },
          {
            id: 'gangwon_01_070',
            name: '유천동',
          },
          {
            id: 'gangwon_01_071',
            name: '임당동',
          },
          {
            id: 'gangwon_01_072',
            name: '임당동',
          },
          {
            id: 'gangwon_01_073',
            name: '입암동',
          },
          {
            id: 'gangwon_01_074',
            name: '입암동',
          },
          {
            id: 'gangwon_01_075',
            name: '장현동',
          },
          {
            id: 'gangwon_01_076',
            name: '장현동',
          },
          {
            id: 'gangwon_01_077',
            name: '저동',
          },
          {
            id: 'gangwon_01_078',
            name: '저동',
          },
          {
            id: 'gangwon_01_079',
            name: '주문진읍',
          },
          {
            id: 'gangwon_01_080',
            name: '주문진읍',
          },
          {
            id: 'gangwon_01_081',
            name: '죽전동',
          },
          {
            id: 'gangwon_01_082',
            name: '죽헌동',
          },
          {
            id: 'gangwon_01_083',
            name: '죽헌동',
          },
          {
            id: 'gangwon_01_084',
            name: '중앙동',
          },
          {
            id: 'gangwon_01_085',
            name: '지변동',
          },
          {
            id: 'gangwon_01_086',
            name: '지변동',
          },
          {
            id: 'gangwon_01_087',
            name: '청량동',
          },
          {
            id: 'gangwon_01_088',
            name: '청량동',
          },
          {
            id: 'gangwon_01_089',
            name: '초당동',
          },
          {
            id: 'gangwon_01_090',
            name: '초당동',
          },
          {
            id: 'gangwon_01_091',
            name: '포남동',
          },
          {
            id: 'gangwon_01_092',
            name: '포남동',
          },
          {
            id: 'gangwon_01_093',
            name: '학동',
          },
          {
            id: 'gangwon_01_094',
            name: '학동',
          },
          {
            id: 'gangwon_01_095',
            name: '홍제동',
          },
          {
            id: 'gangwon_01_096',
            name: '홍제동',
          },
          {
            id: 'gangwon_01_097',
            name: '회산동',
          },
          {
            id: 'gangwon_01_098',
            name: '회산동',
          },
        ],
      },
      {
        id: 'gangwon_02',
        name: '고성군',
        subregions: [
          {
            id: 'gangwon_02_001',
            name: '간성면',
          },
          {
            id: 'gangwon_02_002',
            name: '간성읍',
          },
          {
            id: 'gangwon_02_003',
            name: '간성읍',
          },
          {
            id: 'gangwon_02_004',
            name: '거진면',
          },
          {
            id: 'gangwon_02_005',
            name: '거진읍',
          },
          {
            id: 'gangwon_02_006',
            name: '거진읍',
          },
          {
            id: 'gangwon_02_007',
            name: '수동면',
          },
          {
            id: 'gangwon_02_008',
            name: '수동면',
          },
          {
            id: 'gangwon_02_009',
            name: '죽왕면',
          },
          {
            id: 'gangwon_02_010',
            name: '죽왕면',
          },
          {
            id: 'gangwon_02_011',
            name: '토성면',
          },
          {
            id: 'gangwon_02_012',
            name: '토성면',
          },
          {
            id: 'gangwon_02_013',
            name: '현내면',
          },
          {
            id: 'gangwon_02_014',
            name: '현내면',
          },
        ],
      },
      {
        id: 'gangwon_03',
        name: '동해시',
        subregions: [
          {
            id: 'gangwon_03_001',
            name: '괴란동',
          },
          {
            id: 'gangwon_03_002',
            name: '괴란동',
          },
          {
            id: 'gangwon_03_003',
            name: '구미동',
          },
          {
            id: 'gangwon_03_004',
            name: '구미동',
          },
          {
            id: 'gangwon_03_005',
            name: '구호동',
          },
          {
            id: 'gangwon_03_006',
            name: '구호동',
          },
          {
            id: 'gangwon_03_007',
            name: '귀운동',
          },
          {
            id: 'gangwon_03_008',
            name: '귀운동',
          },
          {
            id: 'gangwon_03_009',
            name: '나안동',
          },
          {
            id: 'gangwon_03_010',
            name: '나안동',
          },
          {
            id: 'gangwon_03_011',
            name: '내동',
          },
          {
            id: 'gangwon_03_012',
            name: '내동',
          },
          {
            id: 'gangwon_03_013',
            name: '단봉동',
          },
          {
            id: 'gangwon_03_014',
            name: '단봉동',
          },
          {
            id: 'gangwon_03_015',
            name: '달방동',
          },
          {
            id: 'gangwon_03_016',
            name: '달방동',
          },
          {
            id: 'gangwon_03_017',
            name: '대구동',
          },
          {
            id: 'gangwon_03_018',
            name: '대구동',
          },
          {
            id: 'gangwon_03_019',
            name: '대진동',
          },
          {
            id: 'gangwon_03_020',
            name: '대진동',
          },
          {
            id: 'gangwon_03_021',
            name: '동호동',
          },
          {
            id: 'gangwon_03_022',
            name: '동회동',
          },
          {
            id: 'gangwon_03_023',
            name: '동회동',
          },
          {
            id: 'gangwon_03_024',
            name: '만우동',
          },
          {
            id: 'gangwon_03_025',
            name: '만우동',
          },
          {
            id: 'gangwon_03_026',
            name: '망상동',
          },
          {
            id: 'gangwon_03_027',
            name: '망상동',
          },
          {
            id: 'gangwon_03_028',
            name: '묵호동',
          },
          {
            id: 'gangwon_03_029',
            name: '묵호진동',
          },
          {
            id: 'gangwon_03_030',
            name: '묵호진동',
          },
          {
            id: 'gangwon_03_031',
            name: '발한동',
          },
          {
            id: 'gangwon_03_032',
            name: '발한동',
          },
          {
            id: 'gangwon_03_033',
            name: '부곡동',
          },
          {
            id: 'gangwon_03_034',
            name: '부곡동',
          },
          {
            id: 'gangwon_03_035',
            name: '북삼동',
          },
          {
            id: 'gangwon_03_036',
            name: '북평동',
          },
          {
            id: 'gangwon_03_037',
            name: '북평동',
          },
          {
            id: 'gangwon_03_038',
            name: '비천동',
          },
          {
            id: 'gangwon_03_039',
            name: '비천동',
          },
          {
            id: 'gangwon_03_040',
            name: '사문동',
          },
          {
            id: 'gangwon_03_041',
            name: '삼화동',
          },
          {
            id: 'gangwon_03_042',
            name: '삼화동',
          },
          {
            id: 'gangwon_03_043',
            name: '삼흥동',
          },
          {
            id: 'gangwon_03_044',
            name: '송정동',
          },
          {
            id: 'gangwon_03_045',
            name: '송정동',
          },
          {
            id: 'gangwon_03_046',
            name: '쇄운동',
          },
          {
            id: 'gangwon_03_047',
            name: '쇄운동',
          },
          {
            id: 'gangwon_03_048',
            name: '신흥동',
          },
          {
            id: 'gangwon_03_049',
            name: '신흥동',
          },
          {
            id: 'gangwon_03_050',
            name: '심곡동',
          },
          {
            id: 'gangwon_03_051',
            name: '심곡동',
          },
          {
            id: 'gangwon_03_052',
            name: '어달동',
          },
          {
            id: 'gangwon_03_053',
            name: '어달동',
          },
          {
            id: 'gangwon_03_054',
            name: '용정동',
          },
          {
            id: 'gangwon_03_055',
            name: '용정동',
          },
          {
            id: 'gangwon_03_056',
            name: '이기동',
          },
          {
            id: 'gangwon_03_057',
            name: '이기동',
          },
          {
            id: 'gangwon_03_058',
            name: '이도동',
          },
          {
            id: 'gangwon_03_059',
            name: '이도동',
          },
          {
            id: 'gangwon_03_060',
            name: '이로동',
          },
          {
            id: 'gangwon_03_061',
            name: '이로동',
          },
          {
            id: 'gangwon_03_062',
            name: '이원동',
          },
          {
            id: 'gangwon_03_063',
            name: '지가동',
          },
          {
            id: 'gangwon_03_064',
            name: '지가동',
          },
          {
            id: 'gangwon_03_065',
            name: '지흥동',
          },
          {
            id: 'gangwon_03_066',
            name: '지흥동',
          },
          {
            id: 'gangwon_03_067',
            name: '천곡동',
          },
          {
            id: 'gangwon_03_068',
            name: '천곡동',
          },
          {
            id: 'gangwon_03_069',
            name: '초구동',
          },
          {
            id: 'gangwon_03_070',
            name: '초구동',
          },
          {
            id: 'gangwon_03_071',
            name: '추암동',
          },
          {
            id: 'gangwon_03_072',
            name: '추암동',
          },
          {
            id: 'gangwon_03_073',
            name: '평릉동',
          },
          {
            id: 'gangwon_03_074',
            name: '평릉동',
          },
          {
            id: 'gangwon_03_075',
            name: '향로동',
          },
          {
            id: 'gangwon_03_076',
            name: '호현동',
          },
          {
            id: 'gangwon_03_077',
            name: '호현동',
          },
          {
            id: 'gangwon_03_078',
            name: '효가동',
          },
          {
            id: 'gangwon_03_079',
            name: '효가동',
          },
        ],
      },
      {
        id: 'gangwon_04',
        name: '명주군',
        subregions: [
          {
            id: 'gangwon_04_001',
            name: '강동면',
          },
          {
            id: 'gangwon_04_002',
            name: '구정면',
          },
          {
            id: 'gangwon_04_003',
            name: '묵호읍',
          },
          {
            id: 'gangwon_04_004',
            name: '사천면',
          },
          {
            id: 'gangwon_04_005',
            name: '성산면',
          },
          {
            id: 'gangwon_04_006',
            name: '연곡면',
          },
          {
            id: 'gangwon_04_007',
            name: '옥계면',
          },
          {
            id: 'gangwon_04_008',
            name: '왕산면',
          },
          {
            id: 'gangwon_04_009',
            name: '주문진읍',
          },
        ],
      },
      {
        id: 'gangwon_05',
        name: '삼척군',
        subregions: [
          {
            id: 'gangwon_05_001',
            name: '가곡면',
          },
          {
            id: 'gangwon_05_002',
            name: '근덕면',
          },
          {
            id: 'gangwon_05_003',
            name: '노곡면',
          },
          {
            id: 'gangwon_05_004',
            name: '도계읍',
          },
          {
            id: 'gangwon_05_005',
            name: '미로면',
          },
          {
            id: 'gangwon_05_006',
            name: '북평읍',
          },
          {
            id: 'gangwon_05_007',
            name: '삼척읍',
          },
          {
            id: 'gangwon_05_008',
            name: '상장면',
          },
          {
            id: 'gangwon_05_009',
            name: '소달면',
          },
          {
            id: 'gangwon_05_010',
            name: '신기면',
          },
          {
            id: 'gangwon_05_011',
            name: '원덕면',
          },
          {
            id: 'gangwon_05_012',
            name: '원덕읍',
          },
          {
            id: 'gangwon_05_013',
            name: '장성읍',
          },
          {
            id: 'gangwon_05_014',
            name: '하장면',
          },
          {
            id: 'gangwon_05_015',
            name: '황지읍',
          },
        ],
      },
      {
        id: 'gangwon_06',
        name: '삼척시',
        subregions: [
          {
            id: 'gangwon_06_001',
            name: '가곡면',
          },
          {
            id: 'gangwon_06_002',
            name: '가곡면',
          },
          {
            id: 'gangwon_06_003',
            name: '갈천동',
          },
          {
            id: 'gangwon_06_004',
            name: '갈천동',
          },
          {
            id: 'gangwon_06_005',
            name: '건지동',
          },
          {
            id: 'gangwon_06_006',
            name: '건지동',
          },
          {
            id: 'gangwon_06_007',
            name: '교동',
          },
          {
            id: 'gangwon_06_008',
            name: '교동',
          },
          {
            id: 'gangwon_06_009',
            name: '근덕면',
          },
          {
            id: 'gangwon_06_010',
            name: '근덕면',
          },
          {
            id: 'gangwon_06_011',
            name: '근산동',
          },
          {
            id: 'gangwon_06_012',
            name: '근산동',
          },
          {
            id: 'gangwon_06_013',
            name: '남양동',
          },
          {
            id: 'gangwon_06_014',
            name: '남양동',
          },
          {
            id: 'gangwon_06_015',
            name: '노곡면',
          },
          {
            id: 'gangwon_06_016',
            name: '노곡면',
          },
          {
            id: 'gangwon_06_017',
            name: '당저동',
          },
          {
            id: 'gangwon_06_018',
            name: '당저동',
          },
          {
            id: 'gangwon_06_019',
            name: '도경동',
          },
          {
            id: 'gangwon_06_020',
            name: '도경동',
          },
          {
            id: 'gangwon_06_021',
            name: '도계읍',
          },
          {
            id: 'gangwon_06_022',
            name: '도계읍',
          },
          {
            id: 'gangwon_06_023',
            name: '도원동',
          },
          {
            id: 'gangwon_06_024',
            name: '등봉동',
          },
          {
            id: 'gangwon_06_025',
            name: '등봉동',
          },
          {
            id: 'gangwon_06_026',
            name: '마달동',
          },
          {
            id: 'gangwon_06_027',
            name: '마달동',
          },
          {
            id: 'gangwon_06_028',
            name: '마평동',
          },
          {
            id: 'gangwon_06_029',
            name: '마평동',
          },
          {
            id: 'gangwon_06_030',
            name: '미로면',
          },
          {
            id: 'gangwon_06_031',
            name: '미로면',
          },
          {
            id: 'gangwon_06_032',
            name: '사직동',
          },
          {
            id: 'gangwon_06_033',
            name: '사직동',
          },
          {
            id: 'gangwon_06_034',
            name: '성남동',
          },
          {
            id: 'gangwon_06_035',
            name: '성남동',
          },
          {
            id: 'gangwon_06_036',
            name: '성내동',
          },
          {
            id: 'gangwon_06_037',
            name: '성내동',
          },
          {
            id: 'gangwon_06_038',
            name: '성북동',
          },
          {
            id: 'gangwon_06_039',
            name: '성북동',
          },
          {
            id: 'gangwon_06_040',
            name: '신기면',
          },
          {
            id: 'gangwon_06_041',
            name: '신기면',
          },
          {
            id: 'gangwon_06_042',
            name: '오분동',
          },
          {
            id: 'gangwon_06_043',
            name: '오분동',
          },
          {
            id: 'gangwon_06_044',
            name: '오사동',
          },
          {
            id: 'gangwon_06_045',
            name: '오사동',
          },
          {
            id: 'gangwon_06_046',
            name: '우지동',
          },
          {
            id: 'gangwon_06_047',
            name: '우지동',
          },
          {
            id: 'gangwon_06_048',
            name: '원당동',
          },
          {
            id: 'gangwon_06_049',
            name: '원당동',
          },
          {
            id: 'gangwon_06_050',
            name: '원덕읍',
          },
          {
            id: 'gangwon_06_051',
            name: '원덕읍',
          },
          {
            id: 'gangwon_06_052',
            name: '월계동',
          },
          {
            id: 'gangwon_06_053',
            name: '읍상동',
          },
          {
            id: 'gangwon_06_054',
            name: '읍상동',
          },
          {
            id: 'gangwon_06_055',
            name: '읍중동',
          },
          {
            id: 'gangwon_06_056',
            name: '읍중동',
          },
          {
            id: 'gangwon_06_057',
            name: '자원동',
          },
          {
            id: 'gangwon_06_058',
            name: '자원동',
          },
          {
            id: 'gangwon_06_059',
            name: '자지동',
          },
          {
            id: 'gangwon_06_060',
            name: '적노동',
          },
          {
            id: 'gangwon_06_061',
            name: '적노동',
          },
          {
            id: 'gangwon_06_062',
            name: '정라동',
          },
          {
            id: 'gangwon_06_063',
            name: '정상동',
          },
          {
            id: 'gangwon_06_064',
            name: '정상동',
          },
          {
            id: 'gangwon_06_065',
            name: '정하동',
          },
          {
            id: 'gangwon_06_066',
            name: '정하동',
          },
          {
            id: 'gangwon_06_067',
            name: '조비동',
          },
          {
            id: 'gangwon_06_068',
            name: '조비동',
          },
          {
            id: 'gangwon_06_069',
            name: '증산동',
          },
          {
            id: 'gangwon_06_070',
            name: '증산동',
          },
          {
            id: 'gangwon_06_071',
            name: '평전동',
          },
          {
            id: 'gangwon_06_072',
            name: '평전동',
          },
          {
            id: 'gangwon_06_073',
            name: '하장면',
          },
          {
            id: 'gangwon_06_074',
            name: '하장면',
          },
        ],
      },
      {
        id: 'gangwon_07',
        name: '속초시',
        subregions: [
          {
            id: 'gangwon_07_001',
            name: '교동',
          },
          {
            id: 'gangwon_07_002',
            name: '교동',
          },
          {
            id: 'gangwon_07_003',
            name: '금호동',
          },
          {
            id: 'gangwon_07_004',
            name: '금호동',
          },
          {
            id: 'gangwon_07_005',
            name: '노학동',
          },
          {
            id: 'gangwon_07_006',
            name: '노학동',
          },
          {
            id: 'gangwon_07_007',
            name: '대포동',
          },
          {
            id: 'gangwon_07_008',
            name: '대포동',
          },
          {
            id: 'gangwon_07_009',
            name: '도문동',
          },
          {
            id: 'gangwon_07_010',
            name: '도문동',
          },
          {
            id: 'gangwon_07_011',
            name: '동명동',
          },
          {
            id: 'gangwon_07_012',
            name: '동명동',
          },
          {
            id: 'gangwon_07_013',
            name: '사진동',
          },
          {
            id: 'gangwon_07_014',
            name: '설악동',
          },
          {
            id: 'gangwon_07_015',
            name: '설악동',
          },
          {
            id: 'gangwon_07_016',
            name: '영랑동',
          },
          {
            id: 'gangwon_07_017',
            name: '영랑동',
          },
          {
            id: 'gangwon_07_018',
            name: '장사동',
          },
          {
            id: 'gangwon_07_019',
            name: '장사동',
          },
          {
            id: 'gangwon_07_020',
            name: '조양동',
          },
          {
            id: 'gangwon_07_021',
            name: '조양동',
          },
          {
            id: 'gangwon_07_022',
            name: '중앙동',
          },
          {
            id: 'gangwon_07_023',
            name: '중앙동',
          },
          {
            id: 'gangwon_07_024',
            name: '청학동',
          },
          {
            id: 'gangwon_07_025',
            name: '청학동',
          },
          {
            id: 'gangwon_07_026',
            name: '청호동',
          },
          {
            id: 'gangwon_07_027',
            name: '청호동',
          },
        ],
      },
      {
        id: 'gangwon_08',
        name: '양구군',
        subregions: [
          {
            id: 'gangwon_08_001',
            name: '국토정중앙면',
          },
          {
            id: 'gangwon_08_002',
            name: '국토정중앙면',
          },
          {
            id: 'gangwon_08_003',
            name: '남면',
          },
          {
            id: 'gangwon_08_004',
            name: '동면',
          },
          {
            id: 'gangwon_08_005',
            name: '동면',
          },
          {
            id: 'gangwon_08_006',
            name: '방산면',
          },
          {
            id: 'gangwon_08_007',
            name: '방산면',
          },
          {
            id: 'gangwon_08_008',
            name: '양구면',
          },
          {
            id: 'gangwon_08_009',
            name: '양구읍',
          },
          {
            id: 'gangwon_08_010',
            name: '양구읍',
          },
          {
            id: 'gangwon_08_011',
            name: '해안면',
          },
          {
            id: 'gangwon_08_012',
            name: '해안면',
          },
        ],
      },
      {
        id: 'gangwon_09',
        name: '양양군',
        subregions: [
          {
            id: 'gangwon_09_001',
            name: '강현면',
          },
          {
            id: 'gangwon_09_002',
            name: '강현면',
          },
          {
            id: 'gangwon_09_003',
            name: '서면',
          },
          {
            id: 'gangwon_09_004',
            name: '서면',
          },
          {
            id: 'gangwon_09_005',
            name: '속초읍',
          },
          {
            id: 'gangwon_09_006',
            name: '손양면',
          },
          {
            id: 'gangwon_09_007',
            name: '손양면',
          },
          {
            id: 'gangwon_09_008',
            name: '양양면',
          },
          {
            id: 'gangwon_09_009',
            name: '양양읍',
          },
          {
            id: 'gangwon_09_010',
            name: '양양읍',
          },
          {
            id: 'gangwon_09_011',
            name: '현남면',
          },
          {
            id: 'gangwon_09_012',
            name: '현남면',
          },
          {
            id: 'gangwon_09_013',
            name: '현북면',
          },
          {
            id: 'gangwon_09_014',
            name: '현북면',
          },
        ],
      },
      {
        id: 'gangwon_10',
        name: '영월군',
        subregions: [
          {
            id: 'gangwon_10_001',
            name: '김삿갓면',
          },
          {
            id: 'gangwon_10_002',
            name: '김삿갓면',
          },
          {
            id: 'gangwon_10_003',
            name: '남면',
          },
          {
            id: 'gangwon_10_004',
            name: '남면',
          },
          {
            id: 'gangwon_10_005',
            name: '무릉도원면',
          },
          {
            id: 'gangwon_10_006',
            name: '무릉도원면',
          },
          {
            id: 'gangwon_10_007',
            name: '북면',
          },
          {
            id: 'gangwon_10_008',
            name: '북면',
          },
          {
            id: 'gangwon_10_009',
            name: '산솔면',
          },
          {
            id: 'gangwon_10_010',
            name: '산솔면',
          },
          {
            id: 'gangwon_10_011',
            name: '상동면',
          },
          {
            id: 'gangwon_10_012',
            name: '상동읍',
          },
          {
            id: 'gangwon_10_013',
            name: '상동읍',
          },
          {
            id: 'gangwon_10_014',
            name: '서면',
          },
          {
            id: 'gangwon_10_015',
            name: '수주면',
          },
          {
            id: 'gangwon_10_016',
            name: '영월면',
          },
          {
            id: 'gangwon_10_017',
            name: '영월읍',
          },
          {
            id: 'gangwon_10_018',
            name: '영월읍',
          },
          {
            id: 'gangwon_10_019',
            name: '주천면',
          },
          {
            id: 'gangwon_10_020',
            name: '주천면',
          },
          {
            id: 'gangwon_10_021',
            name: '중동면',
          },
          {
            id: 'gangwon_10_022',
            name: '하동면',
          },
          {
            id: 'gangwon_10_023',
            name: '한반도면',
          },
          {
            id: 'gangwon_10_024',
            name: '한반도면',
          },
        ],
      },
      {
        id: 'gangwon_11',
        name: '울진군',
        subregions: [
          {
            id: 'gangwon_11_001',
            name: '근남면',
          },
          {
            id: 'gangwon_11_002',
            name: '기성면',
          },
          {
            id: 'gangwon_11_003',
            name: '북면',
          },
          {
            id: 'gangwon_11_004',
            name: '온정면',
          },
          {
            id: 'gangwon_11_005',
            name: '울진면',
          },
          {
            id: 'gangwon_11_006',
            name: '원남면',
          },
          {
            id: 'gangwon_11_007',
            name: '평해면',
          },
        ],
      },
      {
        id: 'gangwon_12',
        name: '원성군',
        subregions: [
          {
            id: 'gangwon_12_001',
            name: '귀래면',
          },
          {
            id: 'gangwon_12_002',
            name: '문막면',
          },
          {
            id: 'gangwon_12_003',
            name: '부론면',
          },
          {
            id: 'gangwon_12_004',
            name: '소초면',
          },
          {
            id: 'gangwon_12_005',
            name: '신림면',
          },
          {
            id: 'gangwon_12_006',
            name: '지정면',
          },
          {
            id: 'gangwon_12_007',
            name: '판부면',
          },
          {
            id: 'gangwon_12_008',
            name: '호저면',
          },
          {
            id: 'gangwon_12_009',
            name: '흥업면',
          },
        ],
      },
      {
        id: 'gangwon_13',
        name: '원주군',
        subregions: [
          {
            id: 'gangwon_13_001',
            name: '귀래면',
          },
          {
            id: 'gangwon_13_002',
            name: '문막면',
          },
          {
            id: 'gangwon_13_003',
            name: '부론면',
          },
          {
            id: 'gangwon_13_004',
            name: '소초면',
          },
          {
            id: 'gangwon_13_005',
            name: '신림면',
          },
          {
            id: 'gangwon_13_006',
            name: '지정면',
          },
          {
            id: 'gangwon_13_007',
            name: '판부면',
          },
          {
            id: 'gangwon_13_008',
            name: '호저면',
          },
          {
            id: 'gangwon_13_009',
            name: '흥업면',
          },
        ],
      },
      {
        id: 'gangwon_14',
        name: '원주시',
        subregions: [
          {
            id: 'gangwon_14_001',
            name: '가현동',
          },
          {
            id: 'gangwon_14_002',
            name: '가현동',
          },
          {
            id: 'gangwon_14_003',
            name: '개운동',
          },
          {
            id: 'gangwon_14_004',
            name: '개운동',
          },
          {
            id: 'gangwon_14_005',
            name: '관설동',
          },
          {
            id: 'gangwon_14_006',
            name: '관설동',
          },
          {
            id: 'gangwon_14_007',
            name: '귀래면',
          },
          {
            id: 'gangwon_14_008',
            name: '귀래면',
          },
          {
            id: 'gangwon_14_009',
            name: '단계동',
          },
          {
            id: 'gangwon_14_010',
            name: '단계동',
          },
          {
            id: 'gangwon_14_011',
            name: '단구동',
          },
          {
            id: 'gangwon_14_012',
            name: '단구동',
          },
          {
            id: 'gangwon_14_013',
            name: '명륜동',
          },
          {
            id: 'gangwon_14_014',
            name: '명륜동',
          },
          {
            id: 'gangwon_14_015',
            name: '무실동',
          },
          {
            id: 'gangwon_14_016',
            name: '무실동',
          },
          {
            id: 'gangwon_14_017',
            name: '문막면',
          },
          {
            id: 'gangwon_14_018',
            name: '문막읍',
          },
          {
            id: 'gangwon_14_019',
            name: '문막읍',
          },
          {
            id: 'gangwon_14_020',
            name: '반곡동',
          },
          {
            id: 'gangwon_14_021',
            name: '반곡동',
          },
          {
            id: 'gangwon_14_022',
            name: '봉산1동',
          },
          {
            id: 'gangwon_14_023',
            name: '봉산2동',
          },
          {
            id: 'gangwon_14_024',
            name: '봉산동',
          },
          {
            id: 'gangwon_14_025',
            name: '봉산동',
          },
          {
            id: 'gangwon_14_026',
            name: '부론면',
          },
          {
            id: 'gangwon_14_027',
            name: '부론면',
          },
          {
            id: 'gangwon_14_028',
            name: '소초면',
          },
          {
            id: 'gangwon_14_029',
            name: '소초면',
          },
          {
            id: 'gangwon_14_030',
            name: '신림면',
          },
          {
            id: 'gangwon_14_031',
            name: '신림면',
          },
          {
            id: 'gangwon_14_032',
            name: '우산동',
          },
          {
            id: 'gangwon_14_033',
            name: '우산동',
          },
          {
            id: 'gangwon_14_034',
            name: '원동',
          },
          {
            id: 'gangwon_14_035',
            name: '원동',
          },
          {
            id: 'gangwon_14_036',
            name: '원인동',
          },
          {
            id: 'gangwon_14_037',
            name: '인동',
          },
          {
            id: 'gangwon_14_038',
            name: '인동',
          },
          {
            id: 'gangwon_14_039',
            name: '일산동',
          },
          {
            id: 'gangwon_14_040',
            name: '일산동',
          },
          {
            id: 'gangwon_14_041',
            name: '중앙동',
          },
          {
            id: 'gangwon_14_042',
            name: '중앙동',
          },
          {
            id: 'gangwon_14_043',
            name: '중평동',
          },
          {
            id: 'gangwon_14_044',
            name: '지정면',
          },
          {
            id: 'gangwon_14_045',
            name: '지정면',
          },
          {
            id: 'gangwon_14_046',
            name: '태장1동',
          },
          {
            id: 'gangwon_14_047',
            name: '태장2동',
          },
          {
            id: 'gangwon_14_048',
            name: '태장동',
          },
          {
            id: 'gangwon_14_049',
            name: '태장동',
          },
          {
            id: 'gangwon_14_050',
            name: '판부면',
          },
          {
            id: 'gangwon_14_051',
            name: '판부면',
          },
          {
            id: 'gangwon_14_052',
            name: '평원동',
          },
          {
            id: 'gangwon_14_053',
            name: '평원동',
          },
          {
            id: 'gangwon_14_054',
            name: '학성1동',
          },
          {
            id: 'gangwon_14_055',
            name: '학성2동',
          },
          {
            id: 'gangwon_14_056',
            name: '학성동',
          },
          {
            id: 'gangwon_14_057',
            name: '학성동',
          },
          {
            id: 'gangwon_14_058',
            name: '행구동',
          },
          {
            id: 'gangwon_14_059',
            name: '행구동',
          },
          {
            id: 'gangwon_14_060',
            name: '호저면',
          },
          {
            id: 'gangwon_14_061',
            name: '호저면',
          },
          {
            id: 'gangwon_14_062',
            name: '흥업면',
          },
          {
            id: 'gangwon_14_063',
            name: '흥업면',
          },
        ],
      },
      {
        id: 'gangwon_15',
        name: '인제군',
        subregions: [
          {
            id: 'gangwon_15_001',
            name: '기린면',
          },
          {
            id: 'gangwon_15_002',
            name: '기린면',
          },
          {
            id: 'gangwon_15_003',
            name: '남면',
          },
          {
            id: 'gangwon_15_004',
            name: '남면',
          },
          {
            id: 'gangwon_15_005',
            name: '북면',
          },
          {
            id: 'gangwon_15_006',
            name: '북면',
          },
          {
            id: 'gangwon_15_007',
            name: '상남면',
          },
          {
            id: 'gangwon_15_008',
            name: '상남면',
          },
          {
            id: 'gangwon_15_009',
            name: '서화면',
          },
          {
            id: 'gangwon_15_010',
            name: '서화면',
          },
          {
            id: 'gangwon_15_011',
            name: '인제면',
          },
          {
            id: 'gangwon_15_012',
            name: '인제읍',
          },
          {
            id: 'gangwon_15_013',
            name: '인제읍',
          },
        ],
      },
      {
        id: 'gangwon_16',
        name: '정선군',
        subregions: [
          {
            id: 'gangwon_16_001',
            name: '고한읍',
          },
          {
            id: 'gangwon_16_002',
            name: '고한읍',
          },
          {
            id: 'gangwon_16_003',
            name: '남면',
          },
          {
            id: 'gangwon_16_004',
            name: '남면',
          },
          {
            id: 'gangwon_16_005',
            name: '동면',
          },
          {
            id: 'gangwon_16_006',
            name: '북면',
          },
          {
            id: 'gangwon_16_007',
            name: '북평면',
          },
          {
            id: 'gangwon_16_008',
            name: '북평면',
          },
          {
            id: 'gangwon_16_009',
            name: '사북읍',
          },
          {
            id: 'gangwon_16_010',
            name: '사북읍',
          },
          {
            id: 'gangwon_16_011',
            name: '신동면',
          },
          {
            id: 'gangwon_16_012',
            name: '신동읍',
          },
          {
            id: 'gangwon_16_013',
            name: '신동읍',
          },
          {
            id: 'gangwon_16_014',
            name: '여량면',
          },
          {
            id: 'gangwon_16_015',
            name: '여량면',
          },
          {
            id: 'gangwon_16_016',
            name: '임계면',
          },
          {
            id: 'gangwon_16_017',
            name: '임계면',
          },
          {
            id: 'gangwon_16_018',
            name: '정선면',
          },
          {
            id: 'gangwon_16_019',
            name: '정선읍',
          },
          {
            id: 'gangwon_16_020',
            name: '정선읍',
          },
          {
            id: 'gangwon_16_021',
            name: '화암면',
          },
          {
            id: 'gangwon_16_022',
            name: '화암면',
          },
        ],
      },
      {
        id: 'gangwon_17',
        name: '철원군',
        subregions: [
          {
            id: 'gangwon_17_001',
            name: '갈말면',
          },
          {
            id: 'gangwon_17_002',
            name: '갈말읍',
          },
          {
            id: 'gangwon_17_003',
            name: '갈말읍',
          },
          {
            id: 'gangwon_17_004',
            name: '근남면',
          },
          {
            id: 'gangwon_17_005',
            name: '근남면',
          },
          {
            id: 'gangwon_17_006',
            name: '근동면',
          },
          {
            id: 'gangwon_17_007',
            name: '근동면',
          },
          {
            id: 'gangwon_17_008',
            name: '근북면',
          },
          {
            id: 'gangwon_17_009',
            name: '근북면',
          },
          {
            id: 'gangwon_17_010',
            name: '김화읍',
          },
          {
            id: 'gangwon_17_011',
            name: '김화읍',
          },
          {
            id: 'gangwon_17_012',
            name: '동송면',
          },
          {
            id: 'gangwon_17_013',
            name: '동송읍',
          },
          {
            id: 'gangwon_17_014',
            name: '동송읍',
          },
          {
            id: 'gangwon_17_015',
            name: '서면',
          },
          {
            id: 'gangwon_17_016',
            name: '서면',
          },
          {
            id: 'gangwon_17_017',
            name: '원남면',
          },
          {
            id: 'gangwon_17_018',
            name: '원남면',
          },
          {
            id: 'gangwon_17_019',
            name: '원동면',
          },
          {
            id: 'gangwon_17_020',
            name: '원동면',
          },
          {
            id: 'gangwon_17_021',
            name: '임남면',
          },
          {
            id: 'gangwon_17_022',
            name: '임남면',
          },
          {
            id: 'gangwon_17_023',
            name: '임문면',
          },
          {
            id: 'gangwon_17_024',
            name: '철원읍',
          },
          {
            id: 'gangwon_17_025',
            name: '철원읍',
          },
        ],
      },
      {
        id: 'gangwon_18',
        name: '춘성군',
        subregions: [
          {
            id: 'gangwon_18_001',
            name: '남면',
          },
          {
            id: 'gangwon_18_002',
            name: '남산면',
          },
          {
            id: 'gangwon_18_003',
            name: '동내면',
          },
          {
            id: 'gangwon_18_004',
            name: '동면',
          },
          {
            id: 'gangwon_18_005',
            name: '동산면',
          },
          {
            id: 'gangwon_18_006',
            name: '북산면',
          },
          {
            id: 'gangwon_18_007',
            name: '사북면',
          },
          {
            id: 'gangwon_18_008',
            name: '서면',
          },
          {
            id: 'gangwon_18_009',
            name: '신동면',
          },
          {
            id: 'gangwon_18_010',
            name: '신북면',
          },
        ],
      },
      {
        id: 'gangwon_19',
        name: '춘천군',
        subregions: [
          {
            id: 'gangwon_19_001',
            name: '남면',
          },
          {
            id: 'gangwon_19_002',
            name: '남산면',
          },
          {
            id: 'gangwon_19_003',
            name: '동내면',
          },
          {
            id: 'gangwon_19_004',
            name: '동면',
          },
          {
            id: 'gangwon_19_005',
            name: '동산면',
          },
          {
            id: 'gangwon_19_006',
            name: '북산면',
          },
          {
            id: 'gangwon_19_007',
            name: '사북면',
          },
          {
            id: 'gangwon_19_008',
            name: '서면',
          },
          {
            id: 'gangwon_19_009',
            name: '신동면',
          },
          {
            id: 'gangwon_19_010',
            name: '신북면',
          },
        ],
      },
      {
        id: 'gangwon_20',
        name: '춘천시',
        subregions: [
          {
            id: 'gangwon_20_001',
            name: '교동',
          },
          {
            id: 'gangwon_20_002',
            name: '교동',
          },
          {
            id: 'gangwon_20_003',
            name: '근화동',
          },
          {
            id: 'gangwon_20_004',
            name: '근화동',
          },
          {
            id: 'gangwon_20_005',
            name: '낙원동',
          },
          {
            id: 'gangwon_20_006',
            name: '낙원동',
          },
          {
            id: 'gangwon_20_007',
            name: '남면',
          },
          {
            id: 'gangwon_20_008',
            name: '남면',
          },
          {
            id: 'gangwon_20_009',
            name: '남산면',
          },
          {
            id: 'gangwon_20_010',
            name: '남산면',
          },
          {
            id: 'gangwon_20_011',
            name: '동내면',
          },
          {
            id: 'gangwon_20_012',
            name: '동내면',
          },
          {
            id: 'gangwon_20_013',
            name: '동면',
          },
          {
            id: 'gangwon_20_014',
            name: '동면',
          },
          {
            id: 'gangwon_20_015',
            name: '동산면',
          },
          {
            id: 'gangwon_20_016',
            name: '동산면',
          },
          {
            id: 'gangwon_20_017',
            name: '봉의동',
          },
          {
            id: 'gangwon_20_018',
            name: '봉의동',
          },
          {
            id: 'gangwon_20_019',
            name: '북산면',
          },
          {
            id: 'gangwon_20_020',
            name: '북산면',
          },
          {
            id: 'gangwon_20_021',
            name: '사농동',
          },
          {
            id: 'gangwon_20_022',
            name: '사농동',
          },
          {
            id: 'gangwon_20_023',
            name: '사북면',
          },
          {
            id: 'gangwon_20_024',
            name: '사북면',
          },
          {
            id: 'gangwon_20_025',
            name: '사우동',
          },
          {
            id: 'gangwon_20_026',
            name: '삼천동',
          },
          {
            id: 'gangwon_20_027',
            name: '삼천동',
          },
          {
            id: 'gangwon_20_028',
            name: '서면',
          },
          {
            id: 'gangwon_20_029',
            name: '서면',
          },
          {
            id: 'gangwon_20_030',
            name: '석사동',
          },
          {
            id: 'gangwon_20_031',
            name: '석사동',
          },
          {
            id: 'gangwon_20_032',
            name: '소락동',
          },
          {
            id: 'gangwon_20_033',
            name: '소양동',
          },
          {
            id: 'gangwon_20_034',
            name: '소양로1가',
          },
          {
            id: 'gangwon_20_035',
            name: '소양로1가',
          },
          {
            id: 'gangwon_20_036',
            name: '소양로2가',
          },
          {
            id: 'gangwon_20_037',
            name: '소양로2가',
          },
          {
            id: 'gangwon_20_038',
            name: '소양로3가',
          },
          {
            id: 'gangwon_20_039',
            name: '소양로3가',
          },
          {
            id: 'gangwon_20_040',
            name: '소양로4가',
          },
          {
            id: 'gangwon_20_041',
            name: '소양로4가',
          },
          {
            id: 'gangwon_20_042',
            name: '송암동',
          },
          {
            id: 'gangwon_20_043',
            name: '송암동',
          },
          {
            id: 'gangwon_20_044',
            name: '신동',
          },
          {
            id: 'gangwon_20_045',
            name: '신동',
          },
          {
            id: 'gangwon_20_046',
            name: '신동면',
          },
          {
            id: 'gangwon_20_047',
            name: '신동면',
          },
          {
            id: 'gangwon_20_048',
            name: '신북면',
          },
          {
            id: 'gangwon_20_049',
            name: '신북읍',
          },
          {
            id: 'gangwon_20_050',
            name: '신북읍',
          },
          {
            id: 'gangwon_20_051',
            name: '약사동',
          },
          {
            id: 'gangwon_20_052',
            name: '약사동',
          },
          {
            id: 'gangwon_20_053',
            name: '옥천동',
          },
          {
            id: 'gangwon_20_054',
            name: '옥천동',
          },
          {
            id: 'gangwon_20_055',
            name: '온의동',
          },
          {
            id: 'gangwon_20_056',
            name: '온의동',
          },
          {
            id: 'gangwon_20_057',
            name: '요선동',
          },
          {
            id: 'gangwon_20_058',
            name: '요선동',
          },
          {
            id: 'gangwon_20_059',
            name: '우두동',
          },
          {
            id: 'gangwon_20_060',
            name: '우두동',
          },
          {
            id: 'gangwon_20_061',
            name: '운교동',
          },
          {
            id: 'gangwon_20_062',
            name: '운교동',
          },
          {
            id: 'gangwon_20_063',
            name: '조양동',
          },
          {
            id: 'gangwon_20_064',
            name: '조양동',
          },
          {
            id: 'gangwon_20_065',
            name: '조운동',
          },
          {
            id: 'gangwon_20_066',
            name: '죽림동',
          },
          {
            id: 'gangwon_20_067',
            name: '죽림동',
          },
          {
            id: 'gangwon_20_068',
            name: '중도동',
          },
          {
            id: 'gangwon_20_069',
            name: '중도동',
          },
          {
            id: 'gangwon_20_070',
            name: '중앙동',
          },
          {
            id: 'gangwon_20_071',
            name: '중앙로1가',
          },
          {
            id: 'gangwon_20_072',
            name: '중앙로1가',
          },
          {
            id: 'gangwon_20_073',
            name: '중앙로2가',
          },
          {
            id: 'gangwon_20_074',
            name: '중앙로2가',
          },
          {
            id: 'gangwon_20_075',
            name: '중앙로3가',
          },
          {
            id: 'gangwon_20_076',
            name: '중앙로3가',
          },
          {
            id: 'gangwon_20_077',
            name: '칠송동',
          },
          {
            id: 'gangwon_20_078',
            name: '칠전동',
          },
          {
            id: 'gangwon_20_079',
            name: '칠전동',
          },
          {
            id: 'gangwon_20_080',
            name: '퇴계동',
          },
          {
            id: 'gangwon_20_081',
            name: '퇴계동',
          },
          {
            id: 'gangwon_20_082',
            name: '호반동',
          },
          {
            id: 'gangwon_20_083',
            name: '효자1동',
          },
          {
            id: 'gangwon_20_084',
            name: '효자2동',
          },
          {
            id: 'gangwon_20_085',
            name: '효자3동',
          },
          {
            id: 'gangwon_20_086',
            name: '효자동',
          },
          {
            id: 'gangwon_20_087',
            name: '효자동',
          },
          {
            id: 'gangwon_20_088',
            name: '후평1동',
          },
          {
            id: 'gangwon_20_089',
            name: '후평2동',
          },
          {
            id: 'gangwon_20_090',
            name: '후평동',
          },
          {
            id: 'gangwon_20_091',
            name: '후평동',
          },
        ],
      },
      {
        id: 'gangwon_21',
        name: '태백시',
        subregions: [
          {
            id: 'gangwon_21_001',
            name: '계산동',
          },
          {
            id: 'gangwon_21_002',
            name: '금천동',
          },
          {
            id: 'gangwon_21_003',
            name: '금천동',
          },
          {
            id: 'gangwon_21_004',
            name: '동점동',
          },
          {
            id: 'gangwon_21_005',
            name: '동점동',
          },
          {
            id: 'gangwon_21_006',
            name: '문곡동',
          },
          {
            id: 'gangwon_21_007',
            name: '문곡동',
          },
          {
            id: 'gangwon_21_008',
            name: '백산동',
          },
          {
            id: 'gangwon_21_009',
            name: '백산동',
          },
          {
            id: 'gangwon_21_010',
            name: '상사미동',
          },
          {
            id: 'gangwon_21_011',
            name: '상사미동',
          },
          {
            id: 'gangwon_21_012',
            name: '상장동',
          },
          {
            id: 'gangwon_21_013',
            name: '소도동',
          },
          {
            id: 'gangwon_21_014',
            name: '소도동',
          },
          {
            id: 'gangwon_21_015',
            name: '연화동',
          },
          {
            id: 'gangwon_21_016',
            name: '원동',
          },
          {
            id: 'gangwon_21_017',
            name: '원동',
          },
          {
            id: 'gangwon_21_018',
            name: '장성동',
          },
          {
            id: 'gangwon_21_019',
            name: '장성동',
          },
          {
            id: 'gangwon_21_020',
            name: '적각동',
          },
          {
            id: 'gangwon_21_021',
            name: '적각동',
          },
          {
            id: 'gangwon_21_022',
            name: '조탄동',
          },
          {
            id: 'gangwon_21_023',
            name: '조탄동',
          },
          {
            id: 'gangwon_21_024',
            name: '창죽동',
          },
          {
            id: 'gangwon_21_025',
            name: '창죽동',
          },
          {
            id: 'gangwon_21_026',
            name: '철암1동',
          },
          {
            id: 'gangwon_21_027',
            name: '철암2동',
          },
          {
            id: 'gangwon_21_028',
            name: '철암동',
          },
          {
            id: 'gangwon_21_029',
            name: '철암동',
          },
          {
            id: 'gangwon_21_030',
            name: '통동',
          },
          {
            id: 'gangwon_21_031',
            name: '통동',
          },
          {
            id: 'gangwon_21_032',
            name: '하사미동',
          },
          {
            id: 'gangwon_21_033',
            name: '하사미동',
          },
          {
            id: 'gangwon_21_034',
            name: '혈동',
          },
          {
            id: 'gangwon_21_035',
            name: '혈동',
          },
          {
            id: 'gangwon_21_036',
            name: '화광동',
          },
          {
            id: 'gangwon_21_037',
            name: '화전1동',
          },
          {
            id: 'gangwon_21_038',
            name: '화전2동',
          },
          {
            id: 'gangwon_21_039',
            name: '화전동',
          },
          {
            id: 'gangwon_21_040',
            name: '화전동',
          },
          {
            id: 'gangwon_21_041',
            name: '황지1동',
          },
          {
            id: 'gangwon_21_042',
            name: '황지2동',
          },
          {
            id: 'gangwon_21_043',
            name: '황지3동',
          },
          {
            id: 'gangwon_21_044',
            name: '황지동',
          },
          {
            id: 'gangwon_21_045',
            name: '황지동',
          },
        ],
      },
      {
        id: 'gangwon_22',
        name: '평창군',
        subregions: [
          {
            id: 'gangwon_22_001',
            name: '대관령면',
          },
          {
            id: 'gangwon_22_002',
            name: '대관령면',
          },
          {
            id: 'gangwon_22_003',
            name: '대화면',
          },
          {
            id: 'gangwon_22_004',
            name: '대화면',
          },
          {
            id: 'gangwon_22_005',
            name: '도암면',
          },
          {
            id: 'gangwon_22_006',
            name: '미탄면',
          },
          {
            id: 'gangwon_22_007',
            name: '미탄면',
          },
          {
            id: 'gangwon_22_008',
            name: '방림면',
          },
          {
            id: 'gangwon_22_009',
            name: '방림면',
          },
          {
            id: 'gangwon_22_010',
            name: '봉평면',
          },
          {
            id: 'gangwon_22_011',
            name: '봉평면',
          },
          {
            id: 'gangwon_22_012',
            name: '용평면',
          },
          {
            id: 'gangwon_22_013',
            name: '용평면',
          },
          {
            id: 'gangwon_22_014',
            name: '진부면',
          },
          {
            id: 'gangwon_22_015',
            name: '진부면',
          },
          {
            id: 'gangwon_22_016',
            name: '평창면',
          },
          {
            id: 'gangwon_22_017',
            name: '평창읍',
          },
          {
            id: 'gangwon_22_018',
            name: '평창읍',
          },
        ],
      },
      {
        id: 'gangwon_23',
        name: '홍천군',
        subregions: [
          {
            id: 'gangwon_23_001',
            name: '남면',
          },
          {
            id: 'gangwon_23_002',
            name: '남면',
          },
          {
            id: 'gangwon_23_003',
            name: '내면',
          },
          {
            id: 'gangwon_23_004',
            name: '내면',
          },
          {
            id: 'gangwon_23_005',
            name: '내촌면',
          },
          {
            id: 'gangwon_23_006',
            name: '내촌면',
          },
          {
            id: 'gangwon_23_007',
            name: '동면',
          },
          {
            id: 'gangwon_23_008',
            name: '두촌면',
          },
          {
            id: 'gangwon_23_009',
            name: '두촌면',
          },
          {
            id: 'gangwon_23_010',
            name: '북방면',
          },
          {
            id: 'gangwon_23_011',
            name: '북방면',
          },
          {
            id: 'gangwon_23_012',
            name: '서면',
          },
          {
            id: 'gangwon_23_013',
            name: '서면',
          },
          {
            id: 'gangwon_23_014',
            name: '서석면',
          },
          {
            id: 'gangwon_23_015',
            name: '서석면',
          },
          {
            id: 'gangwon_23_016',
            name: '영귀미면',
          },
          {
            id: 'gangwon_23_017',
            name: '영귀미면',
          },
          {
            id: 'gangwon_23_018',
            name: '홍천면',
          },
          {
            id: 'gangwon_23_019',
            name: '홍천읍',
          },
          {
            id: 'gangwon_23_020',
            name: '홍천읍',
          },
          {
            id: 'gangwon_23_021',
            name: '화촌면',
          },
          {
            id: 'gangwon_23_022',
            name: '화촌면',
          },
        ],
      },
      {
        id: 'gangwon_24',
        name: '화천군',
        subregions: [
          {
            id: 'gangwon_24_001',
            name: '간동면',
          },
          {
            id: 'gangwon_24_002',
            name: '간동면',
          },
          {
            id: 'gangwon_24_003',
            name: '사내면',
          },
          {
            id: 'gangwon_24_004',
            name: '사내면',
          },
          {
            id: 'gangwon_24_005',
            name: '상서면',
          },
          {
            id: 'gangwon_24_006',
            name: '상서면',
          },
          {
            id: 'gangwon_24_007',
            name: '하남면',
          },
          {
            id: 'gangwon_24_008',
            name: '하남면',
          },
          {
            id: 'gangwon_24_009',
            name: '화천면',
          },
          {
            id: 'gangwon_24_010',
            name: '화천읍',
          },
          {
            id: 'gangwon_24_011',
            name: '화천읍',
          },
        ],
      },
      {
        id: 'gangwon_25',
        name: '횡성군',
        subregions: [
          {
            id: 'gangwon_25_001',
            name: '갑천면',
          },
          {
            id: 'gangwon_25_002',
            name: '갑천면',
          },
          {
            id: 'gangwon_25_003',
            name: '강림면',
          },
          {
            id: 'gangwon_25_004',
            name: '강림면',
          },
          {
            id: 'gangwon_25_005',
            name: '공근면',
          },
          {
            id: 'gangwon_25_006',
            name: '공근면',
          },
          {
            id: 'gangwon_25_007',
            name: '둔내면',
          },
          {
            id: 'gangwon_25_008',
            name: '둔내면',
          },
          {
            id: 'gangwon_25_009',
            name: '서원면',
          },
          {
            id: 'gangwon_25_010',
            name: '서원면',
          },
          {
            id: 'gangwon_25_011',
            name: '안흥면',
          },
          {
            id: 'gangwon_25_012',
            name: '안흥면',
          },
          {
            id: 'gangwon_25_013',
            name: '우천면',
          },
          {
            id: 'gangwon_25_014',
            name: '우천면',
          },
          {
            id: 'gangwon_25_015',
            name: '청일면',
          },
          {
            id: 'gangwon_25_016',
            name: '청일면',
          },
          {
            id: 'gangwon_25_017',
            name: '횡성면',
          },
          {
            id: 'gangwon_25_018',
            name: '횡성읍',
          },
          {
            id: 'gangwon_25_019',
            name: '횡성읍',
          },
        ],
      },
    ],
  },
  {
    id: 'jeju',
    name: '제주',
    subregions: [
      {
        id: 'jeju_01',
        name: '남제주군',
        subregions: [
          {
            id: 'jeju_01_001',
            name: '남원면',
          },
          {
            id: 'jeju_01_002',
            name: '남원읍',
          },
          {
            id: 'jeju_01_003',
            name: '대정읍',
          },
          {
            id: 'jeju_01_004',
            name: '서귀읍',
          },
          {
            id: 'jeju_01_005',
            name: '성산면',
          },
          {
            id: 'jeju_01_006',
            name: '성산읍',
          },
          {
            id: 'jeju_01_007',
            name: '안덕면',
          },
          {
            id: 'jeju_01_008',
            name: '중문면',
          },
          {
            id: 'jeju_01_009',
            name: '표선면',
          },
        ],
      },
      {
        id: 'jeju_02',
        name: '북제주군',
        subregions: [
          {
            id: 'jeju_02_001',
            name: '구좌면',
          },
          {
            id: 'jeju_02_002',
            name: '구좌읍',
          },
          {
            id: 'jeju_02_003',
            name: '애월면',
          },
          {
            id: 'jeju_02_004',
            name: '애월읍',
          },
          {
            id: 'jeju_02_005',
            name: '우도면',
          },
          {
            id: 'jeju_02_006',
            name: '조천면',
          },
          {
            id: 'jeju_02_007',
            name: '조천읍',
          },
          {
            id: 'jeju_02_008',
            name: '추자면',
          },
          {
            id: 'jeju_02_009',
            name: '한경면',
          },
          {
            id: 'jeju_02_010',
            name: '한림읍',
          },
        ],
      },
      {
        id: 'jeju_03',
        name: '서귀포시',
        subregions: [
          {
            id: 'jeju_03_001',
            name: '강정동',
          },
          {
            id: 'jeju_03_002',
            name: '강정동',
          },
          {
            id: 'jeju_03_003',
            name: '남원읍',
          },
          {
            id: 'jeju_03_004',
            name: '대륜동',
          },
          {
            id: 'jeju_03_005',
            name: '대정읍',
          },
          {
            id: 'jeju_03_006',
            name: '대천동',
          },
          {
            id: 'jeju_03_007',
            name: '대포동',
          },
          {
            id: 'jeju_03_008',
            name: '대포동',
          },
          {
            id: 'jeju_03_009',
            name: '도순동',
          },
          {
            id: 'jeju_03_010',
            name: '도순동',
          },
          {
            id: 'jeju_03_011',
            name: '동홍동',
          },
          {
            id: 'jeju_03_012',
            name: '동홍동',
          },
          {
            id: 'jeju_03_013',
            name: '법환동',
          },
          {
            id: 'jeju_03_014',
            name: '법환동',
          },
          {
            id: 'jeju_03_015',
            name: '보목동',
          },
          {
            id: 'jeju_03_016',
            name: '보목동',
          },
          {
            id: 'jeju_03_017',
            name: '상예동',
          },
          {
            id: 'jeju_03_018',
            name: '상예동',
          },
          {
            id: 'jeju_03_019',
            name: '상효동',
          },
          {
            id: 'jeju_03_020',
            name: '상효동',
          },
          {
            id: 'jeju_03_021',
            name: '색달동',
          },
          {
            id: 'jeju_03_022',
            name: '색달동',
          },
          {
            id: 'jeju_03_023',
            name: '서귀동',
          },
          {
            id: 'jeju_03_024',
            name: '서귀동',
          },
          {
            id: 'jeju_03_025',
            name: '서호동',
          },
          {
            id: 'jeju_03_026',
            name: '서호동',
          },
          {
            id: 'jeju_03_027',
            name: '서홍동',
          },
          {
            id: 'jeju_03_028',
            name: '서홍동',
          },
          {
            id: 'jeju_03_029',
            name: '성산읍',
          },
          {
            id: 'jeju_03_030',
            name: '송산동',
          },
          {
            id: 'jeju_03_031',
            name: '신효동',
          },
          {
            id: 'jeju_03_032',
            name: '신효동',
          },
          {
            id: 'jeju_03_033',
            name: '안덕면',
          },
          {
            id: 'jeju_03_034',
            name: '영남동',
          },
          {
            id: 'jeju_03_035',
            name: '영남동',
          },
          {
            id: 'jeju_03_036',
            name: '영천동',
          },
          {
            id: 'jeju_03_037',
            name: '예래동',
          },
          {
            id: 'jeju_03_038',
            name: '월평동',
          },
          {
            id: 'jeju_03_039',
            name: '월평동',
          },
          {
            id: 'jeju_03_040',
            name: '정방동',
          },
          {
            id: 'jeju_03_041',
            name: '중문동',
          },
          {
            id: 'jeju_03_042',
            name: '중문동',
          },
          {
            id: 'jeju_03_043',
            name: '중앙동',
          },
          {
            id: 'jeju_03_044',
            name: '천지동',
          },
          {
            id: 'jeju_03_045',
            name: '토평동',
          },
          {
            id: 'jeju_03_046',
            name: '토평동',
          },
          {
            id: 'jeju_03_047',
            name: '표선면',
          },
          {
            id: 'jeju_03_048',
            name: '하예동',
          },
          {
            id: 'jeju_03_049',
            name: '하예동',
          },
          {
            id: 'jeju_03_050',
            name: '하원동',
          },
          {
            id: 'jeju_03_051',
            name: '하원동',
          },
          {
            id: 'jeju_03_052',
            name: '하효동',
          },
          {
            id: 'jeju_03_053',
            name: '하효동',
          },
          {
            id: 'jeju_03_054',
            name: '호근동',
          },
          {
            id: 'jeju_03_055',
            name: '호근동',
          },
          {
            id: 'jeju_03_056',
            name: '회수동',
          },
          {
            id: 'jeju_03_057',
            name: '회수동',
          },
          {
            id: 'jeju_03_058',
            name: '효돈동',
          },
        ],
      },
      {
        id: 'jeju_04',
        name: '제주시',
        subregions: [
          {
            id: 'jeju_04_001',
            name: '건입동',
          },
          {
            id: 'jeju_04_002',
            name: '건입동',
          },
          {
            id: 'jeju_04_003',
            name: '구좌읍',
          },
          {
            id: 'jeju_04_004',
            name: '내도동',
          },
          {
            id: 'jeju_04_005',
            name: '내도동',
          },
          {
            id: 'jeju_04_006',
            name: '노형동',
          },
          {
            id: 'jeju_04_007',
            name: '노형동',
          },
          {
            id: 'jeju_04_008',
            name: '도남동',
          },
          {
            id: 'jeju_04_009',
            name: '도남동',
          },
          {
            id: 'jeju_04_010',
            name: '도두동',
          },
          {
            id: 'jeju_04_011',
            name: '도두이동',
          },
          {
            id: 'jeju_04_012',
            name: '도두이동',
          },
          {
            id: 'jeju_04_013',
            name: '도두일동',
          },
          {
            id: 'jeju_04_014',
            name: '도두일동',
          },
          {
            id: 'jeju_04_015',
            name: '도련이동',
          },
          {
            id: 'jeju_04_016',
            name: '도련이동',
          },
          {
            id: 'jeju_04_017',
            name: '도련일동',
          },
          {
            id: 'jeju_04_018',
            name: '도련일동',
          },
          {
            id: 'jeju_04_019',
            name: '도평동',
          },
          {
            id: 'jeju_04_020',
            name: '도평동',
          },
          {
            id: 'jeju_04_021',
            name: '봉개동',
          },
          {
            id: 'jeju_04_022',
            name: '봉개동',
          },
          {
            id: 'jeju_04_023',
            name: '삼도이동',
          },
          {
            id: 'jeju_04_024',
            name: '삼도이동',
          },
          {
            id: 'jeju_04_025',
            name: '삼도일동',
          },
          {
            id: 'jeju_04_026',
            name: '삼도일동',
          },
          {
            id: 'jeju_04_027',
            name: '삼양동',
          },
          {
            id: 'jeju_04_028',
            name: '삼양삼동',
          },
          {
            id: 'jeju_04_029',
            name: '삼양삼동',
          },
          {
            id: 'jeju_04_030',
            name: '삼양이동',
          },
          {
            id: 'jeju_04_031',
            name: '삼양이동',
          },
          {
            id: 'jeju_04_032',
            name: '삼양일동',
          },
          {
            id: 'jeju_04_033',
            name: '삼양일동',
          },
          {
            id: 'jeju_04_034',
            name: '아라동',
          },
          {
            id: 'jeju_04_035',
            name: '아라이동',
          },
          {
            id: 'jeju_04_036',
            name: '아라이동',
          },
          {
            id: 'jeju_04_037',
            name: '아라일동',
          },
          {
            id: 'jeju_04_038',
            name: '아라일동',
          },
          {
            id: 'jeju_04_039',
            name: '애월읍',
          },
          {
            id: 'jeju_04_040',
            name: '연동',
          },
          {
            id: 'jeju_04_041',
            name: '연동',
          },
          {
            id: 'jeju_04_042',
            name: '영평동',
          },
          {
            id: 'jeju_04_043',
            name: '영평동',
          },
          {
            id: 'jeju_04_044',
            name: '오등동',
          },
          {
            id: 'jeju_04_045',
            name: '오등동',
          },
          {
            id: 'jeju_04_046',
            name: '오라동',
          },
          {
            id: 'jeju_04_047',
            name: '오라삼동',
          },
          {
            id: 'jeju_04_048',
            name: '오라삼동',
          },
          {
            id: 'jeju_04_049',
            name: '오라이동',
          },
          {
            id: 'jeju_04_050',
            name: '오라이동',
          },
          {
            id: 'jeju_04_051',
            name: '오라일동',
          },
          {
            id: 'jeju_04_052',
            name: '오라일동',
          },
          {
            id: 'jeju_04_053',
            name: '외도동',
          },
          {
            id: 'jeju_04_054',
            name: '외도이동',
          },
          {
            id: 'jeju_04_055',
            name: '외도이동',
          },
          {
            id: 'jeju_04_056',
            name: '외도일동',
          },
          {
            id: 'jeju_04_057',
            name: '외도일동',
          },
          {
            id: 'jeju_04_058',
            name: '용강동',
          },
          {
            id: 'jeju_04_059',
            name: '용강동',
          },
          {
            id: 'jeju_04_060',
            name: '용담삼동',
          },
          {
            id: 'jeju_04_061',
            name: '용담삼동',
          },
          {
            id: 'jeju_04_062',
            name: '용담이동',
          },
          {
            id: 'jeju_04_063',
            name: '용담이동',
          },
          {
            id: 'jeju_04_064',
            name: '용담일동',
          },
          {
            id: 'jeju_04_065',
            name: '용담일동',
          },
          {
            id: 'jeju_04_066',
            name: '우도면',
          },
          {
            id: 'jeju_04_067',
            name: '월평동',
          },
          {
            id: 'jeju_04_068',
            name: '월평동',
          },
          {
            id: 'jeju_04_069',
            name: '이도이동',
          },
          {
            id: 'jeju_04_070',
            name: '이도이동',
          },
          {
            id: 'jeju_04_071',
            name: '이도일동',
          },
          {
            id: 'jeju_04_072',
            name: '이도일동',
          },
          {
            id: 'jeju_04_073',
            name: '이호동',
          },
          {
            id: 'jeju_04_074',
            name: '이호이동',
          },
          {
            id: 'jeju_04_075',
            name: '이호이동',
          },
          {
            id: 'jeju_04_076',
            name: '이호일동',
          },
          {
            id: 'jeju_04_077',
            name: '이호일동',
          },
          {
            id: 'jeju_04_078',
            name: '일도이동',
          },
          {
            id: 'jeju_04_079',
            name: '일도이동',
          },
          {
            id: 'jeju_04_080',
            name: '일도일동',
          },
          {
            id: 'jeju_04_081',
            name: '일도일동',
          },
          {
            id: 'jeju_04_082',
            name: '조천읍',
          },
          {
            id: 'jeju_04_083',
            name: '추자면',
          },
          {
            id: 'jeju_04_084',
            name: '한경면',
          },
          {
            id: 'jeju_04_085',
            name: '한림읍',
          },
          {
            id: 'jeju_04_086',
            name: '해안동',
          },
          {
            id: 'jeju_04_087',
            name: '해안동',
          },
          {
            id: 'jeju_04_088',
            name: '화북동',
          },
          {
            id: 'jeju_04_089',
            name: '화북이동',
          },
          {
            id: 'jeju_04_090',
            name: '화북이동',
          },
          {
            id: 'jeju_04_091',
            name: '화북일동',
          },
          {
            id: 'jeju_04_092',
            name: '화북일동',
          },
          {
            id: 'jeju_04_093',
            name: '회천동',
          },
          {
            id: 'jeju_04_094',
            name: '회천동',
          },
        ],
      },
    ],
  },
  {
    id: 'sejong',
    name: '세종',
    subregions: [
      {
        id: 'sejong_01',
        name: '세종시',
        subregions: [
          {
            id: 'sejong_01_001',
            name: '가람동',
          },
          {
            id: 'sejong_01_002',
            name: '고운동',
          },
          {
            id: 'sejong_01_003',
            name: '금남면',
          },
          {
            id: 'sejong_01_004',
            name: '나성동',
          },
          {
            id: 'sejong_01_005',
            name: '누리동',
          },
          {
            id: 'sejong_01_006',
            name: '다솜동',
          },
          {
            id: 'sejong_01_007',
            name: '다정동',
          },
          {
            id: 'sejong_01_008',
            name: '대평동',
          },
          {
            id: 'sejong_01_009',
            name: '도담동',
          },
          {
            id: 'sejong_01_010',
            name: '반곡동',
          },
          {
            id: 'sejong_01_011',
            name: '보람동',
          },
          {
            id: 'sejong_01_012',
            name: '부강면',
          },
          {
            id: 'sejong_01_013',
            name: '산울동',
          },
          {
            id: 'sejong_01_014',
            name: '새롬동',
          },
          {
            id: 'sejong_01_015',
            name: '세종동',
          },
          {
            id: 'sejong_01_016',
            name: '소담동',
          },
          {
            id: 'sejong_01_017',
            name: '소정면',
          },
          {
            id: 'sejong_01_018',
            name: '아름동',
          },
          {
            id: 'sejong_01_019',
            name: '어진동',
          },
          {
            id: 'sejong_01_020',
            name: '연기면',
          },
          {
            id: 'sejong_01_021',
            name: '연동면',
          },
          {
            id: 'sejong_01_022',
            name: '연서면',
          },
          {
            id: 'sejong_01_023',
            name: '용호동',
          },
          {
            id: 'sejong_01_024',
            name: '장군면',
          },
          {
            id: 'sejong_01_025',
            name: '전동면',
          },
          {
            id: 'sejong_01_026',
            name: '전의면',
          },
          {
            id: 'sejong_01_027',
            name: '조치원읍',
          },
          {
            id: 'sejong_01_028',
            name: '종촌동',
          },
          {
            id: 'sejong_01_029',
            name: '집현동',
          },
          {
            id: 'sejong_01_030',
            name: '한별동',
          },
          {
            id: 'sejong_01_031',
            name: '한솔동',
          },
          {
            id: 'sejong_01_032',
            name: '합강동',
          },
          {
            id: 'sejong_01_033',
            name: '해밀동',
          },
        ],
      },
    ],
  },
];

export default regions;
