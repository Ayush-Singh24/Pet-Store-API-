Deployed URL: https://ayush-pet-store.onrender.com

## Prerequisite

- Create `.env` file in the root directory, a sample env is provided

## To run

- `yarn`
- `yarn start`

## Methods

- `GET "/all"`<br>&nbsp;&nbsp;Find all pets
- `POST "/"`<br>&nbsp;&nbsp;Adds new pet

```
{
    "nameOfOwner": "Ayush",
    "nameOfPet": "chintu",
    "age": 19,
    "type": "cat",
    "gender": "female"
}
```

- `PUT "/:id"`<br>&nbsp;&nbsp;Updates detail of a pet

```
{
    "nameOfOwner": "Atul",
    "nameOfPet": "pegasus",
    "age": 23,
    "type": "dog",
    "gender": "male"
}
```

- `GET "/:id"`<br>&nbsp;&nbsp; Finds a pet by ID

- `DELETE "/:id"`<br>&nbsp;&nbsp; Deletes a pet by ID
## Screenshots
- Postman<br>&nbsp;&nbsp;
![Screenshot 2023-03-23 172956](https://user-images.githubusercontent.com/128602813/227200039-73a20b64-1cef-4cea-8a55-5d2ce2272243.png)
![Screenshot 2023-03-23 173219](https://user-images.githubusercontent.com/128602813/227200050-4ff3f9c5-d3fd-4bb7-a610-e01a5c680cab.png)
![Screenshot 2023-03-23 173330](https://user-images.githubusercontent.com/128602813/227200054-0f544074-f198-41e0-93ae-3247db2ff5a7.png)
![Screenshot 2023-03-23 173451](https://user-images.githubusercontent.com/128602813/227200057-3a5bfc5f-0d32-49ff-8c16-1e42c4348162.png)
![Screenshot 2023-03-23 173527](https://user-images.githubusercontent.com/128602813/227200058-64c7e083-5071-403c-890a-2c73c2fff848.png)
- Code<br>&nbsp;&nbsp;
![Screenshot 2023-03-23 172210](https://user-images.githubusercontent.com/128602813/227201376-72a081ab-3ae7-465b-8839-7230c061a0f7.png)
![Screenshot 2023-03-23 172254](https://user-images.githubusercontent.com/128602813/227201397-c6cd511b-e7e4-4274-a504-6e9ff365a29d.png)
![Screenshot 2023-03-23 172342](https://user-images.githubusercontent.com/128602813/227201406-fa225939-6c04-400e-8b27-b6e901d0dcf6.png)
![Screenshot 2023-03-23 172420](https://user-images.githubusercontent.com/128602813/227201412-0bda9348-aabe-4362-92f1-899c7c855eeb.png)
![Screenshot 2023-03-23 172454](https://user-images.githubusercontent.com/128602813/227201414-348cc50d-f4ae-4959-a161-cbd6a8669474.png)

