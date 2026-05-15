package com.tarifvergleich.electricity.service.admin;

import com.tarifvergleich.electricity.exception.InternalServerException;
import com.tarifvergleich.electricity.model.AdminEmailManagement;
import com.tarifvergleich.electricity.repository.AdminEmailManagementRepository;
import com.tarifvergleich.electricity.util.Helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminEmailManagementService {

	@Autowired
	private AdminEmailManagementRepository repository;

	public AdminEmailManagement saveEmail(AdminEmailManagement emailManagement) {

		if (emailManagement.getTitle() == null || emailManagement.getTitle().trim().isEmpty()) {

			throw new InternalServerException("Title cannot be empty", HttpStatus.OK);
		}

		if (emailManagement.getSubtitle() == null || emailManagement.getSubtitle().trim().isEmpty()) {

			throw new InternalServerException("Subtitle cannot be empty", HttpStatus.OK);

		}

		if (emailManagement.getEmailContent() == null || emailManagement.getEmailContent().trim().isEmpty()) {

			throw new InternalServerException("Email content cannot be empty", HttpStatus.OK);
		}

		if (emailManagement.getCategory() == null) {

			throw new InternalServerException("Category must be selected", HttpStatus.OK);

		}

		emailManagement.setCreatedBy("Admin");
		emailManagement.setCreatedDate(Helper.getCurrentTimeBerlin());
		return repository.save(emailManagement);

	}
	
	public List<AdminEmailManagement> getAllEmails() {
		return repository.findAll();
	}
}