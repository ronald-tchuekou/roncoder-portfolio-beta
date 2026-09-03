# Resume PDFs

The resume is what the recruiter takes away, so it is the main exit point of the site. Two files live
here, one per locale:

- `ronald-tchuekou-resume-fr.pdf`
- `ronald-tchuekou-resume-en.pdf`

They are declared once, in `src/resources/data/resumes.ts`. Every download button on the site reads
that file, so nothing else needs touching when a PDF is replaced.

## Rules a replacement file must satisfy

1. **Two files, one per locale.** The button serves the file matching the visitor's locale, with the
   other version reachable from the background page.
2. **Explicit file name.** Keep the `ronald-tchuekou-resume-<locale>.pdf` shape. A file called
   `cv.pdf` gets lost in the recruiter's applications folder.
3. **Selectable text.** Applicant tracking systems cannot read a PDF exported as an image from
   Figma. Check before publishing:

   ```bash
   pdftotext public/resumes/ronald-tchuekou-resume-fr.pdf -
   ```

   With no poppler installed, macOS can do it through PDFKit:

   ```bash
   cat > /tmp/pdftxt.swift <<'SWIFT'
   import Foundation
   import PDFKit
   let path = CommandLine.arguments[1]
   guard let doc = PDFDocument(url: URL(fileURLWithPath: path)) else { exit(1) }
   print("PAGES:\(doc.pageCount)")
   print(doc.string ?? "")
   SWIFT
   swift /tmp/pdftxt.swift public/resumes/ronald-tchuekou-resume-fr.pdf
   ```

   If nothing readable comes out, do not put the file online.
4. **Strict consistency with the site.** Same job titles, same dates, same number of years as
   `src/resources/data/experiences.ts` and `educations.ts`. Any gap is a negative signal for a
   recruiter who reads both.

## After replacing a file

Update `pages` in `src/resources/data/resumes.ts` with the real page count reported by the command
above. It is displayed next to the button and is never guessed.
