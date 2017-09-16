angular.module('wheatherApp', ['simple-autocomplete']).controller('SampleCtrl', function($scope, $http) {
    $scope.selectedData = null;
    $scope.watherData = null;
    $scope.expression = false;
    $scope.searchbox = true;

    $scope.datas = [{
            "name": "Adana",
            "country": "TR"
        },
        {
            "name": "Adıyaman",
            "country": "TR"
        },
        {
            "name": "Afyonkarahisar",
            "country": "TR"
        },
        {
            "name": "Ağrı",
            "country": "TR"
        },
        {
            "name": "Amasya",
            "country": "TR"
        },
        {
            "name": "Ankara",
            "country": "TR"
        },
        {
            "name": "Antalya",
            "country": "TR"
        },
        {
            "name": "Artvin",
            "country": "TR"
        },
        {
            "name": "Aydın",
            "country": "TR"
        },
        {
            "name": "Balıkesir",
            "country": "TR"
        },
        {
            "name": "Bilecik",
            "country": "TR"
        },
        {
            "name": "Bingöl",
            "country": "TR"
        },
        {
            "name": "Bitlis",
            "country": "TR"
        },
        {
            "name": "Bolu",
            "country": "TR"
        },
        {
            "name": "Burdur",
            "country": "TR"
        },
        {
            "name": "Bursa",
            "country": "TR"
        },
        {
            "name": "Çanakkale",
            "country": "TR"
        },
        {
            "name": "Çankırı",
            "country": "TR"
        },
        {
            "name": "Çorum",
            "country": "TR"
        },
        {
            "name": "Denizli",
            "country": "TR"
        },
        {
            "name": "Diyarbakır",
            "country": "TR"
        },
        {
            "name": "Edirne",
            "country": "TR"
        },
        {
            "name": "Elazığ",
            "country": "TR"
        },
        {
            "name": "Erzincan",
            "country": "TR"
        },
        {
            "name": "Erzurum",
            "country": "TR"
        },
        {
            "name": "Eskişehir",
            "country": "TR"
        },
        {
            "name": "Gaziantep",
            "country": "TR"
        },
        {
            "name": "Giresun",
            "country": "TR"
        },
        {
            "name": "Gümüşhane",
            "country": "TR"
        },
        {
            "name": "Hakkâri",
            "country": "TR"
        },
        {
            "name": "Hatay",
            "country": "TR"
        },
        {
            "name": "Isparta",
            "country": "TR"
        },
        {
            "name": "Mersin",
            "country": "TR"
        },
        {
            "name": "Istanbul",
            "country": "TR"
        },
        {
            "name": "İzmir",
            "country": "TR"
        },
        {
            "name": "Kars",
            "country": "TR"
        },
        {
            "name": "Kastamonu",
            "country": "TR"
        },
        {
            "name": "Kayseri",
            "country": "TR"
        },
        {
            "name": "Kırklareli",
            "country": "TR"
        },
        {
            "name": "Kırşehir",
            "country": "TR"
        },
        {
            "name": "Kocaeli",
            "country": "TR"
        },
        {
            "name": "Konya",
            "country": "TR"
        },
        {
            "name": "Kütahya",
            "country": "TR"
        },
        {
            "name": "Malatya",
            "country": "TR"
        },
        {
            "name": "Manisa",
            "country": "TR"
        },
        {
            "name": "Kahramanmaraş",
            "country": "TR"
        },
        {
            "name": "Mardin",
            "country": "TR"
        },
        {
            "name": "Muğla",
            "country": "TR"
        },
        {
            "name": "Muş",
            "country": "TR"
        },
        {
            "name": "Nevşehir",
            "country": "TR"
        },
        {
            "name": "Niğde",
            "country": "TR"
        },
        {
            "name": "Ordu",
            "country": "TR"
        },
        {
            "name": "Rize",
            "country": "TR"
        },
        {
            "name": "Sakarya",
            "country": "TR"
        },
        {
            "name": "Samsun",
            "country": "TR"
        },
        {
            "name": "Siirt",
            "country": "TR"
        },
        {
            "name": "Sinop",
            "country": "TR"
        },
        {
            "name": "Sivas",
            "country": "TR"
        },
        {
            "name": "Tekirdağ",
            "country": "TR"
        },
        {
            "name": "Tokat",
            "country": "TR"
        },
        {
            "name": "Trabzon",
            "country": "TR"
        },
        {
            "name": "Tunceli",
            "country": "TR"
        },
        {
            "name": "Şanlıurfa",
            "country": "TR"
        },
        {
            "name": "Uşak",
            "country": "TR"
        },
        {
            "name": "Van",
            "country": "TR"
        },
        {
            "name": "Yozgat",
            "country": "TR"
        },
        {
            "name": "Zonguldak",
            "country": "TR"
        },
        {
            "name": "Aksaray",
            "country": "TR"
        },
        {
            "name": "Bayburt",
            "country": "TR"
        },
        {
            "name": "Karaman",
            "country": "TR"
        },
        {
            "name": "Kırıkkale",
            "country": "TR"
        },
        {
            "name": "Batman",
            "country": "TR"
        },
        {
            "name": "Şırnak",
            "country": "TR"
        },
        {
            "name": "Bartın",
            "country": "TR"
        },
        {
            "name": "Ardahan",
            "country": "TR"
        },
        {
            "name": "Iğdır",
            "country": "TR"
        },
        {
            "name": "Yalova",
            "country": "TR"
        },
        {
            "name": "Karabük",
            "country": "TR"
        },
        {
            "name": "Kilis",
            "country": "TR"
        },
        {
            "name": "Osmaniye",
            "country": "TR"
        },
        {
            "name": "Düzce",
            "country": "TR"
        }
    ]


    $scope.onSelect = function(selection) {
        console.log(selection);

        $scope.selectedData = selection;

    };
    $scope.getData = function() {

        if ($scope.selectedData == null) {
            alert('boş geçilemez');
        } else {

            $scope.date = new Date();
            $scope.expression = true;
            $scope.searchbox = false;
            $http.get("https://api.openweathermap.org/data/2.5/weather?q=" + $scope.selectedData.name + "&units=metric&appid=135eb98858064341ca62a6e690e2e367")
                .then(function(response) {
                    console.log(response);
                    console.log($scope.weatherData);
                    $scope.weatherData = response.data;
                    console.log($scope.weatherData);
                    $scope.icon = "http://openweathermap.org/img/w/" + $scope.weatherData.weather[0].icon + ".png";
                    console.log($scope.icon);
                });
        }
    }

    $scope.back = function() {

        $scope.$broadcast('simple-autocomplete:clearInput');
        $scope.expression = false;
        $scope.searchbox = true;
    };

})