import pytesseract as pt
import re
import cv2
import json

filename = "med_report.jpg"
img = cv2.imread(filename)

text = pt.image_to_string(img, lang="eng")
ocr_keys = {'Hospital Name': ['Hospital Name'],
              'Hospital Address': ['Address', 'city', 'Hospital Address'],
              'Patient Name': ['Name', 'Patient_Name', 'Patient Name', 'patient name'],
              'Address': ['Patient Address', 'Address', 'Add'],
              'Age': ['Age', 'age'],
              'Sex': ['Sex', 'sex', 'gender', 'Gender', 'M/F', 'Male/Female'],
              'Doctor Name': ['Doctor Name', 'doctor name', 'doctor',
                              'Consultants', 'CONSULTANT', 'Consultant Name', 'Dr.', 'ref', 'ref by', 'reffered by'],
              'Date': ['Dated', 'Date', 'DOC', 'DOD', 'DOA'],
              'Diagnosis': ['Diagnosis', 'Final Diagnosis', 'Principal/Secondary Diagnosis'],
              'Treatment Given': ['Treatment Given', 'On Examination', 'Examination'],
              'Summary': ['Summary', 'Past Treatment Given'],
              'Blood Urea': ['Blood Urea', 'Urea in Blood'],
              'Serum Creatinine': ['serum creatinine', 'creatinine serum'],
              'Bile Pigment': ['bile pigment', 'pigment(bile)'],

              }

ocr_res = ocr_keys
ocr_res = ocr_res.fromkeys(ocr_res, '')
for key in ocr_keys.keys():  
    for similar_keys in ocr_keys[key]:  
        q = 0
        para = [similar_keys.lower()+r":(.*) ",similar_keys.lower()+r" : (.*) ",similar_keys.lower()
        +r": (.*)",similar_keys.lower()+r": (.*)",
             similar_keys.lower()+r"( *)\n(.*)", similar_keys.lower()+r" (.*)",
             similar_keys.lower()+r"\n\n(.*)", similar_keys.lower()+r": (.*)" ]  #tring to find string matches and its reponses this just written on basis of observing possibilities of ocr
        for target in para:
            
            match = re.search(target, text.lower())
            if match:
                result = match.group(1)
                q = 1
                ocr_res[key] = result
                break
            else:
                result = ""
        if q == 1:
            break


#result_dict will be stored as output.json

with open('output.json', 'w') as fp:
    json.dump(ocr_res, fp)
