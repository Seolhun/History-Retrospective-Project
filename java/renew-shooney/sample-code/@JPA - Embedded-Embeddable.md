# 10.11.2017
Author : [SeolHun](https://github.com/SeolHun)
IDE : IntelliJ

---
- Should know these annotations.
@Embeddable
@Embeddaded
@Access


---
```Java
import hi.cord.com.user.main.user.domain.user.User;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;

import javax.persistence.*;

/**
 * <h2>The type Common domain For Entity.</h2>
 * <p>
 * AccessType is so important to access from Embedded Class
 * </p>
 *
 * @Field : CREATED_NICKNAME
 * @Property : nickname
 */
@Data
@Access(AccessType.PROPERTY)
@Embeddable
public class CreatedByEntity {
    @CreatedBy
    @Column(name = "CREATED_NICKNAME", length = 60)
    private String nickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CREATED_BY", foreignKey = @ForeignKey(name = "USER_ID"))
    private User user;
}
```

```java
mport hi.cord.com.user.main.user.domain.user.User;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;

import javax.persistence.*;

/**
 * <h2>The type Common domain For Entity.</h2>
 * <p>
 * AccessType is so important to access from Embedded Class
 * </p>
 *
 * @Field : CREATED_NICKNAME
 * @Property : nickname
 */
@Data
@Access(AccessType.PROPERTY)
@Embeddable
public class CreatedByEntity {
    @CreatedBy
    @Column(name = "CREATED_NICKNAME", length = 60)
    private String nickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CREATED_BY", foreignKey = @ForeignKey(name = "USER_ID"))
    private User user;
}
```

---
```java

import hi.cord.com.user.common.domain.CreatedByEntity;
import hi.cord.com.user.common.domain.ModifiedByEntity;
import hi.cord.com.user.common.domain.entity.BaseEntity;
import hi.cord.com.user.common.domain.entity.CommonAddress;
import hi.cord.com.user.common.domain.enumtypes.CommonState;
import hi.cord.com.user.main.price.domain.history.PaidHistory;
import hi.cord.com.user.main.user.domain.profile.UserProfile;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * The type User.
 */
@Entity(name = "TB_USER")
@EqualsAndHashCode(callSuper = false)
@ToString(callSuper = true)
@Getter
@Setter
public class User extends BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="USER_ID")
    private long id;

    @NotNull
    @Column(name = "NICKNAME", length = 60, unique = true, nullable = false)
    private String nickname;

    // User, about Account state
    @Column(name = "STATE", length = 20)
    private CommonState state;

    // User, Boolean account is NON_EXPIRED or not.
    @Column(name = "IS_ACCOUNT_NON_EXPIRED", length = 1)
    private boolean isAccountNonExpired;

    // User, Boolean account is NON_EXPIRED or not.
    @Column(name = "IS_ACCOUNT_NON_LOCKED", length = 1)
    private boolean isAccountNonLocked;

    // User, Boolean account is CREDENTIALS_NON_EXPIRED or not.
    @Column(name = "IS_CREDENTIALS_NONEXPIRED", length = 1)
    private boolean isCredentialsNonExpired;

    // User, Boolean account is NON_LOCKED or not.
    @Column(name = "IS_ENABLED", length = 1)
    private boolean isEnabled;

    @CreatedBy
    @AssociationOverrides({
            @AssociationOverride(name = "user", joinColumns = @JoinColumn(name = "CREATED_BY"))
    })
    @AttributeOverrides({
            @AttributeOverride(name = "user", column = @Column(name = "CREATED_BY")),
            @AttributeOverride(name = "nickname", column = @Column(name = "CREATED_NICKNAME", length = 60))
    })
    @Embedded
    private CreatedByEntity createdByEntity;

    @LastModifiedBy
    @AssociationOverrides({
            @AssociationOverride(name = "user", joinColumns = @JoinColumn(name = "LAST_MODIFIED_BY"))
    })
    @AttributeOverrides({
            @AttributeOverride(name = "user", column = @Column(name = "LAST_MODIFIED_BY")),
            @AttributeOverride(name = "nickname", column = @Column(name = "LAST_MODIFIED_NICKNAME", length = 60))
    })
    @Embedded
    private ModifiedByEntity modifiedByEntity;
```
