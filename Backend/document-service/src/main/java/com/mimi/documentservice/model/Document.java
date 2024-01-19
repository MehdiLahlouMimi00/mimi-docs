package com.mimi.documentservice.model;

import java.util.ArrayList;
import java.util.List;

public class Document {
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return Title;
    }

    public String getContent() {
        return Content;
    }

    public Long getOwnerId() {
        return OwnerId;
    }

    public List<Long> getCollaboratorsIds() {
        return CollaboratorsIds;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public void setContent(String content) {
        Content = content;
    }

    public void setOwnerId(Long ownerId) {
        OwnerId = ownerId;
    }

    public void setCollaboratorsIds(List<Long> collaboratorsIds) {
        CollaboratorsIds = collaboratorsIds;
    }

    private Long id;
    private String Title;
    private String Content;
    private Long OwnerId;
    private List<Long> CollaboratorsIds = new ArrayList<>();

    public Document(Long id, String title, String content, Long ownerId) {
        this.id = id;
        Title = title;
        Content = content;
        OwnerId = ownerId;
    }


}
