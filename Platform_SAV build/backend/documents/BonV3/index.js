module.exports = ({ Nom, Prenom, Email, Telephone, 
    ReferanceProduit, TypePanne, Wilaya, 
    CentreDepot, DateDepot, BonID }) => {
     const today = new Date();
 return `
 <!doctype html>
 <html>
 <head>
      <meta http-equiv="cache-control" content="no-cache">
      <meta http-equiv="Pragma" content="no-cache">
      <meta http-equiv="Expires" content="-1">
      <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
      <style>
      @font-face {
         font-family: Poppins;
     }
     *{
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         font-family: "Poppins", sans-serif;
         outline: none;
         border: none;
         text-decoration: none;
         color: #060e30;
         letter-spacing: 0.5%;
     }
     .container {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center; 
         align-content: center;
         align-self: center;
         padding-top: 10px;
     }
     .top-bar{
         width: 100%;
         display: flex;
         flex-direction: row;
         align-items: center;
         margin-bottom: 10px;
     }
     .top-bar-left{
         width: 80%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: center;
     }
     .top-bar-left-title{
         position: absolute;
         align-items: center;
         align-self: center;
         padding-inline-start: 200px;
         margin-top: 50px;
     }
     .title{
         font-size: 18px;
         color: black;
         text-align: center;
     }
     .top-bar-img{
         width: 100%;
         display: flex;
         justify-content: flex-start;
         align-items: center;
     }
     .top-bar-right{
         width: 20%;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 5px;
         margin-top: 20px;
     }
     .top-bar-right h4{
         font-size: 8px;
         font-weight: 600;
     }
     .top-bar-right h5{
         font-size: 10px;
         font-weight: 700;
     }
     .top-bar-right-line{
         width: 60%;
         height: 1px;
         background-color: #0d68af;
     }
     
     .Line1{
         width: 100%;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         padding-left: 40px;
         padding-right: 40px;
         padding-top: 10px;
         font-size: 8px;
         color: black;
     }
     .line2{
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center; 
         padding-left: 40px;
         padding-right: 40px;
         padding-top: 10px;
         padding-bottom: 15px;
         font-size: 8px;
         color: black;
         gap: 5px;
     }
     .subline2{
         display: flex;
         flex-direction: column;
         align-items: center; 
     }
     .informations {
         width: 100%;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
     }
     .informations-result {
         display: flex;
         flex-direction: column;
         align-items: center;
     }
     .informations-result-text{
         color: rgb(0, 43, 152);
     }
     .informations-result h3 {
         height: 1px; 
     }
     .subinformations{
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         margin-bottom: 5px;
     }
     .line3{
         width: 100%;
         display: flex;
         flex-direction: row;
         align-items: center; 
         justify-content: space-between;
         padding-left: 40px;
         padding-right: 40px;
         font-size: 8px;
         color: black;
     }
     .line3-line1-title{
         font-size: 8px;
         margin-inline-end: 10px;
     }
     .line3-line1-subtitle{
         display: flex;
         flex-direction: row;
         align-items: center; 
     }
     .line3-line1-subtitle table{
         border-collapse: collapse;
         color: black;
         margin-inline-start: 10px;
     }
     .line3-line1-subtitle th{
         border: 1px solid black; 
         padding: 5px;
     }
     .line4{
         display: flex;
         flex-direction: row;
         align-items: center; 
         padding-left: 40px;
         padding-right: 40px;
     }
     .line4-line1{
         display: flex;
         flex-direction: column;
         align-items: center; 
         padding-left: 40px;
         padding-right: 40px;
     }
     .line4-line2{
         width: 100%;
         display: flex;
         flex-direction: row;
         align-items: center; 
         font-size: 8px;
         color: black;
         margin-bottom: 10px;
     }
     .line4-line2 table{
         border-collapse: collapse;
         color: black;
         margin-inline-start: 10px;
     }
     .line4-line2 th{
         border: 1px solid black; 
         padding: 5px;
     }
     .line5{
         display: flex;
         flex-direction: column;
         align-items: flex-end;
         align-self: flex-end;
         text-align: end;
         padding-inline-end: 40px;
         padding-inline-start: 40px;
         font-size: 8px;
         font-weight: 600;
     }
     .line5 h4{
         font-size: 12px;
     }
     .line6{
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         align-self: flex-start;
         text-align: start;
         padding-inline-end: 30px;
         padding-inline-start: 40px;
         padding-bottom: 10px;
         font-size: 8px;
         font-weight: 600;
     }
     .line6 h4{
         font-size: 10px;
     }
     .line6 p{
         padding-inline-start: 20px;
     }
     .line7{
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         align-self: flex-start;
         text-align: start;
         padding-inline-end: 30px;
         padding-inline-start: 40px;
         padding-bottom: 10px;
         font-size: 8px;
         font-weight: 500;
     }
     .line7 h4{
         font-size: 12px;
         align-items: flex-end;
         align-self: flex-end;
         text-align: end;
     }
     .line7 p{
         padding-inline-start: 20px;
         font-weight: 500;
     }
     .line8{
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         align-self: flex-start;
         text-align: start;
         padding-bottom: 10px;
         font-size: 10px;
         font-weight: 700;
         padding-inline-start: 20px;
     }
     .line9{
         width: 100%;
         padding-inline-start: 40px;
         padding-inline-end: 90px;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         text-align: start;
     }
     .line9 table{
         border-collapse: collapse;
         color: black;
     }
     .line9 th:nth-child(2){
         width: 200px;
     }
     .line9 th{
         border: 1px solid black; 
         padding: 5px;
         font-size: 8px;
     }
     .QRcode{
         display: flex;
         flex-direction: column;
         align-items: center;
         align-self: center;
         align-content: center;
         margin-bottom: 5px;
     }
     .line10{
         width: 100%;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         padding-inline-start: 50px;
         padding-inline-end: 50px;
         margin-bottom: 70px;
         font-size: 10px;
         font-weight: 600;
         color: black;
     }
     .line11{
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       padding-inline-end: 40px;
       padding-inline-start: 40px;
     }
     .line11-line1{
       width: 100%;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
     }
     .line11-line1 h4{
       font-size: 12px;
     }
     .line11-line2{
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-between;
       padding-inline-start: 20px;
     }
     .line11-line2 h4{
       font-size: 10px;
       font-weight: 600;
     }
     .bottom-bar-img{
         width: 90%;
         align-items: center;
         justify-content: center;
     }
      </style>     
 </head>
 <body>
      <div class="container">
          <div class="top-bar">
              <div class="top-bar-left">
                  <img class="top-bar-img" src="/images/topPDF.png" alt="Logo-Stream-System" />
                  <div class="top-bar-left-title">
                      <h4 class="title">
                          BON DE DÉPÔT
                      </h4>
                      <h4 class="title">
                          وصل الإيداع
                      </h4>
                  </div>
              </div>
              <div class="top-bar-right">
                  <h4>Réf : FOR-SAV-24-03</h4>
                  <div class="top-bar-right-line"></div>
                  <h4>Date d’application</h4>
                  <h4>${new Date().toISOString().slice(0, 10)}</h4>
                  <div class="top-bar-right-line"></div>
                  <h5>Page 1 sur 1</h5>
              </div>
          </div>
         <div class="Line1">
              <h3>
                  SAV ${CentreDepot}
              </h3>
               <h3>
                  Ref: ${BonID}
               </h3>
         </div>
         <div class="line2">
            <div class="informations">
               <h3 class="text-left">
                  Date de depot
               </h3>
               <div class="informations-result">
                  <h3 class="informations-result-text">${DateDepot}</h3>
                  <h3 class="text-center">
                  : ........................................................................................................................................................................... :
                  </h3>
               </div>
               <h3 class="text-right">
                  تاريخ الإيداع
               </h3>
            </div>
            <div class="informations">
               <h3 class="title-left">
                  SAV
               </h3>
               <div class="informations-result">
                  <h3 class="informations-result-text">${CentreDepot}</h3>
                  <h3 class="title-center">
                  : ................................................................................................................................................................................... :
                  </h3>
               </div>
               <h3 class="title-right">
                  مركز خدمة ما بعد البيع
               </h3>
            </div>
            <div class="informations">
               <h3 class="title-left">
                  ID client
               </h3>
               <div class="informations-result">
                  <h3 class="informations-result-text">${Email}</h3>
                  <h3 class="title-center">
                  : ....................................................................................................................................................................................... :
                  </h3>
               </div>
               <h3 class="title-right">
                  رمز الزبون
               </h3>
            </div>
            <div class="informations">
               <h3 class="text-left">
                  Nom et prenom
               </h3>
               <div class="informations-result">
                  <h3 class="informations-result-text">${Nom}${' '}${Prenom}</h3>
                  <h3 class="text-center">
                  : ....................................................................................................................................................................... :
                  </h3>
               </div>    
               <h3 class="text-right">
                  الاسم واللقب
               </h3>
            </div>
            <div class="informations">
               <h3 class="title-left">
                  N° Tel
               </h3>
               <div class="informations-result">
                  <h3 class="informations-result-text">${Telephone}</h3>
                  <h3 class="title-center">
                  : ............................................................................................................................................................................................. :
                  </h3>
               </div>
               <h3 class="title-right">
                  رقم الهاتف
               </h3>
            </div>
            <div class="informations">
              <h3 class="title-left">
                  Produit
              </h3>
              <div class="informations-result">
                 <h3 class="informations-result-text">${ReferanceProduit}</h3>
                 <h3 class="title-center">
                 : ............................................................................................................................................................................................. :
                 </h3>
              </div>
              <h3 class="title-right">
                  المنتوج
              </h3>
           </div>
           <div class="informations">
              <h3 class="title-left">
                  N° série
              </h3>
              <div class="informations-result">
                 <h3 class="informations-result-text">${ReferanceProduit}</h3>
                 <h3 class="title-center">
                 : ............................................................................................................................................................................................. :
                 </h3>
              </div>
              <h3 class="title-right">
                  الرقم التسلسلي
              </h3>
           </div>
            <div class="informations">
               <h3 class="title-left">
                  Historique du produit
               </h3>
               <div class="informations-result">
                  <h3 class="informations-result-text">${TypePanne}</h3>
                  <h3 class="title-center">
                  : ........................................................................................................................................................... :
                  </h3>
               </div>
               <h3 class="title-right">
                  الاصلاح السابق
               </h3>
            </div>
         </div>
         <div class="line3">
               <div class="line3-line1-title">
                  <h3>Garantie (حالة الضمان للمنتوج) :</h3>
               </div>
               <div class="line3-line1-subtitle">
                  <h4> Sous Garantie </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
               <div class="line3-line1-subtitle">
                  <h4> Hors Garantie </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
               <div class="line3-line1-subtitle">
                  <h4> Sous réserve </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
         </div>
         <div class="line3">
               <div class="line3-line1-title">
                  <h3>Accessoires (لواحق) :</h3>
               </div>
               <div class="line3-line1-subtitle">
                  <h4> TLC </h4>
                  <table>
                     <tbody>
                           <tr>
                              <th></th>
                           </tr>
                     </tbody>
                  </table>
               </div>
               <div class="line3-line1-subtitle">
                  <h4>Carton </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
               <div class="line3-line1-subtitle">
                  <h4> Pied </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
               <div class="line3-line1-subtitle">
                  <h4>Support Mural </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
               <div class="line3-line1-subtitle">
                  <h4> Sans accessoires </h4>
                  <table>
                     <tbody><tr><th></th>
                  </tr></tbody></table>
               </div>
         </div>
         <div class="line2">
               <div class="informations">
                  <h3 class="title-left">
                     Cause de l’annulation de la garantie : 
                  </h3>
                  
                  <h3 class="title-right">
                     سبب إلغاء الضمان 
                  </h3>
               </div>
         </div>
         <div class="line4">
               <div class="line4-line1">
                  <div class="line4-line2">
                     <h4> Présence d’insectes  وجود الحشرات  </h4>
                     <table>
                           <tbody><tr><th></th>
                     </tr></tbody></table>
                  </div>
                  <div class="line4-line2">
                     <h4> Sticker ouvert ملصق مفتوح </h4>
                     <table>
                           <tbody><tr><th></th>
                     </tr></tbody></table>
                  </div>
                  <div class="line4-line2">
                     <h4> Manque fiche de garantie غياب ورقة الضمان </h4>
                     <table>
                           <tbody><tr><th></th>
                     </tr></tbody></table>
                  </div>
               </div>
               <div class="line4-line1">
                  <div class="line4-line2">
                     <h4> Présence de moisissure وجود الرطوبة </h4>
                     <table>
                           <tbody><tr><th></th>
                     </tr></tbody></table>
                  </div>
                  <div class="line4-line2">
                     <h4>Dalle cassée  شاشة مكسورة  </h4>
                     <table>
                           <tbody><tr><th></th>
                     </tr></tbody></table>
                  </div>
                  <div class="line4-line2">
                     <h4> Autre </h4>
                     <table>
                           <tbody><tr><th></th>
                     </tr></tbody></table>
                  </div>
               </div>
         </div>
         <div class="line2">
               <div class="informations">
                  <h3 class="text-left">
                     Diagnostique initial
                  </h3>
                  <h3 class="text-center">
                     ........................................................................................................................................................
                  </h3>
                  <h3 class="text-right">
                     التشخيص الاولي
                  </h3>
               </div>
               <div class="informations">
                  <h3 class="title-left">
                     Prix de réparation estimé
                  </h3>
                  <h3 class="title-center">
                     ...........................................................................................................................................
                  </h3>
                  <h3 class="title-right">
                     السعر التقديري للاصلاح
                  </h3>
               </div>
               <div class="informations">
                  <h3 class="title-left">
                     Date de récupération prévisionnelle
                  </h3>
                  <h3 class="title-center">
                     ...................................................................................................................
                  </h3>
                  <h3 class="title-right">
                     التاريخ التقديري للاسترجاع
                  </h3>
               </div>
               <div class="informations">
                  <h3 class="title-left">
                     Date de récupération prévisionnelle
                  </h3>
                  <div class="subline2">
                     <div class="subinformations">
                           <h3 class="title-left">
                              01
                           </h3>
                           <h3 class="title-center">
                              .........................................................................................................
                           </h3>
                           <h3 class="title-right">
                              DA
                           </h3>
                     </div>
                     <div class="subinformations">
                           <h3 class="title-left">
                              02
                           </h3>
                           <h3 class="title-center">
                              .........................................................................................................
                           </h3>
                           <h3 class="title-right">
                              DA
                           </h3>
                     </div>
                     <div class="subinformations">
                           <h3 class="title-left">
                              Prix Total (السعر الاجمالي )
                           </h3>
                           <h3 class="title-center">
                              .......................................................................
                           </h3>
                           <h3 class="title-right">
                              DA
                           </h3>
                     </div>
                  </div>
                  <h3 class="title-right">
                     التاريخ التقديري للاسترجاع
                  </h3>
               </div>
         </div>
         <div class="line5">
              <h4>ملاحظة</h4>
              <p>
                  هذا الوصل هو وثيقة اثبات إيداع المنتوج ولا يمكن استرجاع المنتوج من دونه، يمكن تقديم الوصل لشخص اخر لاسترجاع
         المنتوج مرفقا بنسخة لبطاقة التعريف الوطنية مع امضائها من طرف المعني بالأمر
              </p>
              <p lang=“ar”>
                  إن وضع المنتج ضمن الفئة () يعني أن المنتج يمكن أن يكون "تحت الضمان" أو "خارج الضمان" حتى إنشاء التقرير التشخيصي الذي يثبت حالة المنتج-</p>
              <p>
                  وفقا لأحكام المادة 11 من المرسوم التنفيذي رقم 21-244، فإن شركة () و/أو وكلائها المعتمدين ليست مسؤولة عن المنتجات التي تجاوزت مدة إيداعها سنة واحدة من تاريخ الإرجاع المقدر. تحتفظ شركة () بالحق في التصرف وفقًا لأحكام المادة المذكورة أعلاه.    
              </p>
         </div>
         <div class="line6">
               <h4>Remarque :</h4>
               <p>
                  - Ce document prouve le dépôt du produit et ce dernier ne peut être récupéré sans la présentation de ce document. Le 
                  produit peut être récupérer par une tierce personne, sous condition de présenté une photocopie de la CNI du déposant.
               </p>
               <p>
                  - Le placement du produit sous la catégorique (sous réserve) signifie que le produit peut être en ‘’sous garantie’’ 
                  ou ‘’hors garantie’’ jusqu’à l’établissement du rapport de diagnostic prouvant l’état du produit.
               </p>
               <p>
                  - Conformément aux dispositions de l'article 11 du décret exécutif numéro 21-244, la société BOMARE COMPANY et/ou ses mandataires agréés ne sont pas responsables des produits dont la durée de dépôt a dépassé une année à compter de la date de restitution estimée. BOMARE COMPANY se réserve le droit d'agir conformément aux dispositions de l'article susmentionné.
               </p>
               <div class="line8">
                     <span>
                        Afin de suivre l’état d’avancement de la réparation de votre produit Veuillez scanner le code QR en y insérant votre nom et ID 
               client ou bien de vous connecter à la plateforme via vos identifiants sur le lien suivant: https://sav.streamsystem.com/index.php
   
                     </span>
               </div>
         </div>
         <div class="line9">
               <table>
                  <tbody>
                      <tr>
                     <th>
                           Nom
                     </th>
                     <th>

                     </th>
                  </tr>
                  <tr>
                     <th>
                           ID
                     </th>
                     <th>

                     </th>
                  </tr>
                  </tbody>
               </table>
              <div class="QRcode" id="qrcode"></div>
         </div>
         <div class="line10">
               <p>
                  Le Client : Vu, lu et approuvé (Signature) 
               </p>
               <p>
                  SAV Bomare Company (Cachet)
               </p>
         </div>
         <div class="line11">
              <div class="line11-line1">
                  <h4>Pour nous contacter :</h4>
                  <h4>للاتصال بنا</h4>
              </div>
              <div class="line11-line2">
                  <h4>Écoute client : 0560-012-841</h4>
                  <h4>E-mail : ecoute.client@bomarecompany.com / Page Facebook : @STREAM </h4>
              </div>
         </div>
         <img class="bottom-bar-img" src="/images/bottomPDF.png" alt="Logo-Stream-System"/>
      </div>
      <script>
         var qrcode = new QRCode(document.getElementById("qrcode"), {
               text: "https://www.google.com", 
               width: 60,
               height: 60
         });
      </script>
   </body>
     `;
 };