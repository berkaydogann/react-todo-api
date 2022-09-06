# Todo App

Bu projede, Web API ile basit bir React To Do CRUD uygulaması oluşturma sürecini adım adım anlatacağız. Görevleri olacak, görevleri ekleyebileceğiz, güncelleyebileceğiz, listeleyebileceğiz veya silebileceğiz.

![image](https://user-images.githubusercontent.com/74268411/188707980-e76d198a-ae90-4334-95e9-9e76ec04e689.png)

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Bu basit to-do uygulamasında input'tan aldığımız değeri todo-list'te listelemektedir. Bu proje kapsamında CRUD işlemleri için mockAPI kullanılmıştır. Api işlemlerinde axios paketi kullanılmıştır.


### İpuçları

1. Sürecin ilk adımında kullanıcı adı ve tema tercihi girildiğinde localstorage de saklanmaktadır.
2. "Add" butonuna bastıktan sonra post metodu ile api'ye aynı zamanda listeye yazmaktadır.
3. "Completed" butonuna basıldığında completed statüsü true olup daha sonrasında ilgii todo'nun tamamlandığını belirtmek amacıyla üstü çizili hale gelmektedir.
4. "Edit" butonuna basıldıktan sonra input girilen alana seçili todo gelir değişiklilik sonrasında OK butonuna basıldığında api de güncelleme için put komutu kullanılmaktadır.
