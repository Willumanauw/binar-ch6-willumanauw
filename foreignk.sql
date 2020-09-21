--  Perintah untuk mengaitkan ketiga tabel melalui FOREIGN KEY
 
 ALTER TABLE "Payments" ADD FOREIGN KEY (idpeg) 
 REFERENCES "Pegawais"(id);

ALTER TABLE "Biodata" ADD FOREIGN KEY (idpeg) 
REFERENCES "Pegawais"(id);