# Install Dependencies

Create virtual environment linux/MacOs
```
pip install venv
python -m venv .venv
source .venv/bin/activate
```

Create virtual environment Windows
```
pip install venv
python -m venv .venv
source .venv/scripts/activate
```

Install requirements
```
pip install -r requirements.txt
```

Install frontend dependencies

```
cd frontend
npm install
```

# Development
Before run server, when you modified models. You need make migrations
```
python manage.py makemigrations
python manage.py migrate
```

Run backend
```
python manage.py runserver
```
Run frontend
```
npm run dev
```
