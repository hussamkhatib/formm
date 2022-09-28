# Formm

## Running locally

Clone the repo

```bash
git clone https://github.com/hussamkhatib/formm.git
```

Go to the project directory

```bash
cd formm
```

Install packages with yarn

```bash
yarn
```

Create a .env file:

```
touch .env
```

update the contents of .env file

```bash
# .env
VITE_API_BASE_URL = "http://localhost:3001/api/";
```

Run frontend at `http://localhost:5173`

```bash
yarn dev
```

Make sure your backend is running as well.
If not follow the steps in [formm-server](https://github.com/hussamkhatib/formm-server)
