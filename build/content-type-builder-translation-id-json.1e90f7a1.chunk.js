"use strict";(self.webpackChunkart_gharana_api=self.webpackChunkart_gharana_api||[]).push([[2151],{23363:a=>{a.exports=JSON.parse('{"attribute.boolean":"Boolean","attribute.boolean.description":"Ya atau tidak, 1 atau 0, benar atau salah","attribute.component":"Komponen","attribute.component.description":"Grup dari bidang yang dapat diulang","attribute.date":"Tanggal","attribute.date.description":"Date picker dengan jam, menit dan detik","attribute.datetime":"Tanggal waktu","attribute.dynamiczone":"Zona dinamis","attribute.dynamiczone.description":"Ambil konten dinamis ketika edit kontent","attribute.email":"Email","attribute.email.description":"Bidang email dengan format validasi","attribute.enumeration":"Pencacahan","attribute.enumeration.description":"Daftar nilai, lalu pilih satu","attribute.json":"JSON","attribute.json.description":"Data dalam format JSON","attribute.media":"Media","attribute.media.description":"File seperti gambar, video, dll","attribute.null":" ","attribute.number":"Angka","attribute.number.description":"Angka (integer, pecahan, desimal)","attribute.password":"Kata sandi","attribute.password.description":"Kata sandi dengan enkripsi","attribute.relation":"Relasi","attribute.relation.description":"Mengacu pada Jenis Koleksi","attribute.richtext":"Rich teks","attribute.richtext.description":"Editor teks kaya dengan opsi pemformatan","attribute.text":"Teks","attribute.text.description":"Teks kecil atau panjang seperti judul atau deskripsi","attribute.time":"Waktu","attribute.timestamp":"Timestamp","attribute.uid":"UID","attribute.uid.description":"Pengenal unik","button.attributes.add.another":"Tambahkan bidang lain","button.component.add":"Tambahkan komponen","button.component.create":"Buat komponen baru","button.model.create":"Buat jenis koleksi baru","button.single-types.create":"Buat tipe tunggal baru","component.repeatable":"(berulang)","components.componentSelect.no-component-available":"Anda telah menambahkan semua komponen Anda","components.componentSelect.no-component-available.with-search":"Tidak ada komponen yang cocok dengan pencarian Anda","components.componentSelect.value-component":"{number} komponen dipilih (ketik untuk mencari komponen)","components.componentSelect.value-components":"{number} komponen dipilih","configurations":"konfigurasi","contentType.collectionName.description":"Berguna jika nama Jenis Konten dan nama tabel Anda berbeda","contentType.collectionName.label":"Nama koleksi","contentType.displayName.label":"Nama tampilan","contentType.draftAndPublish.description":"Tulis versi draf dari setiap entri sebelum menerbitkannya","contentType.draftAndPublish.label":"Draf / sistem terbitkan","contentType.kind.change.warning":"Anda baru saja mengubah jenis tipe konten: API akan disetel ulang (rute, pengontrol, dan layanan akan ditimpa).","error.attributeName.reserved-name":"Nama ini tidak dapat digunakan dalam tipe konten Anda karena dapat merusak fungsi lainnya","error.contentTypeName.reserved-name":"Nama ini tidak dapat digunakan dalam proyek Anda karena dapat merusak fungsi lainnya","error.validation.enum-duplicate":"Nilai duplikat tidak diperbolehkan","error.validation.minSupMax":"Tidak bisa lebih unggul","error.validation.regex":"Pola ekspresi reguler tidak valid","error.validation.relation.targetAttribute-taken":"Nama ini ada di target","form.attribute.component.option.add":"Tambahkan komponen","form.attribute.component.option.create":"Buat komponen baru","form.attribute.component.option.create.description":"Sebuah komponen dibagikan ke seluruh tipe dan komponen, itu akan tersedia dan dapat diakses di mana saja.","form.attribute.component.option.repeatable":"Komponen yang dapat diulang","form.attribute.component.option.repeatable.description":"Terbaik untuk beberapa contoh (larik) bahan, tag meta, dll ..","form.attribute.component.option.reuse-existing":"Gunakan komponen yang ada","form.attribute.component.option.reuse-existing.description":"Gunakan kembali komponen yang sudah dibuat untuk menjaga data Anda tetap konsisten di seluruh tipe konten.","form.attribute.component.option.single":"Komponen tunggal","form.attribute.component.option.single.description":"Paling baik untuk mengelompokkan bidang seperti alamat lengkap, informasi utama, dll ...","form.attribute.item.customColumnName":"Nama kolom kustom","form.attribute.item.customColumnName.description":"Ini berguna untuk mengganti nama kolom database dalam format yang lebih komprehensif untuk respons API","form.attribute.item.defineRelation.fieldName":"Nama bidang","form.attribute.item.enumeration.graphql":"Nama pengganti untuk GraphQL","form.attribute.item.enumeration.graphql.description":"Memungkinkan Anda untuk mengganti nama default yang dibuat untuk GraphQL ","form.attribute.item.enumeration.placeholder":"Misal:\\npagi\\nsiang\\nsore","form.attribute.item.enumeration.rules":"Nilai (satu baris per nilai)","form.attribute.item.maximum":"Nilai maksimum","form.attribute.item.maximumLength":"Panjang maksimum","form.attribute.item.minimum":"Nilai minimum","form.attribute.item.minimumLength":"Panjang minimum","form.attribute.item.number.type":"Format angka","form.attribute.item.number.type.biginteger":"big integer (misal: 123456789)","form.attribute.item.number.type.decimal":"desimal (misal: 2.22)","form.attribute.item.number.type.integer":"integer (misal: 10)","form.attribute.item.privateField":"Bidang pribadi","form.attribute.item.privateField.description":"Bidang ini tidak akan ditampilkan di request API","form.attribute.item.requiredField":"Bidang wajib","form.attribute.item.requiredField.description":"Bidang ini wajib diisi untuk meneruskan data","form.attribute.item.text.regex":"Pola RegExp","form.attribute.item.text.regex.description":"Teks ekspresi reguler","form.attribute.item.uniqueField":"Bidang unik","form.attribute.item.uniqueField.description":"Anda tidak dapat membuat entri jika sudah ada entri dengan konten identik","form.attribute.media.allowed-types":"Pilih jenis media yang diizinkan","form.attribute.media.allowed-types.option-files":"File","form.attribute.media.allowed-types.option-images":"Gambar","form.attribute.media.allowed-types.option-videos":"Video","form.attribute.media.option.multiple":"Banyak media","form.attribute.media.option.multiple.description":"Paling baik untuk pengunduhan penggeser, komidi putar, atau banyak file","form.attribute.media.option.single":"Media tunggal","form.attribute.media.option.single.description":"Terbaik untuk avatar, gambar profil, atau sampul","form.attribute.settings.default":"Nilai default","form.attribute.text.option.long-text":"Teks panjang","form.attribute.text.option.long-text.description":"Terbaik untuk deskripsi, biografi. Pencarian yang tepat dinonaktifkan.","form.attribute.text.option.short-text":"Teks pendek","form.attribute.text.option.short-text.description":"Terbaik untuk judul, nama, tautan (URL). Ini juga memungkinkan pencarian yang tepat di lapangan.","form.button.add-components-to-dynamiczone":"Tambahkan komponen ke zona","form.button.add-field":"Tambahkan bidang lain","form.button.add-first-field-to-created-component":"Tambahkan bidang pertama ke komponen","form.button.add.field.to.collectionType":"Tambahkan bidang lain ke jenis koleksi ini","form.button.add.field.to.component":"Tambahkan bidang lain ke komponen ini","form.button.add.field.to.contentType":"Tambahkan bidang lain ke jenis konten ini","form.button.add.field.to.singleType":"Tambahkan bidang lain ke jenis tunggal ini","form.button.cancel":"Batal","form.button.collection-type.description":"Paling baik untuk berbagai contoh seperti artikel, produk, komentar, dll.","form.button.configure-component":"Konfigurasikan komponen","form.button.configure-view":"Konfigurasi tampilan","form.button.select-component":"Pilih sebuah komponen","form.button.single-type.description":"Terbaik untuk satu contoh seperti tentang kami, beranda, dll.","from":"dari","modalForm.attribute.form.base.name.description":"Tidak ada spasi yang diperbolehkan untuk nama atribut","modalForm.attribute.form.base.name.placeholder":"Misalnya Siput, urlSeo, urlKanonis","modalForm.attribute.target-field":"Bidang terlampir","modalForm.attributes.select-component":"Pilih komponen","modalForm.attributes.select-components":"Pilih komponen","modalForm.component.header-create":"Buat komponen","modalForm.components.create-component.category.label":"Pilih kategori atau masukkan nama untuk membuat yang baru","modalForm.components.icon.label":"Ikon","modalForm.editCategory.base.name.description":"Tidak ada spasi yang diperbolehkan untuk nama kategori","modalForm.header-edit":"Edit {name}","modalForm.header.categories":"Kategori","modalForm.singleType.header-create":"Buat jenis tunggal","modalForm.sub-header.addComponentToDynamicZone":"Tambahkan komponen baru ke zona dinamis","modalForm.sub-header.attribute.create":"Tambah bidang {type}","modalForm.sub-header.attribute.create.step":"Tambah komponen ({step}/2)","modalForm.sub-header.attribute.edit":"Edit {name}","modalForm.sub-header.chooseAttribute.collectionType":"Pilih bidang untuk jenis koleksi Anda","modalForm.sub-header.chooseAttribute.component":"Pilih bidang untuk komponen Anda","modalForm.sub-header.chooseAttribute.singleType":"Pilih bidang untuk tipe tunggal Anda","modelPage.attribute.relation-polymorphic":"Hubungan (polimorfik)","modelPage.attribute.relationWith":"Hubungan dengan","notification.info.autoreaload-disable":"Fitur autoReload diperlukan untuk menggunakan plugin ini. Mulai server Anda dengan `strapi develop`","notification.info.creating.notSaved":"Harap simpan pekerjaan Anda sebelum membuat jenis atau komponen koleksi baru","plugin.description.long":"Buat model struktur data API Anda. Buat bidang dan relasi baru hanya dalam satu menit. File secara otomatis dibuat dan diperbarui dalam proyek Anda.","plugin.description.short":"Buat model struktur data API Anda.","popUpForm.navContainer.advanced":"Pengaturan lanjut","popUpForm.navContainer.base":"Pengaturan dasar","popUpWarning.bodyMessage.cancel-modifications":"Anda yakin ingin membatalkan modifikasi Anda?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Anda yakin ingin membatalkan modifikasi Anda? Beberapa komponen telah dibuat atau dimodifikasi ...","popUpWarning.bodyMessage.category.delete":"Anda yakin ingin menghapus kategori ini? Semua komponen juga akan dihapus.","popUpWarning.bodyMessage.component.delete":"Anda yakin ingin menghapus komponen ini?","popUpWarning.bodyMessage.contentType.delete":"Anda yakin ingin menghapus jenis koleksi ini?","popUpWarning.draft-publish.button.confirm":"Ya, non-aktifkan","popUpWarning.draft-publish.message":"Jika Anda menonaktifkan sistem Draf / Terbitkan, draf Anda akan dihapus.","popUpWarning.draft-publish.second-message":"Anda yakin ingin menonaktifkannya?","prompt.unsaved":"Anda yakin ingin pergi? Semua modifikasi Anda akan hilang.","relation.attributeName.placeholder":"Misal: penulis, kategori, tag","relation.manyToMany":"memiliki dan menjadi milik banyak orang","relation.manyToOne":"memiliki banyak","relation.manyWay":"memiliki banyak","relation.oneToMany":"memiliki banyak orang","relation.oneToOne":"memiliki dan menjadi milik satu","relation.oneWay":"memiliki satu"}')}}]);
