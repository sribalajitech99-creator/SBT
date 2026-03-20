import PyPDF2

try:
    reader = PyPDF2.PdfReader("Assets/MANUFACTURER OF PRECISION MACHINED COMPONENTS FOR AUTOMOBILE AND GENERAL ENGINEERING INDUSTRIES (3) (1) (2).pdf")
    with open("pdf_text.txt", "w", encoding="utf-8") as f:
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                f.write(f"--- PAGE {i+1} ---\n{text}\n")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
