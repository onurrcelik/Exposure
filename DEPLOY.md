# Deployment Guide

## Using Docker

### Build and run with Docker:

```bash
# Build the Docker image
docker build -t exposure-app .

# Run the container
docker run -p 3000:3000 exposure-app
```

### Or use Docker Compose (easier):

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

Your app will be available at `http://localhost:3000`

## Environment Variables

If you need to add environment variables, create a `.env.local` file and update `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_SUPABASE_URL=your_url
  - NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## Production Deployment

For production platforms like:

- **Vercel**: Simply connect your GitHub repo (recommended for Next.js)
- **Railway**: Use the Dockerfile automatically
- **Render**: Select "Docker" as deployment method
- **DigitalOcean**: Use App Platform with Dockerfile
- **AWS/GCP/Azure**: Use container services with the Dockerfile
