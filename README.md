# upload_s3
Upload de imagens no S3 da AWS com Node.js + MongoDB ou na maquina local
========================================================================

criar arquivo .env e .env-sample e colar o codigo abaixo

        # Se hospedar sua aplicação em algum lugar
        # coloque o host aqui:
        APP_URL=http://localhost:3000

        # s3: para produção
        # local: em desenvolvimento
        STORAGE_TYPE=local

        # Pode ser da sua máquina local ou Mongo Atlas
        MONGO_URL=mongodb://localhost:27017/upload

        # Pegue esses dados no site S3 AWS
        BUCKET_NAME=
        AWS_ACCESS_KEY_ID=
        AWS_SECRET_ACCESS_KEY=
        AWS_DEFAULT_REGION=

preencher com as informações do seu bucket do S3 e se vai rodar local ou no S3


Se você não tiver o MongoDB no seu Docker, crie um container usando esse comando:
docker run --name mongo -p 27017:27017 -d -t mongo


