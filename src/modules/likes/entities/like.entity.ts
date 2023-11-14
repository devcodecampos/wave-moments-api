import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "../../posts/entities/post.entity";
import { User } from "../../users/entities/user.entity";

@Entity("likes")
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Post, (post) => post.likes)
  @JoinColumn({ name: "post_id" })
  post: Post;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn({ name: "user_id" })
  user: User;
}