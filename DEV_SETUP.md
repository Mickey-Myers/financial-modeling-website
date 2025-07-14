# Financial Modeling Hub - Development Setup

## ✅ Your website is now working!

The issue was that the Vite dev server middleware wasn't working properly. I've fixed it by separating the frontend and backend servers.

## 🚀 How to Run Your Website

### Option 1: Manual Setup (Recommended)

**Terminal 1 - Start API Server (Port 3001):**
```powershell
$env:DATABASE_URL="postgresql://neondb_owner:npg_I81URPQxdbZt@ep-jolly-term-addq8le6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
npm run dev
```

**Terminal 2 - Start Frontend Server (Port 3000):**
```powershell
npx vite
```

### Option 2: Quick Start (Single Command)
```powershell
# Start API server in background
Start-Job -ScriptBlock { 
    Set-Location $PWD
    $env:DATABASE_URL="postgresql://neondb_owner:npg_I81URPQxdbZt@ep-jolly-term-addq8le6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    npm run dev 
}

# Wait and start frontend
Start-Sleep -Seconds 5
npx vite
```

## 🌐 Access Your Website

- **Main Website**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin (password: `admin2024!`)
- **API Endpoints**: http://localhost:3001/api

## 🛑 To Stop Servers

**Stop background jobs:**
```powershell
Stop-Job *
Remove-Job *
```

**Or manually kill processes:**
```powershell
# Find and kill port 3000
taskkill /PID (netstat -ano | findstr :3000 | ForEach-Object { ($_ -split '\s+')[4] } | Select-Object -First 1) /F

# Find and kill port 3001  
taskkill /PID (netstat -ano | findstr :3001 | ForEach-Object { ($_ -split '\s+')[4] } | Select-Object -First 1) /F
```

## 📊 What's Working

- ✅ **Database**: Connected to Neon PostgreSQL (persistent storage)
- ✅ **API**: Running on port 3001 with CORS enabled
- ✅ **Frontend**: Running on port 3000 with API proxy
- ✅ **Contact Forms**: Submit and store in database
- ✅ **Admin Panel**: Password-protected dashboard
- ✅ **Email Notifications**: EmailJS integration

## 🔧 Technical Details

- **Backend**: Express.js on port 3001
- **Frontend**: Vite dev server on port 3000
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Proxy**: Frontend proxies `/api` calls to backend
- **CORS**: Enabled for development 