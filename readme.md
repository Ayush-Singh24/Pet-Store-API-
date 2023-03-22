Deployed URL: https://ayush-pet-store.onrender.com

## Prerequisite

- Create `.env` file in the root directory, a sample env is provided

## To run

- `yarn`
- `yarn start`

## Methods

- `GET "/all"`<br>&nbsp;&nbsp;Find all pets
- `PUSH "/"`<br>&nbsp;&nbsp;Adds new pet

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
