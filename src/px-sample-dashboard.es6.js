(function () {
  Polymer({
    is: 'px-sample-dashboard',
    properties: {
      title: {
        type: String,
        value: ""
      },
      chartData: {
        type: Array,
        value: function () {
          return [{
            "timeStamp": 1227232494001,
            "y0": "6.44",
            "y1": "-3.96",
            "y2": "-7.89",
            "y3": "4.26"
          }, {
            "timeStamp": 1228472111570,
            "y0": "6.31",
            "y1": "-4.38",
            "y2": "-7.60",
            "y3": "3.65"
          }, {
            "timeStamp": 1229711729139,
            "y0": "5.75",
            "y1": "-4.17",
            "y2": "-7.47",
            "y3": "3.90"
          }, {
            "timeStamp": 1230951346708,
            "y0": "5.96",
            "y1": "-4.24",
            "y2": "-6.78",
            "y3": "4.15"
          }, {
            "timeStamp": 1232190964277,
            "y0": "5.56",
            "y1": "-3.89",
            "y2": "-6.87",
            "y3": "3.94"
          }, {
            "timeStamp": 1233430581846,
            "y0": "5.90",
            "y1": "-4.52",
            "y2": "-7.46",
            "y3": "3.29"
          }, {
            "timeStamp": 1234670199415,
            "y0": "6.08",
            "y1": "-5.01",
            "y2": "-7.60",
            "y3": "2.74"
          }, {
            "timeStamp": 1235909816984,
            "y0": "6.75",
            "y1": "-4.32",
            "y2": "-7.05",
            "y3": "2.30"
          }, {
            "timeStamp": 1237149434553,
            "y0": "6.91",
            "y1": "-4.90",
            "y2": "-7.18",
            "y3": "1.71"
          }, {
            "timeStamp": 1238389052122,
            "y0": "7.38",
            "y1": "-4.31",
            "y2": "-6.94",
            "y3": "1.20"
          }, {
            "timeStamp": 1239628669691,
            "y0": "7.56",
            "y1": "-4.61",
            "y2": "-7.14",
            "y3": "1.11"
          }, {
            "timeStamp": 1240868287260,
            "y0": "8.23",
            "y1": "-4.84",
            "y2": "-6.95",
            "y3": "1.35"
          }, {
            "timeStamp": 1242107904829,
            "y0": "7.75",
            "y1": "-5.12",
            "y2": "-6.35",
            "y3": "0.70"
          }, {
            "timeStamp": 1243347522398,
            "y0": "8.25",
            "y1": "-5.05",
            "y2": "-5.71",
            "y3": "1.09"
          }, {
            "timeStamp": 1244587139967,
            "y0": "7.71",
            "y1": "-4.91",
            "y2": "-5.11",
            "y3": "1.01"
          }, {
            "timeStamp": 1245826757536,
            "y0": "7.27",
            "y1": "-5.60",
            "y2": "-5.51",
            "y3": "0.50"
          }, {
            "timeStamp": 1247066375105,
            "y0": "7.65",
            "y1": "-5.96",
            "y2": "-6.11",
            "y3": "0.21"
          }, {
            "timeStamp": 1248305992674,
            "y0": "8.29",
            "y1": "-5.28",
            "y2": "-5.90",
            "y3": "-0.22"
          }, {
            "timeStamp": 1249545610243,
            "y0": "7.98",
            "y1": "-4.66",
            "y2": "-6.29",
            "y3": "-0.45"
          }, {
            "timeStamp": 1250785227812,
            "y0": "7.72",
            "y1": "-5.28",
            "y2": "-6.19",
            "y3": "-0.77"
          }, {
            "timeStamp": 1252024845381,
            "y0": "8.03",
            "y1": "-5.11",
            "y2": "-6.42",
            "y3": "-0.49"
          }, {
            "timeStamp": 1253264462950,
            "y0": "8.65",
            "y1": "-5.08",
            "y2": "-6.67",
            "y3": "0.11"
          }, {
            "timeStamp": 1254504080519,
            "y0": "9.12",
            "y1": "-5.05",
            "y2": "-6.36",
            "y3": "0.03"
          }, {
            "timeStamp": 1255743698088,
            "y0": "9.67",
            "y1": "-5.70",
            "y2": "-6.46",
            "y3": "0.57"
          }, {
            "timeStamp": 1256983315657,
            "y0": "9.41",
            "y1": "-5.42",
            "y2": "-6.99",
            "y3": "0.07"
          }, {
            "timeStamp": 1258222933226,
            "y0": "9.97",
            "y1": "-4.84",
            "y2": "-6.63",
            "y3": "0.58"
          }, {
            "timeStamp": 1259462550795,
            "y0": "9.72",
            "y1": "-5.00",
            "y2": "-6.99",
            "y3": "0.24"
          }, {
            "timeStamp": 1260702168364,
            "y0": "10.11",
            "y1": "-4.94",
            "y2": "-7.13",
            "y3": "0.27"
          }, {
            "timeStamp": 1261941785933,
            "y0": "10.17",
            "y1": "-5.06",
            "y2": "-7.79",
            "y3": "-0.14"
          }, {
            "timeStamp": 1263181403502,
            "y0": "9.56",
            "y1": "-5.54",
            "y2": "-8.40",
            "y3": "-0.25"
          }, {
            "timeStamp": 1264421021071,
            "y0": "9.51",
            "y1": "-6.11",
            "y2": "-7.96",
            "y3": "0.10"
          }, {
            "timeStamp": 1265660638640,
            "y0": "9.95",
            "y1": "-6.56",
            "y2": "-7.72",
            "y3": "-0.24"
          }, {
            "timeStamp": 1266900256209,
            "y0": "9.54",
            "y1": "-6.34",
            "y2": "-7.83",
            "y3": "-0.68"
          }, {
            "timeStamp": 1268139873778,
            "y0": "9.55",
            "y1": "-6.79",
            "y2": "-8.33",
            "y3": "-0.88"
          }, {
            "timeStamp": 1269379491347,
            "y0": "8.98",
            "y1": "-7.43",
            "y2": "-8.72",
            "y3": "-0.93"
          }, {
            "timeStamp": 1270619108916,
            "y0": "9.29",
            "y1": "-7.96",
            "y2": "-8.42",
            "y3": "-0.55"
          }, {
            "timeStamp": 1271858726485,
            "y0": "8.69",
            "y1": "-8.52",
            "y2": "-8.09",
            "y3": "-0.42"
          }, {
            "timeStamp": 1273098344054,
            "y0": "8.07",
            "y1": "-8.05",
            "y2": "-8.09",
            "y3": "0.08"
          }, {
            "timeStamp": 1274337961623,
            "y0": "7.90",
            "y1": "-7.98",
            "y2": "-7.79",
            "y3": "0.53"
          }, {
            "timeStamp": 1275577579192,
            "y0": "7.68",
            "y1": "-8.04",
            "y2": "-7.14",
            "y3": "0.70"
          }, {
            "timeStamp": 1276817196761,
            "y0": "7.77",
            "y1": "-7.79",
            "y2": "-6.64",
            "y3": "1.21"
          }, {
            "timeStamp": 1278056814330,
            "y0": "8.25",
            "y1": "-7.70",
            "y2": "-6.25",
            "y3": "1.09"
          }, {
            "timeStamp": 1279296431899,
            "y0": "8.94",
            "y1": "-8.35",
            "y2": "-6.77",
            "y3": "1.52"
          }, {
            "timeStamp": 1280536049468,
            "y0": "9.49",
            "y1": "-9.00",
            "y2": "-6.12",
            "y3": "1.60"
          }, {
            "timeStamp": 1281775667037,
            "y0": "10.07",
            "y1": "-9.59",
            "y2": "-5.44",
            "y3": "2.30"
          }, {
            "timeStamp": 1283015284606,
            "y0": "10.60",
            "y1": "-10.19",
            "y2": "-5.07",
            "y3": "2.63"
          }, {
            "timeStamp": 1284254902175,
            "y0": "10.49",
            "y1": "-10.72",
            "y2": "-4.48",
            "y3": "3.20"
          }, {
            "timeStamp": 1285494519744,
            "y0": "10.06",
            "y1": "-10.19",
            "y2": "-4.97",
            "y3": "3.41"
          }, {
            "timeStamp": 1286734137313,
            "y0": "10.03",
            "y1": "-9.95",
            "y2": "-5.30",
            "y3": "3.60"
          }, {
            "timeStamp": 1287973754882,
            "y0": "9.48",
            "y1": "-10.00",
            "y2": "-5.02",
            "y3": "3.52"
          }, {
            "timeStamp": 1289213372451,
            "y0": "8.99",
            "y1": "-9.43",
            "y2": "-4.41",
            "y3": "4.00"
          }, {
            "timeStamp": 1290452990020,
            "y0": "8.92",
            "y1": "-9.13",
            "y2": "-4.44",
            "y3": "3.48"
          }, {
            "timeStamp": 1291692607589,
            "y0": "8.26",
            "y1": "-9.11",
            "y2": "-4.98",
            "y3": "4.16"
          }, {
            "timeStamp": 1292932225158,
            "y0": "8.70",
            "y1": "-8.98",
            "y2": "-5.28",
            "y3": "3.67"
          }, {
            "timeStamp": 1294171842727,
            "y0": "8.69",
            "y1": "-8.48",
            "y2": "-4.88",
            "y3": "3.10"
          }, {
            "timeStamp": 1295411460296,
            "y0": "9.04",
            "y1": "-8.41",
            "y2": "-4.59",
            "y3": "2.40"
          }, {
            "timeStamp": 1296651077865,
            "y0": "9.12",
            "y1": "-7.93",
            "y2": "-5.03",
            "y3": "2.74"
          }, {
            "timeStamp": 1297890695434,
            "y0": "8.87",
            "y1": "-7.91",
            "y2": "-4.63",
            "y3": "2.85"
          }, {
            "timeStamp": 1299130313003,
            "y0": "9.56",
            "y1": "-7.57",
            "y2": "-4.74",
            "y3": "3.49"
          }, {
            "timeStamp": 1300369930572,
            "y0": "10.18",
            "y1": "-7.57",
            "y2": "-4.88",
            "y3": "3.81"
          }, {
            "timeStamp": 1301609548141,
            "y0": "9.84",
            "y1": "-8.12",
            "y2": "-5.19",
            "y3": "4.30"
          }, {
            "timeStamp": 1302849165710,
            "y0": "10.53",
            "y1": "-8.22",
            "y2": "-4.69",
            "y3": "4.50"
          }, {
            "timeStamp": 1304088783279,
            "y0": "9.93",
            "y1": "-8.28",
            "y2": "-5.03",
            "y3": "4.50"
          }, {
            "timeStamp": 1305328400848,
            "y0": "9.68",
            "y1": "-7.70",
            "y2": "-5.47",
            "y3": "5.19"
          }, {
            "timeStamp": 1306568018417,
            "y0": "9.65",
            "y1": "-8.39",
            "y2": "-5.41",
            "y3": "5.44"
          }, {
            "timeStamp": 1307807635986,
            "y0": "9.22",
            "y1": "-8.51",
            "y2": "-5.29",
            "y3": "5.29"
          }, {
            "timeStamp": 1309047253555,
            "y0": "9.88",
            "y1": "-7.89",
            "y2": "-5.63",
            "y3": "5.25"
          }, {
            "timeStamp": 1310286871124,
            "y0": "9.82",
            "y1": "-8.21",
            "y2": "-5.18",
            "y3": "5.13"
          }, {
            "timeStamp": 1311526488693,
            "y0": "10.10",
            "y1": "-7.61",
            "y2": "-4.58",
            "y3": "4.57"
          }, {
            "timeStamp": 1312766106262,
            "y0": "9.78",
            "y1": "-6.97",
            "y2": "-4.43",
            "y3": "5.19"
          }, {
            "timeStamp": 1314005723831,
            "y0": "9.20",
            "y1": "-7.18",
            "y2": "-4.71",
            "y3": "5.21"
          }, {
            "timeStamp": 1315245341400,
            "y0": "8.74",
            "y1": "-7.25",
            "y2": "-5.03",
            "y3": "5.01"
          }, {
            "timeStamp": 1316484958969,
            "y0": "8.33",
            "y1": "-7.65",
            "y2": "-4.66",
            "y3": "5.67"
          }, {
            "timeStamp": 1317724576538,
            "y0": "7.80",
            "y1": "-7.86",
            "y2": "-5.19",
            "y3": "5.63"
          }, {
            "timeStamp": 1318964194107,
            "y0": "7.50",
            "y1": "-7.21",
            "y2": "-4.84",
            "y3": "5.71"
          }, {
            "timeStamp": 1320203811676,
            "y0": "7.68",
            "y1": "-7.69",
            "y2": "-5.53",
            "y3": "6.17"
          }, {
            "timeStamp": 1321443429245,
            "y0": "7.78",
            "y1": "-7.88",
            "y2": "-5.72",
            "y3": "6.71"
          }, {
            "timeStamp": 1322683046814,
            "y0": "7.35",
            "y1": "-7.42",
            "y2": "-5.92",
            "y3": "7.09"
          }, {
            "timeStamp": 1323922664383,
            "y0": "6.91",
            "y1": "-7.83",
            "y2": "-5.38",
            "y3": "6.99"
          }, {
            "timeStamp": 1325162281952,
            "y0": "6.39",
            "y1": "-7.84",
            "y2": "-5.96",
            "y3": "6.30"
          }, {
            "timeStamp": 1326401899521,
            "y0": "6.96",
            "y1": "-8.53",
            "y2": "-5.53",
            "y3": "6.48"
          }, {
            "timeStamp": 1327641517090,
            "y0": "6.69",
            "y1": "-9.19",
            "y2": "-5.86",
            "y3": "6.25"
          }, {
            "timeStamp": 1328881134659,
            "y0": "7.15",
            "y1": "-8.52",
            "y2": "-5.51",
            "y3": "6.15"
          }, {
            "timeStamp": 1330120752228,
            "y0": "6.66",
            "y1": "-9.21",
            "y2": "-5.89",
            "y3": "6.46"
          }, {
            "timeStamp": 1331360369797,
            "y0": "7.03",
            "y1": "-8.92",
            "y2": "-6.28",
            "y3": "6.87"
          }, {
            "timeStamp": 1332599987366,
            "y0": "7.38",
            "y1": "-9.39",
            "y2": "-6.50",
            "y3": "7.00"
          }, {
            "timeStamp": 1333839604935,
            "y0": "7.06",
            "y1": "-9.49",
            "y2": "-7.11",
            "y3": "7.42"
          }, {
            "timeStamp": 1335079222504,
            "y0": "7.07",
            "y1": "-10.10",
            "y2": "-6.47",
            "y3": "6.80"
          }, {
            "timeStamp": 1336318840073,
            "y0": "7.06",
            "y1": "-10.71",
            "y2": "-5.91",
            "y3": "6.38"
          }, {
            "timeStamp": 1337558457642,
            "y0": "7.18",
            "y1": "-10.23",
            "y2": "-6.32",
            "y3": "6.56"
          }, {
            "timeStamp": 1338798075211,
            "y0": "6.54",
            "y1": "-10.30",
            "y2": "-6.98",
            "y3": "6.51"
          }, {
            "timeStamp": 1340037692780,
            "y0": "6.14",
            "y1": "-10.28",
            "y2": "-7.12",
            "y3": "6.10"
          }, {
            "timeStamp": 1341277310349,
            "y0": "6.05",
            "y1": "-10.26",
            "y2": "-7.29",
            "y3": "5.53"
          }, {
            "timeStamp": 1342516927918,
            "y0": "5.86",
            "y1": "-10.33",
            "y2": "-7.84",
            "y3": "5.56"
          }, {
            "timeStamp": 1343756545487,
            "y0": "5.78",
            "y1": "-9.84",
            "y2": "-7.36",
            "y3": "5.36"
          }, {
            "timeStamp": 1344996163056,
            "y0": "6.27",
            "y1": "-10.08",
            "y2": "-6.70",
            "y3": "5.48"
          }, {
            "timeStamp": 1346235780625,
            "y0": "6.46",
            "y1": "-10.47",
            "y2": "-7.06",
            "y3": "5.05"
          }, {
            "timeStamp": 1347475398194,
            "y0": "6.58",
            "y1": "-9.91",
            "y2": "-7.33",
            "y3": "4.85"
          }, {
            "timeStamp": 1348715015763,
            "y0": "6.20",
            "y1": "-10.22",
            "y2": "-6.93",
            "y3": "4.56"
          }, {
            "timeStamp": 1349954633332,
            "y0": "6.46",
            "y1": "-10.77",
            "y2": "-6.80",
            "y3": "4.50"
          }, {
            "timeStamp": 1351194250901,
            "y0": "6.87",
            "y1": "-10.73",
            "y2": "-7.43",
            "y3": "4.43"
          }, {
            "timeStamp": 1352433868470,
            "y0": "7.06",
            "y1": "-11.11",
            "y2": "-7.07",
            "y3": "4.39"
          }, {
            "timeStamp": 1353673486039,
            "y0": "6.64",
            "y1": "-10.56",
            "y2": "-7.25",
            "y3": "4.93"
          }, {
            "timeStamp": 1354913103608,
            "y0": "6.58",
            "y1": "-11.09",
            "y2": "-6.58",
            "y3": "4.34"
          }, {
            "timeStamp": 1356152721177,
            "y0": "6.73",
            "y1": "-10.55",
            "y2": "-6.54",
            "y3": "4.35"
          }, {
            "timeStamp": 1357392338746,
            "y0": "6.10",
            "y1": "-10.30",
            "y2": "-7.02",
            "y3": "5.04"
          }, {
            "timeStamp": 1358631956315,
            "y0": "6.33",
            "y1": "-9.97",
            "y2": "-7.10",
            "y3": "4.87"
          }, {
            "timeStamp": 1359871573884,
            "y0": "6.79",
            "y1": "-10.37",
            "y2": "-7.53",
            "y3": "4.87"
          }, {
            "timeStamp": 1361111191453,
            "y0": "6.26",
            "y1": "-9.89",
            "y2": "-7.48",
            "y3": "4.78"
          }, {
            "timeStamp": 1362350809022,
            "y0": "5.74",
            "y1": "-9.68",
            "y2": "-7.43",
            "y3": "4.41"
          }, {
            "timeStamp": 1363590426591,
            "y0": "5.69",
            "y1": "-9.50",
            "y2": "-7.56",
            "y3": "4.20"
          }, {
            "timeStamp": 1364830044160,
            "y0": "5.78",
            "y1": "-9.00",
            "y2": "-7.37",
            "y3": "4.60"
          }, {
            "timeStamp": 1366069661729,
            "y0": "5.09",
            "y1": "-9.50",
            "y2": "-7.13",
            "y3": "5.26"
          }, {
            "timeStamp": 1367309279298,
            "y0": "4.98",
            "y1": "-8.85",
            "y2": "-6.67",
            "y3": "5.10"
          }, {
            "timeStamp": 1368548896867,
            "y0": "4.41",
            "y1": "-8.16",
            "y2": "-7.21",
            "y3": "4.94"
          }, {
            "timeStamp": 1369788514436,
            "y0": "4.13",
            "y1": "-7.55",
            "y2": "-6.70",
            "y3": "5.32"
          }, {
            "timeStamp": 1371028132005,
            "y0": "4.14",
            "y1": "-7.68",
            "y2": "-6.74",
            "y3": "5.68"
          }, {
            "timeStamp": 1372267749574,
            "y0": "4.07",
            "y1": "-7.97",
            "y2": "-7.40",
            "y3": "5.98"
          }, {
            "timeStamp": 1373507367143,
            "y0": "4.70",
            "y1": "-7.61",
            "y2": "-7.80",
            "y3": "6.26"
          }, {
            "timeStamp": 1374746984712,
            "y0": "4.85",
            "y1": "-7.38",
            "y2": "-8.39",
            "y3": "6.88"
          }, {
            "timeStamp": 1375986602281,
            "y0": "4.86",
            "y1": "-8.04",
            "y2": "-8.08",
            "y3": "7.30"
          }, {
            "timeStamp": 1377226219850,
            "y0": "4.84",
            "y1": "-8.52",
            "y2": "-7.48",
            "y3": "7.39"
          }, {
            "timeStamp": 1378465837419,
            "y0": "4.75",
            "y1": "-8.58",
            "y2": "-7.92",
            "y3": "7.31"
          }, {
            "timeStamp": 1379705454988,
            "y0": "4.70",
            "y1": "-8.31",
            "y2": "-8.48",
            "y3": "6.80"
          }, {
            "timeStamp": 1380945072557,
            "y0": "5.03",
            "y1": "-8.08",
            "y2": "-7.91",
            "y3": "6.87"
          }, {
            "timeStamp": 1382184690126,
            "y0": "4.76",
            "y1": "-8.22",
            "y2": "-7.83",
            "y3": "6.74"
          }, {
            "timeStamp": 1383424307695,
            "y0": "4.85",
            "y1": "-8.68",
            "y2": "-7.73",
            "y3": "6.99"
          }, {
            "timeStamp": 1384663925264,
            "y0": "4.88",
            "y1": "-9.04",
            "y2": "-7.57",
            "y3": "6.35"
          }, {
            "timeStamp": 1385903542833,
            "y0": "4.88",
            "y1": "-9.05",
            "y2": "-7.53",
            "y3": "7.05"
          }, {
            "timeStamp": 1387143160402,
            "y0": "4.51",
            "y1": "-8.69",
            "y2": "-7.05",
            "y3": "6.78"
          }, {
            "timeStamp": 1388382777971,
            "y0": "4.54",
            "y1": "-9.21",
            "y2": "-6.51",
            "y3": "7.13"
          }, {
            "timeStamp": 1389622395540,
            "y0": "4.50",
            "y1": "-9.37",
            "y2": "-6.42",
            "y3": "7.27"
          }, {
            "timeStamp": 1390862013109,
            "y0": "4.00",
            "y1": "-9.78",
            "y2": "-6.25",
            "y3": "7.53"
          }, {
            "timeStamp": 1392101630678,
            "y0": "4.15",
            "y1": "-9.78",
            "y2": "-6.09",
            "y3": "6.99"
          }, {
            "timeStamp": 1393341248247,
            "y0": "4.16",
            "y1": "-10.31",
            "y2": "-6.51",
            "y3": "7.21"
          }, {
            "timeStamp": 1394580865816,
            "y0": "3.53",
            "y1": "-10.54",
            "y2": "-6.35",
            "y3": "7.79"
          }, {
            "timeStamp": 1395820483385,
            "y0": "3.77",
            "y1": "-10.96",
            "y2": "-5.75",
            "y3": "7.66"
          }, {
            "timeStamp": 1397060100954,
            "y0": "3.86",
            "y1": "-11.12",
            "y2": "-5.80",
            "y3": "7.39"
          }, {
            "timeStamp": 1398299718523,
            "y0": "4.12",
            "y1": "-10.67",
            "y2": "-5.83",
            "y3": "7.73"
          }, {
            "timeStamp": 1399539336092,
            "y0": "3.55",
            "y1": "-10.27",
            "y2": "-5.78",
            "y3": "8.01"
          }, {
            "timeStamp": 1400778953661,
            "y0": "4.12",
            "y1": "-9.65",
            "y2": "-5.60",
            "y3": "7.41"
          }, {
            "timeStamp": 1402018571230,
            "y0": "4.35",
            "y1": "-8.95",
            "y2": "-5.73",
            "y3": "7.92"
          }, {
            "timeStamp": 1403258188799,
            "y0": "4.62",
            "y1": "-9.03",
            "y2": "-5.47",
            "y3": "8.01"
          }, {
            "timeStamp": 1404497806368,
            "y0": "4.99",
            "y1": "-8.85",
            "y2": "-5.35",
            "y3": "8.23"
          }, {
            "timeStamp": 1405737423937,
            "y0": "4.78",
            "y1": "-9.49",
            "y2": "-5.11",
            "y3": "8.41"
          }, {
            "timeStamp": 1406977041506,
            "y0": "4.99",
            "y1": "-9.52",
            "y2": "-4.89",
            "y3": "8.87"
          }, {
            "timeStamp": 1408216659075,
            "y0": "4.58",
            "y1": "-9.60",
            "y2": "-5.01",
            "y3": "9.06"
          }, {
            "timeStamp": 1409456276644,
            "y0": "4.48",
            "y1": "-9.68",
            "y2": "-4.72",
            "y3": "9.74"
          }, {
            "timeStamp": 1410695894213,
            "y0": "4.36",
            "y1": "-9.36",
            "y2": "-4.16",
            "y3": "10.12"
          }, {
            "timeStamp": 1411935511782,
            "y0": "4.19",
            "y1": "-8.74",
            "y2": "-3.54",
            "y3": "10.33"
          }, {
            "timeStamp": 1413175129351,
            "y0": "4.59",
            "y1": "-9.00",
            "y2": "-3.55",
            "y3": "9.72"
          }, {
            "timeStamp": 1414414746920,
            "y0": "4.26",
            "y1": "-8.70",
            "y2": "-2.94",
            "y3": "9.47"
          }, {
            "timeStamp": 1415654364489,
            "y0": "4.45",
            "y1": "-9.29",
            "y2": "-2.73",
            "y3": "9.63"
          }, {
            "timeStamp": 1416893982058,
            "y0": "3.94",
            "y1": "-8.84",
            "y2": "-3.21",
            "y3": "10.28"
          }, {
            "timeStamp": 1418133599627,
            "y0": "4.47",
            "y1": "-8.39",
            "y2": "-2.88",
            "y3": "9.97"
          }, {
            "timeStamp": 1419373217196,
            "y0": "5.05",
            "y1": "-8.18",
            "y2": "-3.14",
            "y3": "10.29"
          }, {
            "timeStamp": 1420612834765,
            "y0": "5.30",
            "y1": "-8.84",
            "y2": "-2.59",
            "y3": "10.06"
          }, {
            "timeStamp": 1421852452334,
            "y0": "4.63",
            "y1": "-9.09",
            "y2": "-2.82",
            "y3": "9.84"
          }, {
            "timeStamp": 1423092069903,
            "y0": "5.01",
            "y1": "-9.40",
            "y2": "-2.65",
            "y3": "9.24"
          }, {
            "timeStamp": 1424331687472,
            "y0": "4.58",
            "y1": "-9.83",
            "y2": "-3.09",
            "y3": "9.27"
          }, {
            "timeStamp": 1425571305041,
            "y0": "4.43",
            "y1": "-10.52",
            "y2": "-3.47",
            "y3": "9.87"
          }, {
            "timeStamp": 1426810922610,
            "y0": "5.02",
            "y1": "-10.76",
            "y2": "-3.17",
            "y3": "9.65"
          }, {
            "timeStamp": 1428050540179,
            "y0": "4.93",
            "y1": "-10.88",
            "y2": "-3.30",
            "y3": "10.13"
          }, {
            "timeStamp": 1429290157748,
            "y0": "4.69",
            "y1": "-11.57",
            "y2": "-3.46",
            "y3": "10.71"
          }, {
            "timeStamp": 1430529775317,
            "y0": "4.88",
            "y1": "-10.94",
            "y2": "-3.99",
            "y3": "10.17"
          }, {
            "timeStamp": 1431769392886,
            "y0": "4.99",
            "y1": "-10.35",
            "y2": "-3.69",
            "y3": "10.45"
          }, {
            "timeStamp": 1433009010455,
            "y0": "4.89",
            "y1": "-10.35",
            "y2": "-3.81",
            "y3": "9.99"
          }, {
            "timeStamp": 1434248628024,
            "y0": "5.22",
            "y1": "-10.75",
            "y2": "-4.35",
            "y3": "9.44"
          }, {
            "timeStamp": 1435488245593,
            "y0": "5.26",
            "y1": "-11.42",
            "y2": "-4.77",
            "y3": "9.07"
          }, {
            "timeStamp": 1436727863162,
            "y0": "4.90",
            "y1": "-10.79",
            "y2": "-4.69",
            "y3": "9.52"
          }, {
            "timeStamp": 1437967480731,
            "y0": "4.93",
            "y1": "-11.40",
            "y2": "-4.61",
            "y3": "9.66"
          }, {
            "timeStamp": 1439207098300,
            "y0": "4.56",
            "y1": "-11.54",
            "y2": "-4.11",
            "y3": "9.02"
          }, {
            "timeStamp": 1440446715869,
            "y0": "5.02",
            "y1": "-10.84",
            "y2": "-3.78",
            "y3": "9.53"
          }, {
            "timeStamp": 1441686333438,
            "y0": "5.11",
            "y1": "-11.17",
            "y2": "-3.87",
            "y3": "9.82"
          }, {
            "timeStamp": 1442925951007,
            "y0": "4.93",
            "y1": "-10.89",
            "y2": "-3.62",
            "y3": "10.04"
          }, {
            "timeStamp": 1444165568576,
            "y0": "5.63",
            "y1": "-10.67",
            "y2": "-4.31",
            "y3": "9.60"
          }, {
            "timeStamp": 1445405186145,
            "y0": "6.07",
            "y1": "-10.71",
            "y2": "-4.74",
            "y3": "10.09"
          }, {
            "timeStamp": 1446644803714,
            "y0": "5.49",
            "y1": "-11.40",
            "y2": "-5.20",
            "y3": "10.46"
          }, {
            "timeStamp": 1447884421283,
            "y0": "5.05",
            "y1": "-12.09",
            "y2": "-5.36",
            "y3": "10.02"
          }, {
            "timeStamp": 1449124038852,
            "y0": "4.56",
            "y1": "-11.76",
            "y2": "-4.98",
            "y3": "10.69"
          }, {
            "timeStamp": 1450363656421,
            "y0": "5.04",
            "y1": "-11.34",
            "y2": "-4.62",
            "y3": "10.20"
          }, {
            "timeStamp": 1451603273990,
            "y0": "4.92",
            "y1": "-11.29",
            "y2": "-5.03",
            "y3": "10.53"
          }, {
            "timeStamp": 1452842891559,
            "y0": "4.45",
            "y1": "-11.72",
            "y2": "-4.69",
            "y3": "9.97"
          }, {
            "timeStamp": 1454082509128,
            "y0": "4.22",
            "y1": "-11.15",
            "y2": "-4.25",
            "y3": "9.79"
          }, {
            "timeStamp": 1455322126697,
            "y0": "4.85",
            "y1": "-11.57",
            "y2": "-3.69",
            "y3": "10.19"
          }, {
            "timeStamp": 1456561744266,
            "y0": "5.43",
            "y1": "-11.35",
            "y2": "-4.12",
            "y3": "9.69"
          }, {
            "timeStamp": 1457801361835,
            "y0": "5.69",
            "y1": "-11.78",
            "y2": "-4.79",
            "y3": "9.72"
          }, {
            "timeStamp": 1459040979404,
            "y0": "5.45",
            "y1": "-11.95",
            "y2": "-4.58",
            "y3": "9.36"
          }, {
            "timeStamp": 1460280596973,
            "y0": "6.12",
            "y1": "-12.16",
            "y2": "-4.27",
            "y3": "9.61"
          }, {
            "timeStamp": 1461520214542,
            "y0": "6.13",
            "y1": "-11.60",
            "y2": "-3.62",
            "y3": "9.37"
          }, {
            "timeStamp": 1462759832111,
            "y0": "6.55",
            "y1": "-11.46",
            "y2": "-3.81",
            "y3": "9.31"
          }, {
            "timeStamp": 1463999449680,
            "y0": "6.91",
            "y1": "-11.97",
            "y2": "-4.44",
            "y3": "8.98"
          }, {
            "timeStamp": 1465239067249,
            "y0": "6.30",
            "y1": "-12.25",
            "y2": "-3.90",
            "y3": "9.65"
          }, {
            "timeStamp": 1466478684818,
            "y0": "6.96",
            "y1": "-12.21",
            "y2": "-4.56",
            "y3": "10.00"
          }, {
            "timeStamp": 1467718302387,
            "y0": "6.70",
            "y1": "-11.66",
            "y2": "-4.27",
            "y3": "9.53"
          }, {
            "timeStamp": 1468957919956,
            "y0": "6.52",
            "y1": "-11.68",
            "y2": "-4.30",
            "y3": "9.65"
          }, {
            "timeStamp": 1470197537525,
            "y0": "6.23",
            "y1": "-11.24",
            "y2": "-4.00",
            "y3": "9.62"
          }, {
            "timeStamp": 1471437155094,
            "y0": "6.87",
            "y1": "-10.91",
            "y2": "-3.74",
            "y3": "9.16"
          }, {
            "timeStamp": 1472676772663,
            "y0": "6.22",
            "y1": "-10.22",
            "y2": "-3.60",
            "y3": "9.35"
          }, {
            "timeStamp": 1473916390232,
            "y0": "6.91",
            "y1": "-10.28",
            "y2": "-4.22",
            "y3": "9.54"
          }, {
            "timeStamp": 1475156007801,
            "y0": "7.12",
            "y1": "-9.66",
            "y2": "-4.09",
            "y3": "9.19"
          }, {
            "timeStamp": 1476395625370,
            "y0": "7.18",
            "y1": "-9.75",
            "y2": "-4.06",
            "y3": "8.88"
          }, {
            "timeStamp": 1477635242939,
            "y0": "7.08",
            "y1": "-9.14",
            "y2": "-3.84",
            "y3": "8.35"
          }, {
            "timeStamp": 1478874860508,
            "y0": "6.96",
            "y1": "-9.02",
            "y2": "-3.29",
            "y3": "8.51"
          }, {
            "timeStamp": 1480114478077,
            "y0": "7.43",
            "y1": "-9.00",
            "y2": "-3.00",
            "y3": "8.52"
          }, {
            "timeStamp": 1481354095646,
            "y0": "7.53",
            "y1": "-8.86",
            "y2": "-2.96",
            "y3": "9.09"
          }, {
            "timeStamp": 1482593713215,
            "y0": "7.73",
            "y1": "-9.52",
            "y2": "-3.30",
            "y3": "8.71"
          }, {
            "timeStamp": 1483833330784,
            "y0": "7.21",
            "y1": "-10.15",
            "y2": "-3.02",
            "y3": "8.37"
          }, {
            "timeStamp": 1485072948353,
            "y0": "7.79",
            "y1": "-9.68",
            "y2": "-2.92",
            "y3": "8.89"
          }, {
            "timeStamp": 1486312565922,
            "y0": "7.14",
            "y1": "-9.73",
            "y2": "-2.35",
            "y3": "8.84"
          }, {
            "timeStamp": 1487552183491,
            "y0": "7.50",
            "y1": "-9.73",
            "y2": "-2.99",
            "y3": "8.49"
          }, {
            "timeStamp": 1488791801060,
            "y0": "7.43",
            "y1": "-10.11",
            "y2": "-2.44",
            "y3": "7.95"
          }, {
            "timeStamp": 1490031418629,
            "y0": "7.54",
            "y1": "-9.76",
            "y2": "-2.26",
            "y3": "8.01"
          }, {
            "timeStamp": 1491271036198,
            "y0": "7.38",
            "y1": "-9.80",
            "y2": "-2.21",
            "y3": "8.19"
          }, {
            "timeStamp": 1492510653767,
            "y0": "7.15",
            "y1": "-9.74",
            "y2": "-1.86",
            "y3": "8.83"
          }, {
            "timeStamp": 1493750271336,
            "y0": "7.44",
            "y1": "-9.92",
            "y2": "-2.45",
            "y3": "8.74"
          }, {
            "timeStamp": 1494989888905,
            "y0": "7.76",
            "y1": "-9.23",
            "y2": "-1.76",
            "y3": "8.69"
          }, {
            "timeStamp": 1496229506474,
            "y0": "7.22",
            "y1": "-8.69",
            "y2": "-1.34",
            "y3": "8.33"
          }, {
            "timeStamp": 1497469124043,
            "y0": "6.85",
            "y1": "-8.25",
            "y2": "-1.94",
            "y3": "7.99"
          }, {
            "timeStamp": 1498708741612,
            "y0": "6.41",
            "y1": "-8.03",
            "y2": "-2.30",
            "y3": "8.27"
          }, {
            "timeStamp": 1499948359181,
            "y0": "6.77",
            "y1": "-8.30",
            "y2": "-1.82",
            "y3": "7.64"
          }];
        }
      }
    },
    attached() {
      this.listen(document.querySelector('#cb'), 'selected-changed', 'updateValues');
    },
    detached() {
      this.unlisten(document.querySelector('#cb'), 'selected-changed');
    },
    updateValues() {
      var gauges = document.querySelectorAll('px-gauge');
      gauges.forEach(function(gauge) {
        gauge.set('value', Math.floor(Math.random() * 100));
      });
      var keyvalues = document.querySelectorAll('px-key-value-pair');
      keyvalues.forEach(function(keyvalue) {
        keyvalue.set('value', Math.floor(Math.random() * 100));
      });
    }
  });
})();
