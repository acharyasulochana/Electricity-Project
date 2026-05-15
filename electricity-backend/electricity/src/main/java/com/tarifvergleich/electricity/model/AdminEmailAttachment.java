package com.tarifvergleich.electricity.model;

import java.math.BigInteger;

import com.tarifvergleich.electricity.util.Helper;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "email_attachment")
public class AdminEmailAttachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_date")
    private BigInteger createdDate;

    @ManyToOne
    @JoinColumn(name = "email_management_id")
    private AdminEmailManagement emailManagement;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public BigInteger getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(BigInteger createdDate) {
        this.createdDate = createdDate;
    }
    
    @PrePersist
    protected void onCreate() {
    	createdDate = Helper.getCurrentTimeBerlin();    }

    public AdminEmailManagement getEmailManagement() {
        return emailManagement;
    }

    public void setEmailManagement(AdminEmailManagement emailManagement) {
        this.emailManagement = emailManagement;
    }
}