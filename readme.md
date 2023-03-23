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
- Code<br>&nbsp;&nbsp;
![Screenshot 2023-03-23 172210](https://user-images.githubusercontent.com/128602813/227199742-ebbe9ded-0593-41a7-bee2-65569b6c07e2.png)
![Screenshot 2023-03-23 172254](https://user-images.githubusercontent.com/128602813/227199754-ba21f10a-eca6-45c2-aa80-f6c0582b20d4.png)
![Screenshot 2023-03-23 172342](https://user-images.githubusercontent.com/128602813/227199761-cec14946-3b30-4384-87d6-2e67bb9fb529.png)
![Screenshot 2023-03-23 172420](https://user-images.githubusercontent.com/128602813/227199763-4b077667-3ed8-4d5f-b9ef-e0238a2fb8e0.png)
![Screenshot 2023-03-23 172454](https://user-images.githubusercontent.com/128602813/227199767-4a008f60-becf-4450-8caf-1e501199b989.png)
- Postman<br>&nbsp;&nbsp;
![Screenshot 2023-03-23 172956](https://user-images.githubusercontent.com/128602813/227200039-73a20b64-1cef-4cea-8a55-5d2ce2272243.png)
![Screenshot 2023-03-23 173219](https://user-images.githubusercontent.com/128602813/227200050-4ff3f9c5-d3fd-4bb7-a610-e01a5c680cab.png)
![Screenshot 2023-03-23 173330](https://user-images.githubusercontent.com/128602813/227200054-0f544074-f198-41e0-93ae-3247db2ff5a7.png)
![Screenshot 2023-03-23 173451](https://user-images.githubusercontent.com/128602813/227200057-3a5bfc5f-0d32-49ff-8c16-1e42c4348162.png)
![Screenshot 2023-03-23 173527](https://user-images.githubusercontent.com/128602813/227200058-64c7e083-5071-403c-890a-2c73c2fff848.png)


