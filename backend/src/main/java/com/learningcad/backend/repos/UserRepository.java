package com.learningcad.backend.repos;

import org.springframework.data.repository.CrudRepository;
import com.learningcad.backend.domain.User;

public interface UserRepository extends CrudRepository<User, Integer> {
}
