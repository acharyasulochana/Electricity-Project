package com.tarifvergleich.electricity.service.admin;

import com.tarifvergleich.electricity.model.AdminEmailAttachment;
import com.tarifvergleich.electricity.repository.AdminEmailAttachmentRepository;
import com.tarifvergleich.electricity.util.Helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminEmailAttachmentService {

    @Autowired
    private AdminEmailAttachmentRepository repository;

    public AdminEmailAttachment saveAttachment(AdminEmailAttachment attachment) {

        attachment.setCreatedDate(Helper.getCurrentTimeBerlin());

        return repository.save(attachment);
    }
}