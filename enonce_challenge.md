# Challenge
## Application de météo

### Objectif : Créez une application de météo qui permet aux utilisateurs de rechercher la météo actuelle d'une ville donnée.
> Utilisez useState pour gérer les données de la ville, useEffect pour interroger une API météo en temps réel, et contextAPI pour partager les données de la météo entre les différents composants. Affichez la température, les conditions météorologiques, etc.

> L'aspect de l'application est à faire à votre convenance

>Accès à l'api

Récupérer les informations météo sur l'API [OpenWeather](https://openweathermap.org/api),
pour vous créer une clé d'api gratuite pour pouvoir appeler l'api.


Créer vous un compte si necessaire (si vous n'en avez pas)


Une fois connécté rendez-vous dans l'onglet `API Keys`

Saisissez un nom de clé qui sérvira à identifier la clé dans l'input puis cliquez sur `generate` afin d'obtenir votre clé d'api

Une fois ces étapes complétée, vous pourrez envoyer des requêtes en methode GET a l'url "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
en remplaçant {lat} par la latitude de la ville, {lon} par la longitude de la ville et {API key} par votre clé d'api

> La longitude et la latitude d'une ville sont disponibles via l'api de l'état avec l'url "https://api-adresse.data.gouv.fr/search/?q={nom de la ville}&type=municipality"