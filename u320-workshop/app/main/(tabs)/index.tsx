import MessageItem, { Message } from "@/components/Our-Components/message";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const messagelist: Message[] = [
  { messageId: "1", subject: "Hoş geldiniz!", isRead: false },
  { messageId: "2", subject: "Fatura bildirimi", isRead: true },
  { messageId: "3", subject: "Etkinlik daveti", isRead: false },
  { messageId: "4", subject: "Yeni özellikler eklendi", isRead: true },
  { messageId: "5", subject: "Arkadaş isteği", isRead: false },
  { messageId: "6", subject: "Şifre sıfırlama", isRead: true },
  { messageId: "7", subject: "Kampanya fırsatları", isRead: false },
  { messageId: "8", subject: "Hesap güncellemesi", isRead: true },
  { messageId: "9", subject: "Ödeme onayı", isRead: false },
  { messageId: "10", subject: "Yedekleme tamamlandı", isRead: true },
  { messageId: "11", subject: "Doğum günü kutlu olsun!", isRead: false },
  { messageId: "12", subject: "Yeni mesajınız var", isRead: true },
  { messageId: "13", subject: "Etkinlik hatırlatma", isRead: false },
  { messageId: "14", subject: "Abonelik yenileme", isRead: true },
  { messageId: "15", subject: "Uygulama güncellemesi", isRead: false },
  { messageId: "16", subject: "Kredi kartı bildirimi", isRead: true },
  { messageId: "17", subject: "Siparişiniz kargolandı", isRead: false },
  { messageId: "18", subject: "Siparişiniz teslim edildi", isRead: true },
  { messageId: "19", subject: "Yeni cihaz giriş yaptı", isRead: false },
  { messageId: "20", subject: "Anket daveti", isRead: true },
  { messageId: "21", subject: "Destek talebiniz güncellendi", isRead: false },
  { messageId: "22", subject: "Ödeme başarısız", isRead: true },
  { messageId: "23", subject: "Ödeme başarılı", isRead: false },
  { messageId: "24", subject: "Arkadaşınız sizi ekledi", isRead: true },
  { messageId: "25", subject: "Haftalık rapor hazır", isRead: false },
  { messageId: "26", subject: "E-posta adresinizi doğrulayın", isRead: true },
  { messageId: "27", subject: "Telefon numaranızı doğrulayın", isRead: false },
  { messageId: "28", subject: "Yeni yorum var", isRead: true },
  { messageId: "29", subject: "Yeni beğeni aldınız", isRead: false },
  { messageId: "30", subject: "Uygulama içi ödül kazandınız", isRead: true },
  { messageId: "31", subject: "Toplantı daveti", isRead: false },
  { messageId: "32", subject: "Haftalık özet", isRead: true },
  { messageId: "33", subject: "Profiliniz güncellendi", isRead: false },
  { messageId: "34", subject: "Eğitim kursu başladı", isRead: true },
  { messageId: "35", subject: "Etkinlik kaydınız onaylandı", isRead: false },
  { messageId: "36", subject: "Yeni arkadaş önerisi", isRead: true },
  { messageId: "37", subject: "Kampanya süresi uzatıldı", isRead: false },
  { messageId: "38", subject: "Hesabınıza giriş yapıldı", isRead: true },
  { messageId: "39", subject: "Yorumunuza cevap geldi", isRead: false },
  { messageId: "40", subject: "Günlük bildirimleriniz", isRead: true },
  { messageId: "41", subject: "Yeni sürüm notları", isRead: false },
  { messageId: "42", subject: "Sistem bakımı duyurusu", isRead: true },
  { messageId: "43", subject: "Abonelik indirimi", isRead: false },
  { messageId: "44", subject: "Kayıt başarıyla tamamlandı", isRead: true },
  { messageId: "45", subject: "Yeni görev atandı", isRead: false },
  { messageId: "46", subject: "Göreviniz tamamlandı", isRead: true },
  { messageId: "47", subject: "Grup daveti", isRead: false },
  { messageId: "48", subject: "Yeni bir dosya paylaşıldı", isRead: true },
  { messageId: "49", subject: "Takipçi kazandınız", isRead: false },
  { messageId: "50", subject: "Takipçi kaybettiniz", isRead: true },
];

const Messages = () => {

    const [messages, setMessages] = useState(messagelist);

    const readMessage = (message: Message) => {
        console.log('Message read');
        message.isRead = true;
    }

    /*
    const readMessages = (message: Message) => {
        setMessages( messages.map( (msg) => msg.messageId == message.messageId ? {...msg, isRead: true} : msg ) )
    }
    */

    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                {messages.map( (message) => (
                    <MessageItem key={message.messageId} message={message} onClick={ (message: Message) => { readMessage(message)} }/>
                ) )}
                <Text> Messages Screen</Text>
            </View>
        </ScrollView>
    )
}

export default Messages;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    body: {
        flex: 1, alignItems: 'center', margin: 10, borderRadius: 20
    }
})

