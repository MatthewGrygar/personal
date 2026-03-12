# Nastavení emailového formuláře (Resend — zdarma)

## 1. Registrace na Resend (2 min)
1. Jdi na https://resend.com a zaregistruj se zdarma
2. Free tier: **3 000 emailů/měsíc**, žádná kreditní karta

## 2. Získej API klíč
1. V Resend dashboardu → **API Keys** → **Create API Key**
2. Zkopíruj klíč (začíná `re_...`)

## 3. Přidej klíč na Vercel
1. Vercel Dashboard → tvůj projekt → **Settings** → **Environment Variables**
2. Přidej:
   - **Name:** `RESEND_API_KEY`
   - **Value:** tvůj klíč `re_...`
   - **Environment:** Production, Preview, Development
3. Klikni **Save**

## 4. Redeploy
Po přidání proměnné klikni **Deployments** → **Redeploy** (nebo pushnni commit).

## 5. Ověření domény (doporučeno)
- Bez ověřené domény odesílá Resend z `onboarding@resend.dev`
- S ověřenou doménou můžeš odesílat z `portfolio@tvoje-domena.cz`
- Nastavení: Resend → **Domains** → přidej doménu → přidej DNS záznamy

## Jak to funguje
Když někdo vyplní formulář → Resend odešle email na `matthew.grygar@seznam.cz`
s reply-to nastaveným na email odesílatele — stačí kliknout Odpovědět.
