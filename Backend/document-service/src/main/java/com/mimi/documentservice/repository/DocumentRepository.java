package com.mimi.documentservice.repository;

import com.mimi.documentservice.model.Document;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class DocumentRepository {
    private List<Document> documents = new ArrayList<>();

    public Document addDocument(Document document) {
        documents.add(document);
        return document;
    }
}
