import DeviceType from './DeviceType';
import DeviceDTO from './DeviceDTO';

export const smartphonesListMock: DeviceDTO[] = [
  new DeviceDTO('1', DeviceType.SMARTPHONE, 'IPhone', '8', 3.5, 1999.99, 'https://f00.esfr.pl/foto/6/22317352681/c2e31451ef2cc510f59b8abd35fa1310/apple-iphone-8-plus-64gb-gwiezdna-szarosc,22317352681_7.jpg'),
  new DeviceDTO('2', DeviceType.SMARTPHONE, 'Samsung', 'Galaxy S10 Lite', 4.5, 999.99, 'https://f01.esfr.pl/foto/8/56618260361/8a399e8fd927ebed6427066a156da234/samsung-smartfon-galaxy-s10-lite-blue-samsung,56618260361_7.jpg', true),
  new DeviceDTO('3', DeviceType.SMARTPHONE, 'Xiaomi', 'Redmi 8', 5, 399.99, 'https://f00.esfr.pl/foto/9/52253892641/ac5b90ecc0d106b0b5be5223a807beec/xiaomi-smartfon-redmi-8a-2-32-blue-xiaomi,52253892641_7.jpg'),
  new DeviceDTO('4', DeviceType.SMARTPHONE, 'Alcatel', '1S 4/64GB 2019', 2.5, 49.99, 'https://www.euro.com.pl/foto/7/48154442449/9e7d42db4ba22483dc030c06fdc25404/alcatel-smartfon-alcatel-1s-64gb-niebieski,48154442449_7.jpg', true),
  new DeviceDTO('5', DeviceType.SMARTPHONE, 'OPPO', 'A9 2020', 4.1, 299.99, 'https://f01.esfr.pl/foto/8/51716509065/9a6461ed5e2efd7d94720c1403657aa5/oppo-smartfon-a9-green-oppo,51716509065_7.jpg'),
  new DeviceDTO('6', DeviceType.SMARTPHONE, 'Samsung', 'Galaxy S20', 4.9, 1799.99, 'https://f01.esfr.pl/foto/9/57246919673/e35ad31bdf046b5e2020f4cc5c59d3ba/samsung-smartfon-galaxy-s20ultra-5g-grey-samsung,57246919673_7.jpg')
];

export const tabletsListMock: DeviceDTO[] = [
  new DeviceDTO('7', DeviceType.TABLET, 'Huawei', 'MediaPad T3 10 32GB LTE', 4.9, 149.99, 'https://f01.esfr.pl/foto/4/52805494993/92d63dacc8e759867b637845b4e488ec/huawei-tablet-t3-10-2gb-32gb-lte,52805494993_7.jpg'),
  new DeviceDTO('8', DeviceType.TABLET, 'Lenovo', 'E8 8" 1GB/16GB WiFi', 3.8, 99.99, 'https://f01.esfr.pl/foto/1/41142693753/c9a1f65b4b82b9039fd114f35587b44d/lenovo-e8-8-1gb-16gb-wifi-czarny,41142693753_7.jpg', true),
  new DeviceDTO('9', DeviceType.TABLET, 'Apple', 'iPad mini 2019 Wi-Fi 64GB', 4.8, 499.99, 'https://f01.esfr.pl/foto/3/42495799633/5cf83b6e65d3c5d617e9c6161c1bb31/apple-apple-ipad-mini-wi-fi-64gb-gold-2019,42495799633_7.jpg'),
  new DeviceDTO('10', DeviceType.TABLET, 'Lenovo', 'TAB M10 10,1" 2GB/32GB LTE', 4.5, 199.99, 'https://f00.esfr.pl/foto/8/51913957353/2119fb06dc9faf08a8643ceb3fa30cc5/lenovo-tablet-m10-2gb-32gb-wifi-black-lte,51913957353_7.jpg'),
];

export const smartwatchesListMock: DeviceDTO[] = [
  new DeviceDTO('11', DeviceType.SMARTWATCH, 'Honor', 'Watch Magic 2 46mm', 5, 199.99, 'https://f00.esfr.pl/foto/1/58055691009/f4ee8c3f1a3ee8e132858244f095ed3d/honor-smartwatch-magic-watch-2-46mm-black-hono,58055691009_7.jpg'),
  new DeviceDTO('12', DeviceType.SMARTWATCH, 'Garmin', 'Vivomove HR', 4.8, 249.49, 'https://f00.esfr.pl/foto/8/22557478241/740b2f475f4de25b46121207de2b3f27/garmin-vivomove-hr-bialy,22557478241_7.jpg', true),
  new DeviceDTO('13', DeviceType.SMARTWATCH, 'Samsung', 'Galaxy Watch 46mm', 4.75, 299.99, 'https://f00.esfr.pl/foto/7/34732072721/df5a89ca5eb84b9f8cdc903ca07f2f89/samsung-galaxy-watch-46mm-silver-,34732072721_7.jpg'),
  new DeviceDTO('14', DeviceType.SMARTWATCH, 'Huawei', 'WATCH GT 2e', 3.5, 159.99, 'https://f01.esfr.pl/foto/9/60219071169/64da029c81997f51abb6ca0d184ee602/huawei-watch-gt-2e-czarny,60219071169_7.jpg'),
  new DeviceDTO('15', DeviceType.SMARTWATCH, 'Huawei', 'Watch GT Active', 4, 189.99, 'https://f00.esfr.pl/foto/8/42062413785/d679c9e2bcc222666a58a766fab853c4/huawei-smartwatch-watch-gt-active-green-huawei,42062413785_7.jpg', true)
];
