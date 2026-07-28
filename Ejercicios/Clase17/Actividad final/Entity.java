package com.messaging.shared.domain;

import java.util.Objects;

/**
 * Clase base para toda entidad del dominio.
 * SRP: su única responsabilidad es definir identidad y comparación por id.
 * LSP: cualquier subclase puede sustituir a Entity<ID> sin romper el contrato
 * de equals/hashCode, ya que ambos dependen únicamente de getId().
 */
public abstract class Entity<ID> {

    protected final ID id;

    protected Entity(ID id) {
        if (id == null) {
            throw new IllegalArgumentException("El id de la entidad no puede ser nulo");
        }
        this.id = id;
    }

    public ID getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Entity<?> entity)) return false;
        return Objects.equals(id, entity.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}