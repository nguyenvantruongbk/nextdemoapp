package com.example.becrud.service;



import com.example.becrud.model.Product;
import com.example.becrud.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    public Product getProductById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Product addProduct(Product product) {
        return repository.save(product);
    }

    public Product updateProduct(Long id, Product product) {
        Product existing = repository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(product.getName());
            existing.setDescription(product.getDescription());
            existing.setPrice(product.getPrice());
            return repository.save(existing);
        }
        return null;
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}
