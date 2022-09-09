package com.springdev.flastats.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.springdev.flastats.entities.Stats;
import com.springdev.flastats.repositories.StatsRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private StatsRepository statsRepository;
	
	public void sendSms(Long statsId) {
		
		Stats stats = statsRepository.findById(statsId).get();
		
		String date = stats.getDate().getDayOfMonth() + "/" + stats.getDate().getMonthValue() + "/" + stats.getDate().getYear();
		
		String msg = "O jogador " + stats.getPlayerName() + " solicitou uma renovação de contrato. Seu contrato irá até " + date;

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
