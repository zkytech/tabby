
# Tabby

this project is forked from [TabbyML/tabby](https://github.com/TabbyML/tabby)

modified by [zkytech](https://github.com/zkytech/tabby)

## change in this fork

1. For users from china and those who want to deploy this project in offline environment: remove the code to download model from network, direct load from local.
2. Package model files into docker image.
3. Change entry point command to `/opt/tabby/bin/tabby serve --model TabbyML/${MODEL_NAME} --device cuda \$1`
4. GPU is required, no CPU support because of bad experience.

## simple usage example

### docker run

```bash
docker run -it --gpus all -p 8080:8080 --model zhangkunyuan/tabby:StarCoder-1B-latest --device cuda
```

### docker compose 

```yml
services:
  tabby:
    image: zhangkunyuan/tabby:StarCoder-1B-latest
    restart: always
    ports:
      - 8080:8080
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
```