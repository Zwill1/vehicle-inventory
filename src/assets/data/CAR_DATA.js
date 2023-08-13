const CAR_DATA = [
{"id":1,"car_brand":"Cadillac","car_model":"XLR","car_year":2005,"car_price":"$766661.71"},
{"id":2,"car_brand":"Daewoo","car_model":"Leganza","car_year":1999,"car_price":"$932833.04"},
{"id":3,"car_brand":"Audi","car_model":"A3","car_year":2008,"car_price":"$434212.34"},
{"id":4,"car_brand":"Lincoln","car_model":"Continental Mark VII","car_year":1988,"car_price":"$947834.20"},
{"id":5,"car_brand":"Chevrolet","car_model":"Silverado 2500","car_year":2002,"car_price":"$575134.38"},
{"id":6,"car_brand":"Infiniti","car_model":"QX","car_year":2003,"car_price":"$384080.29"},
{"id":7,"car_brand":"BMW","car_model":"Alpina B7","car_year":2007,"car_price":"$138087.17"},
{"id":8,"car_brand":"Subaru","car_model":"Forester","car_year":2005,"car_price":"$202207.88"},
{"id":9,"car_brand":"Honda","car_model":"Civic","car_year":1998,"car_price":"$550599.95"},
{"id":10,"car_brand":"Chevrolet","car_model":"Impala SS","car_year":1995,"car_price":"$39072.27"},
{"id":11,"car_brand":"Volkswagen","car_model":"GTI","car_year":2001,"car_price":"$862094.37"},
{"id":12,"car_brand":"Cadillac","car_model":"STS","car_year":2008,"car_price":"$734046.58"},
{"id":13,"car_brand":"Bentley","car_model":"Continental","car_year":2006,"car_price":"$894246.54"},
{"id":14,"car_brand":"Pontiac","car_model":"Fiero","car_year":1985,"car_price":"$668559.93"},
{"id":15,"car_brand":"Chrysler","car_model":"Cirrus","car_year":1995,"car_price":"$968223.27"},
{"id":16,"car_brand":"Chevrolet","car_model":"Prizm","car_year":1999,"car_price":"$139302.73"},
{"id":17,"car_brand":"Pontiac","car_model":"Trans Sport","car_year":1995,"car_price":"$252520.87"},
{"id":18,"car_brand":"Buick","car_model":"Skylark","car_year":1991,"car_price":"$18130.68"},
{"id":19,"car_brand":"Suzuki","car_model":"Aerio","car_year":2005,"car_price":"$444319.98"},
{"id":20,"car_brand":"Mitsubishi","car_model":"Starion","car_year":1986,"car_price":"$497265.28"},
{"id":21,"car_brand":"Nissan","car_model":"Sentra","car_year":1991,"car_price":"$256015.25"},
{"id":22,"car_brand":"Chevrolet","car_model":"Express 1500","car_year":2005,"car_price":"$683191.29"},
{"id":23,"car_brand":"Acura","car_model":"RL","car_year":1999,"car_price":"$56075.33"},
{"id":24,"car_brand":"Volkswagen","car_model":"Golf","car_year":1986,"car_price":"$336447.41"},
{"id":25,"car_brand":"Dodge","car_model":"Intrepid","car_year":2000,"car_price":"$393576.35"},
{"id":26,"car_brand":"Dodge","car_model":"Stratus","car_year":1995,"car_price":"$381018.17"},
{"id":27,"car_brand":"Pontiac","car_model":"Grand Am","car_year":1999,"car_price":"$555796.30"},
{"id":28,"car_brand":"Chevrolet","car_model":"Suburban 1500","car_year":1998,"car_price":"$597836.99"},
{"id":29,"car_brand":"Lincoln","car_model":"MKX","car_year":2007,"car_price":"$48417.23"},
{"id":30,"car_brand":"Dodge","car_model":"Intrepid","car_year":1997,"car_price":"$726809.31"},
{"id":31,"car_brand":"Hyundai","car_model":"Tucson","car_year":2012,"car_price":"$482174.25"},
{"id":32,"car_brand":"Kia","car_model":"Forte","car_year":2010,"car_price":"$845159.90"},
{"id":33,"car_brand":"Cadillac","car_model":"Escalade EXT","car_year":2012,"car_price":"$218001.27"},
{"id":34,"car_brand":"Subaru","car_model":"Leone","car_year":1988,"car_price":"$626364.62"},
{"id":35,"car_brand":"Dodge","car_model":"Caliber","car_year":2010,"car_price":"$899449.80"},
{"id":36,"car_brand":"Mercedes-Benz","car_model":"G-Class","car_year":2004,"car_price":"$876958.18"},
{"id":37,"car_brand":"Mercury","car_model":"Sable","car_year":2004,"car_price":"$687071.72"},
{"id":38,"car_brand":"Ford","car_model":"Ranger","car_year":1990,"car_price":"$463577.29"},
{"id":39,"car_brand":"GMC","car_model":"1500 Club Coupe","car_year":1992,"car_price":"$936269.01"},
{"id":40,"car_brand":"Suzuki","car_model":"Daewoo Lacetti","car_year":2005,"car_price":"$552167.98"},
{"id":41,"car_brand":"Buick","car_model":"Regal","car_year":2000,"car_price":"$241124.88"},
{"id":42,"car_brand":"Mitsubishi","car_model":"Eclipse","car_year":2001,"car_price":"$559974.32"},
{"id":43,"car_brand":"Ford","car_model":"Expedition","car_year":2010,"car_price":"$761090.76"},
{"id":44,"car_brand":"Audi","car_model":"Q7","car_year":2008,"car_price":"$469836.65"},
{"id":45,"car_brand":"Toyota","car_model":"Tacoma","car_year":2011,"car_price":"$170030.21"},
{"id":46,"car_brand":"Subaru","car_model":"Impreza","car_year":2011,"car_price":"$5384.69"},
{"id":47,"car_brand":"Audi","car_model":"5000S","car_year":1987,"car_price":"$5903.62"},
{"id":48,"car_brand":"Dodge","car_model":"Stratus","car_year":2002,"car_price":"$446689.55"},
{"id":49,"car_brand":"Lincoln","car_model":"Town Car","car_year":2000,"car_price":"$782574.03"},
{"id":50,"car_brand":"Acura","car_model":"Integra","car_year":1995,"car_price":"$165921.60"},
{"id":51,"car_brand":"Ford","car_model":"Tempo","car_year":1987,"car_price":"$240000.33"},
{"id":52,"car_brand":"Chevrolet","car_model":"G-Series G30","car_year":1996,"car_price":"$253916.50"},
{"id":53,"car_brand":"Chevrolet","car_model":"Avalanche","car_year":2002,"car_price":"$457025.78"},
{"id":54,"car_brand":"Mercury","car_model":"Topaz","car_year":1988,"car_price":"$16932.57"},
{"id":55,"car_brand":"Mazda","car_model":"MX-5","car_year":1996,"car_price":"$433401.18"},
{"id":56,"car_brand":"Hyundai","car_model":"Veracruz","car_year":2007,"car_price":"$994119.19"},
{"id":57,"car_brand":"Mitsubishi","car_model":"Space","car_year":1984,"car_price":"$260077.48"},
{"id":58,"car_brand":"Acura","car_model":"NSX","car_year":1998,"car_price":"$691205.74"},
{"id":59,"car_brand":"Honda","car_model":"Accord Crosstour","car_year":2011,"car_price":"$763200.21"},
{"id":60,"car_brand":"Mitsubishi","car_model":"GTO","car_year":1995,"car_price":"$64095.18"},
{"id":61,"car_brand":"Kia","car_model":"Spectra","car_year":2003,"car_price":"$226130.61"},
{"id":62,"car_brand":"Mitsubishi","car_model":"Pajero","car_year":1997,"car_price":"$873697.52"},
{"id":63,"car_brand":"Ford","car_model":"Laser","car_year":1986,"car_price":"$950879.23"},
{"id":64,"car_brand":"Mercedes-Benz","car_model":"SL-Class","car_year":1994,"car_price":"$509710.29"},
{"id":65,"car_brand":"Chevrolet","car_model":"Venture","car_year":2002,"car_price":"$868020.49"},
{"id":66,"car_brand":"Acura","car_model":"NSX","car_year":1996,"car_price":"$773987.92"},
{"id":67,"car_brand":"Hummer","car_model":"H2","car_year":2004,"car_price":"$751562.17"},
{"id":68,"car_brand":"Mazda","car_model":"MX-5","car_year":2005,"car_price":"$285994.79"},
{"id":69,"car_brand":"Maybach","car_model":"57S","car_year":2005,"car_price":"$210153.27"},
{"id":70,"car_brand":"Pontiac","car_model":"G8","car_year":2009,"car_price":"$997250.29"},
{"id":71,"car_brand":"Mazda","car_model":"Mazdaspeed 3","car_year":2012,"car_price":"$24794.76"},
{"id":72,"car_brand":"Ford","car_model":"Mustang","car_year":1989,"car_price":"$856016.80"},
{"id":73,"car_brand":"Lexus","car_model":"HS","car_year":2012,"car_price":"$899475.19"},
{"id":74,"car_brand":"Pontiac","car_model":"Grand Prix","car_year":1968,"car_price":"$956227.80"},
{"id":75,"car_brand":"Audi","car_model":"riolet","car_year":1994,"car_price":"$889654.08"},
{"id":76,"car_brand":"Ford","car_model":"Escort","car_year":1999,"car_price":"$334029.45"},
{"id":77,"car_brand":"Chevrolet","car_model":"Tahoe","car_year":1997,"car_price":"$986119.88"},
{"id":78,"car_brand":"Volkswagen","car_model":"Fox","car_year":1991,"car_price":"$346019.58"},
{"id":79,"car_brand":"Infiniti","car_model":"I","car_year":2001,"car_price":"$387593.88"},
{"id":80,"car_brand":"Chevrolet","car_model":"Camaro","car_year":1974,"car_price":"$749118.77"},
{"id":81,"car_brand":"Volkswagen","car_model":"Jetta","car_year":2010,"car_price":"$638190.48"},
{"id":82,"car_brand":"Nissan","car_model":"Altima","car_year":2011,"car_price":"$484477.04"},
{"id":83,"car_brand":"Honda","car_model":"Odyssey","car_year":2001,"car_price":"$485883.79"},
{"id":84,"car_brand":"Toyota","car_model":"Land Cruiser","car_year":2009,"car_price":"$925092.30"},
{"id":85,"car_brand":"Porsche","car_model":"Boxster","car_year":2000,"car_price":"$447941.08"},
{"id":86,"car_brand":"GMC","car_model":"Envoy XL","car_year":2003,"car_price":"$576078.89"},
{"id":87,"car_brand":"Audi","car_model":"A6","car_year":2010,"car_price":"$788311.21"},
{"id":88,"car_brand":"Cadillac","car_model":"Catera","car_year":1998,"car_price":"$580899.89"},
{"id":89,"car_brand":"Ford","car_model":"F350","car_year":2007,"car_price":"$169580.22"},
{"id":90,"car_brand":"Jaguar","car_model":"X-Type","car_year":2006,"car_price":"$384410.20"},
{"id":91,"car_brand":"Ford","car_model":"Escort","car_year":1993,"car_price":"$504509.11"},
{"id":92,"car_brand":"Honda","car_model":"del Sol","car_year":1996,"car_price":"$175418.96"},
{"id":93,"car_brand":"Audi","car_model":"S5","car_year":2011,"car_price":"$492261.89"},
{"id":94,"car_brand":"GMC","car_model":"Sierra 2500","car_year":2004,"car_price":"$563519.59"},
{"id":95,"car_brand":"Nissan","car_model":"300ZX","car_year":1996,"car_price":"$656716.42"},
{"id":96,"car_brand":"Isuzu","car_model":"Oasis","car_year":1997,"car_price":"$570497.41"},
{"id":97,"car_brand":"Saturn","car_model":"Outlook","car_year":2009,"car_price":"$364446.53"},
{"id":98,"car_brand":"Fairthorpe","car_model":"Rockette","car_year":1960,"car_price":"$721112.47"},
{"id":99,"car_brand":"Ford","car_model":"Thunderbird","car_year":1984,"car_price":"$935974.22"},
{"id":100,"car_brand":"Ford","car_model":"Escape","car_year":2003,"car_price":"$963281.17"},
{"id":101,"car_brand":"Pontiac","car_model":"Grand Prix","car_year":1972,"car_price":"$719541.56"},
{"id":102,"car_brand":"BMW","car_model":"X3","car_year":2007,"car_price":"$479269.41"},
{"id":103,"car_brand":"Volvo","car_model":"S80","car_year":2005,"car_price":"$662584.53"},
{"id":104,"car_brand":"Ford","car_model":"E-Series","car_year":1989,"car_price":"$256136.37"},
{"id":105,"car_brand":"Chevrolet","car_model":"G-Series G10","car_year":1995,"car_price":"$282780.34"},
{"id":106,"car_brand":"Buick","car_model":"Rendezvous","car_year":2007,"car_price":"$578795.18"},
{"id":107,"car_brand":"Mazda","car_model":"929","car_year":1987,"car_price":"$215810.57"},
{"id":108,"car_brand":"Infiniti","car_model":"M","car_year":2010,"car_price":"$124305.56"},
{"id":109,"car_brand":"Honda","car_model":"S2000","car_year":2009,"car_price":"$715923.81"},
{"id":110,"car_brand":"Nissan","car_model":"GT-R","car_year":2010,"car_price":"$45918.48"},
{"id":111,"car_brand":"Buick","car_model":"Roadmaster","car_year":1993,"car_price":"$784755.94"},
{"id":112,"car_brand":"Toyota","car_model":"Paseo","car_year":1993,"car_price":"$317820.82"},
{"id":113,"car_brand":"Mercedes-Benz","car_model":"SL-Class","car_year":1993,"car_price":"$539692.02"},
{"id":114,"car_brand":"Toyota","car_model":"4Runner","car_year":1995,"car_price":"$809531.21"},
{"id":115,"car_brand":"Pontiac","car_model":"Bonneville","car_year":1994,"car_price":"$895387.81"},
{"id":116,"car_brand":"Subaru","car_model":"Brat","car_year":1987,"car_price":"$568436.39"},
{"id":117,"car_brand":"Chrysler","car_model":"Pacifica","car_year":2007,"car_price":"$683802.56"},
{"id":118,"car_brand":"Ford","car_model":"Ranger","car_year":1997,"car_price":"$329771.62"},
{"id":119,"car_brand":"Subaru","car_model":"Forester","car_year":2004,"car_price":"$381902.98"},
{"id":120,"car_brand":"GMC","car_model":"Safari","car_year":2004,"car_price":"$385780.17"},
{"id":121,"car_brand":"Ford","car_model":"Ranger","car_year":2004,"car_price":"$67479.56"},
{"id":122,"car_brand":"Chevrolet","car_model":"Express 3500","car_year":2002,"car_price":"$762008.24"},
{"id":123,"car_brand":"Saturn","car_model":"Ion","car_year":2003,"car_price":"$526313.68"},
{"id":124,"car_brand":"Land Rover","car_model":"LR3","car_year":2007,"car_price":"$839955.37"},
{"id":125,"car_brand":"Ford","car_model":"Five Hundred","car_year":2007,"car_price":"$837123.50"},
{"id":126,"car_brand":"BMW","car_model":"3 Series","car_year":1995,"car_price":"$450848.18"},
{"id":127,"car_brand":"Subaru","car_model":"Tribeca","car_year":2007,"car_price":"$947429.12"},
{"id":128,"car_brand":"Ford","car_model":"Escort","car_year":1991,"car_price":"$185722.07"},
{"id":129,"car_brand":"Jeep","car_model":"Grand Cherokee","car_year":1997,"car_price":"$665846.68"},
{"id":130,"car_brand":"BMW","car_model":"330","car_year":2005,"car_price":"$845059.24"},
{"id":131,"car_brand":"Subaru","car_model":"Impreza","car_year":2001,"car_price":"$626114.20"},
{"id":132,"car_brand":"Mercury","car_model":"Mountaineer","car_year":2008,"car_price":"$152292.80"},
{"id":133,"car_brand":"Cadillac","car_model":"CTS","car_year":2004,"car_price":"$154119.58"},
{"id":134,"car_brand":"Pontiac","car_model":"Grand Prix","car_year":1988,"car_price":"$786489.11"},
{"id":135,"car_brand":"Audi","car_model":"Coupe GT","car_year":1986,"car_price":"$908219.35"},
{"id":136,"car_brand":"Kia","car_model":"Optima","car_year":2002,"car_price":"$805919.25"},
{"id":137,"car_brand":"Dodge","car_model":"Ram 1500 Club","car_year":2001,"car_price":"$674585.89"},
{"id":138,"car_brand":"Pontiac","car_model":"Sunfire","car_year":1997,"car_price":"$683844.63"},
{"id":139,"car_brand":"Mazda","car_model":"MX-5","car_year":2009,"car_price":"$172889.66"},
{"id":140,"car_brand":"Ford","car_model":"Excursion","car_year":2005,"car_price":"$457179.76"},
{"id":141,"car_brand":"GMC","car_model":"Sierra Hybrid","car_year":2006,"car_price":"$356220.34"},
{"id":142,"car_brand":"Suzuki","car_model":"Reno","car_year":2007,"car_price":"$57882.94"},
{"id":143,"car_brand":"Plymouth","car_model":"Neon","car_year":2000,"car_price":"$112772.19"},
{"id":144,"car_brand":"Ford","car_model":"Thunderbird","car_year":1995,"car_price":"$596344.49"},
{"id":145,"car_brand":"Hummer","car_model":"H3","car_year":2006,"car_price":"$834153.98"},
{"id":146,"car_brand":"GMC","car_model":"Sierra 2500","car_year":2002,"car_price":"$296970.78"},
{"id":147,"car_brand":"GMC","car_model":"Sonoma Club","car_year":1992,"car_price":"$190305.76"},
{"id":148,"car_brand":"Dodge","car_model":"Ram 1500 Club","car_year":2001,"car_price":"$291873.64"},
{"id":149,"car_brand":"Mitsubishi","car_model":"Eclipse","car_year":2010,"car_price":"$757304.70"},
{"id":150,"car_brand":"Audi","car_model":"200","car_year":1991,"car_price":"$269244.53"},
{"id":151,"car_brand":"Audi","car_model":"100","car_year":1992,"car_price":"$954243.26"},
{"id":152,"car_brand":"Bugatti","car_model":"Veyron","car_year":2009,"car_price":"$709890.31"},
{"id":153,"car_brand":"Honda","car_model":"Prelude","car_year":1993,"car_price":"$289396.61"},
{"id":154,"car_brand":"Porsche","car_model":"928","car_year":1994,"car_price":"$538086.94"},
{"id":155,"car_brand":"Infiniti","car_model":"FX","car_year":2005,"car_price":"$54368.62"},
{"id":156,"car_brand":"Ford","car_model":"Thunderbird","car_year":1965,"car_price":"$461168.78"},
{"id":157,"car_brand":"Audi","car_model":"5000S","car_year":1985,"car_price":"$757833.24"},
{"id":158,"car_brand":"Jaguar","car_model":"XJ Series","car_year":1997,"car_price":"$522608.08"},
{"id":159,"car_brand":"Nissan","car_model":"Armada","car_year":2012,"car_price":"$575074.09"},
{"id":160,"car_brand":"Oldsmobile","car_model":"88","car_year":1996,"car_price":"$783207.55"},
{"id":161,"car_brand":"GMC","car_model":"Terrain","car_year":2012,"car_price":"$838102.08"},
{"id":162,"car_brand":"Suzuki","car_model":"SX4","car_year":2010,"car_price":"$904189.30"},
{"id":163,"car_brand":"Porsche","car_model":"Cayman","car_year":2011,"car_price":"$667953.03"},
{"id":164,"car_brand":"Toyota","car_model":"Land Cruiser","car_year":1999,"car_price":"$523661.30"},
{"id":165,"car_brand":"Mercury","car_model":"Mystique","car_year":1996,"car_price":"$36067.07"},
{"id":166,"car_brand":"GMC","car_model":"Acadia","car_year":2012,"car_price":"$921297.72"},
{"id":167,"car_brand":"Pontiac","car_model":"LeMans","car_year":1968,"car_price":"$292507.84"},
{"id":168,"car_brand":"Chrysler","car_model":"Concorde","car_year":1996,"car_price":"$687560.04"},
{"id":169,"car_brand":"Mazda","car_model":"RX-7","car_year":1983,"car_price":"$733883.77"},
{"id":170,"car_brand":"Audi","car_model":"Q7","car_year":2009,"car_price":"$392552.46"},
{"id":171,"car_brand":"Cadillac","car_model":"DeVille","car_year":1996,"car_price":"$347338.07"},
{"id":172,"car_brand":"Mercedes-Benz","car_model":"E-Class","car_year":1997,"car_price":"$644150.98"},
{"id":173,"car_brand":"Toyota","car_model":"Highlander","car_year":2002,"car_price":"$482151.97"},
{"id":174,"car_brand":"BMW","car_model":"3 Series","car_year":2007,"car_price":"$942222.98"},
{"id":175,"car_brand":"Mitsubishi","car_model":"Mirage","car_year":1996,"car_price":"$262125.07"},
{"id":176,"car_brand":"Ford","car_model":"Bronco","car_year":1984,"car_price":"$232517.99"},
{"id":177,"car_brand":"Mazda","car_model":"626","car_year":1996,"car_price":"$851753.32"},
{"id":178,"car_brand":"Mitsubishi","car_model":"Challenger","car_year":2000,"car_price":"$772809.47"},
{"id":179,"car_brand":"Volkswagen","car_model":"Rabbit","car_year":2009,"car_price":"$425022.58"},
{"id":180,"car_brand":"GMC","car_model":"Savana 2500","car_year":1997,"car_price":"$428125.92"},
{"id":181,"car_brand":"Mercedes-Benz","car_model":"G-Class","car_year":2010,"car_price":"$332672.77"},
{"id":182,"car_brand":"Honda","car_model":"Civic","car_year":1989,"car_price":"$42236.19"},
{"id":183,"car_brand":"Panoz","car_model":"Esperante","car_year":2007,"car_price":"$360864.61"},
{"id":184,"car_brand":"Jaguar","car_model":"XK Series","car_year":2013,"car_price":"$866937.05"},
{"id":185,"car_brand":"Dodge","car_model":"Ram Wagon B150","car_year":1993,"car_price":"$150552.48"},
{"id":186,"car_brand":"Dodge","car_model":"Ram 2500","car_year":2010,"car_price":"$397992.34"},
{"id":187,"car_brand":"Nissan","car_model":"Titan","car_year":2009,"car_price":"$541422.27"},
{"id":188,"car_brand":"GMC","car_model":"Savana 3500","car_year":2010,"car_price":"$127348.18"},
{"id":189,"car_brand":"BMW","car_model":"Alpina B7","car_year":2007,"car_price":"$734270.90"},
{"id":190,"car_brand":"Mazda","car_model":"626","car_year":2002,"car_price":"$906741.50"},
{"id":191,"car_brand":"Plymouth","car_model":"Laser","car_year":1989,"car_price":"$115281.92"},
{"id":192,"car_brand":"Ford","car_model":"Festiva","car_year":1990,"car_price":"$820720.25"},
{"id":193,"car_brand":"Dodge","car_model":"Ram","car_year":1994,"car_price":"$209987.55"},
{"id":194,"car_brand":"Mitsubishi","car_model":"Challenger","car_year":1998,"car_price":"$626624.30"},
{"id":195,"car_brand":"Infiniti","car_model":"QX","car_year":2010,"car_price":"$537167.62"},
{"id":196,"car_brand":"Smart","car_model":"Fortwo","car_year":2010,"car_price":"$864634.83"},
{"id":197,"car_brand":"Mazda","car_model":"626","car_year":1996,"car_price":"$6859.76"},
{"id":198,"car_brand":"Dodge","car_model":"Ram 2500 Club","car_year":1997,"car_price":"$953603.40"},
{"id":199,"car_brand":"Dodge","car_model":"Caliber","car_year":2009,"car_price":"$126619.85"},
{"id":200,"car_brand":"Chevrolet","car_model":"Impala","car_year":2000,"car_price":"$762203.37"},
{"id":201,"car_brand":"Ford","car_model":"Focus","car_year":2001,"car_price":"$847832.35"},
{"id":202,"car_brand":"Lexus","car_model":"LX","car_year":2009,"car_price":"$386620.48"},
{"id":203,"car_brand":"Audi","car_model":"RS6","car_year":2003,"car_price":"$797420.90"},
{"id":204,"car_brand":"Dodge","car_model":"Ram Wagon B150","car_year":1994,"car_price":"$299785.76"},
{"id":205,"car_brand":"Honda","car_model":"CR-V","car_year":2010,"car_price":"$227198.54"},
{"id":206,"car_brand":"Nissan","car_model":"Versa","car_year":2012,"car_price":"$136033.27"},
{"id":207,"car_brand":"Dodge","car_model":"Viper","car_year":2009,"car_price":"$378407.76"},
{"id":208,"car_brand":"Mazda","car_model":"Miata MX-5","car_year":2007,"car_price":"$481491.50"},
{"id":209,"car_brand":"Porsche","car_model":"Carrera GT","car_year":2005,"car_price":"$5883.34"},
{"id":210,"car_brand":"Volvo","car_model":"XC70","car_year":2012,"car_price":"$157361.28"},
{"id":211,"car_brand":"Kia","car_model":"Sephia","car_year":1996,"car_price":"$214795.18"},
{"id":212,"car_brand":"BMW","car_model":"3 Series","car_year":1999,"car_price":"$539932.84"},
{"id":213,"car_brand":"BMW","car_model":"3 Series","car_year":1993,"car_price":"$712622.47"},
{"id":214,"car_brand":"Acura","car_model":"Integra","car_year":1992,"car_price":"$953449.54"},
{"id":215,"car_brand":"BMW","car_model":"8 Series","car_year":1993,"car_price":"$336140.00"},
{"id":216,"car_brand":"Acura","car_model":"Integra","car_year":1999,"car_price":"$778174.46"},
{"id":217,"car_brand":"Toyota","car_model":"Sienna","car_year":2002,"car_price":"$711519.68"},
{"id":218,"car_brand":"BMW","car_model":"X5","car_year":2010,"car_price":"$868112.65"},
{"id":219,"car_brand":"Spyker","car_model":"C8 Double 12 S","car_year":2006,"car_price":"$581900.23"},
{"id":220,"car_brand":"GMC","car_model":"Safari","car_year":2001,"car_price":"$975380.28"},
{"id":221,"car_brand":"Mercedes-Benz","car_model":"M-Class","car_year":1998,"car_price":"$44299.93"},
{"id":222,"car_brand":"Infiniti","car_model":"Q","car_year":1995,"car_price":"$532393.42"},
{"id":223,"car_brand":"Mazda","car_model":"626","car_year":1990,"car_price":"$745874.96"},
{"id":224,"car_brand":"Bentley","car_model":"Brooklands","car_year":2010,"car_price":"$467647.60"},
{"id":225,"car_brand":"Mercedes-Benz","car_model":"500SEL","car_year":1993,"car_price":"$979155.11"},
{"id":226,"car_brand":"Infiniti","car_model":"EX","car_year":2011,"car_price":"$563345.85"},
{"id":227,"car_brand":"Infiniti","car_model":"Q","car_year":1998,"car_price":"$714923.08"},
{"id":228,"car_brand":"Dodge","car_model":"Caravan","car_year":2010,"car_price":"$396467.73"},
{"id":229,"car_brand":"BMW","car_model":"M6","car_year":2006,"car_price":"$504178.92"},
{"id":230,"car_brand":"Ford","car_model":"E-Series","car_year":1986,"car_price":"$627025.43"},
{"id":231,"car_brand":"Mazda","car_model":"Miata MX-5","car_year":1997,"car_price":"$973467.54"},
{"id":232,"car_brand":"Dodge","car_model":"Ram 1500","car_year":1997,"car_price":"$818761.72"},
{"id":233,"car_brand":"Land Rover","car_model":"Range Rover Sport","car_year":2011,"car_price":"$702031.42"},
{"id":234,"car_brand":"Bentley","car_model":"Arnage","car_year":2007,"car_price":"$66315.33"},
{"id":235,"car_brand":"Mercury","car_model":"Monterey","car_year":2005,"car_price":"$590157.43"},
{"id":236,"car_brand":"Mazda","car_model":"Mazda5","car_year":2009,"car_price":"$647803.06"},
{"id":237,"car_brand":"Ford","car_model":"Mustang","car_year":2003,"car_price":"$45667.70"},
{"id":238,"car_brand":"GMC","car_model":"Savana 2500","car_year":2003,"car_price":"$884638.38"},
{"id":239,"car_brand":"Mercedes-Benz","car_model":"G-Class","car_year":2012,"car_price":"$500537.84"},
{"id":240,"car_brand":"Mitsubishi","car_model":"Montero Sport","car_year":2003,"car_price":"$430981.95"},
{"id":241,"car_brand":"Chrysler","car_model":"Town & Country","car_year":2007,"car_price":"$41499.76"},
{"id":242,"car_brand":"Mercedes-Benz","car_model":"SLS AMG","car_year":2012,"car_price":"$105855.94"},
{"id":243,"car_brand":"Toyota","car_model":"Camry","car_year":1996,"car_price":"$104687.47"},
{"id":244,"car_brand":"BMW","car_model":"3 Series","car_year":2008,"car_price":"$491985.54"},
{"id":245,"car_brand":"Mercury","car_model":"Sable","car_year":1991,"car_price":"$145670.50"},
{"id":246,"car_brand":"Dodge","car_model":"D350","car_year":1992,"car_price":"$346628.19"},
{"id":247,"car_brand":"Suzuki","car_model":"Vitara","car_year":2003,"car_price":"$606880.10"},
{"id":248,"car_brand":"Toyota","car_model":"Prius","car_year":2008,"car_price":"$284751.50"},
{"id":249,"car_brand":"Aston Martin","car_model":"Vantage","car_year":2011,"car_price":"$97272.36"},
{"id":250,"car_brand":"Mazda","car_model":"Mazda6","car_year":2005,"car_price":"$500150.36"}]

export default CAR_DATA