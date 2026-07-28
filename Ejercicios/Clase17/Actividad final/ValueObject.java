package com.messaging.shared.domain;

/**
 * Marcador para Value Objects.
 * Un Value Object no tiene identidad propia: dos instancias con los mismos
 * atributos son iguales. Las implementaciones deben ser inmutables
 * (usar 'record' siempre que sea posible) y sobrescribir equals/hashCode
 * basándose en sus atributos, nunca en una referencia.
 *
 * ISP: esta interfaz no fuerza ningún método; solo documenta intención,
 * evitando que los clientes dependan de comportamiento que no necesitan.
 */
public interface ValueObject {
}